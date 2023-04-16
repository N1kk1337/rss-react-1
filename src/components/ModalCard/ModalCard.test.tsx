import ModalCard from './ModalCard';
import React from 'react';
import { fireEvent, screen, render, waitFor } from '../../utils/test-utils';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { vi } from 'vitest';
import createFetchMock from 'vitest-fetch-mock';
import { API_BASE_URL } from '../../config/api';

const server = setupServer();

const fetchMocker = createFetchMock(vi);

const photoDetails = {
  id: '12345',
  server: '111',
  secret: 'abcdef',
  title: {
    _content: 'Test Photo',
  },
  owner: {
    realname: 'John Doe',
  },
  description: {
    _content: 'This is a test photo.',
  },
  dates: {
    taken: '2023-01-01 00:00:00',
  },
};

const onCloseMock = vi.fn();

describe('ModalCard', () => {
  beforeEach(() => {
    fetchMocker.doMock();
  });
  beforeAll(() => {
    server.listen();
  });

  afterEach(() => {
    server.resetHandlers();
  });

  afterAll(() => {
    server.close();
  });

  test('renders ModalCard component with photo details and closes modal', async () => {
    server.use(
      rest.get(`${API_BASE_URL}`, (req, res, ctx) => {
        return res(ctx.json({ photo: photoDetails }));
      })
    );

    render(<ModalCard id={photoDetails.id} onClose={onCloseMock} />);

    await waitFor(() => {
      expect(screen.getByText(photoDetails.title._content)).toBeInTheDocument();
      expect(screen.getByText(`Photographer: ${photoDetails.owner.realname}`)).toBeInTheDocument();
      expect(screen.getByText(/Description:/i)).toBeInTheDocument();
      expect(screen.getByText(`Taken: ${photoDetails.dates.taken}`)).toBeInTheDocument();
      expect(screen.getByText(`ID: ${photoDetails.id}`)).toBeInTheDocument();
    });

    const closeButton = screen.getByTestId('modal-close');
    fireEvent.click(closeButton);
    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });
});
