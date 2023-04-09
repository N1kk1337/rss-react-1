import axios from 'axios';
import ModalCard from './ModalCard';
import React from 'react';
import { fireEvent, screen, render } from '../../utils/test-utils';
import { vi } from 'vitest';

vi.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;

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
    _content: 'This is a test photo description.',
  },
  dates: {
    taken: '2023-01-01 00:00:00',
  },
};

const onCloseMock = vi.fn();

describe('ModalCard', () => {
  beforeEach(() => {
    mockedAxios.get.mockResolvedValueOnce({ data: { photo: photoDetails } });
  });

  test('renders ModalCard component with photo details and closes modal', async () => {
    render(<ModalCard id={photoDetails.id} onClose={onCloseMock} />);

    // Wait for the photo details to load
    const titleElement = await screen.findByText(photoDetails.title._content);
    expect(titleElement).toBeInTheDocument();

    const photographerElement = screen.getByText(`Photographer: ${photoDetails.owner.realname}`);
    expect(photographerElement).toBeInTheDocument();

    const descriptionElement = screen.getByText(
      `Description: ${photoDetails.description._content}`
    );
    expect(descriptionElement).toBeInTheDocument();

    const takenElement = screen.getByText(`Taken: ${photoDetails.dates.taken}`);
    expect(takenElement).toBeInTheDocument();

    const photoIdElement = screen.getByText(`ID: ${photoDetails.id}`);
    expect(photoIdElement).toBeInTheDocument();

    const closeButton = screen.getByTestId('modal-close');
    fireEvent.click(closeButton);
    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });
});
