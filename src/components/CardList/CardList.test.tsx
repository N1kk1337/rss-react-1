import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, screen, waitFor } from '../../utils/test-utils';
import { API_BASE_URL } from '../../config/api';
import CardList from './CardList';

const server = setupServer();

const mockPhotosResponse = {
  photos: {
    photo: [
      {
        id: '1',
        title: 'Test Photo',
        ownername: 'Test Owner',
        server: '123',
        secret: 'abc',
      },
    ],
  },
};

describe('CardList', () => {
  beforeAll(() => {
    server.listen();
  });

  afterEach(() => {
    server.resetHandlers();
  });

  afterAll(() => {
    server.close();
  });

  test('renders CardList component with error message', async () => {
    server.use(
      rest.get(`${API_BASE_URL}`, (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );

    render(<CardList searchValue="" />);

    const errorMessage = await screen.findByText(/Error: 500/i);
    expect(errorMessage).toBeInTheDocument();
  });

  test('renders CardList component with unknown error message', async () => {
    server.use(
      rest.get(`${API_BASE_URL}`, (req, res, ctx) => {
        return res(ctx.json({}));
      })
    );

    render(<CardList searchValue="" />);

    const unknownErrorMessage = await screen.findByText(/Cannot read properties of undefined/i);
    expect(unknownErrorMessage).toBeInTheDocument();
  });
  test('renders the CardList component with photos', async () => {
    server.use(
      rest.get(`${API_BASE_URL}`, (req, res, ctx) => {
        return res(ctx.json(mockPhotosResponse));
      })
    );
    render(<CardList searchValue="" />);

    await waitFor(() => {
      expect(screen.getByText(/Test Photo/i)).toBeInTheDocument();
      expect(screen.getByText(/Test Owner/i)).toBeInTheDocument();
    });
  });

  test('renders the CardList component with search results', async () => {
    server.use(
      rest.get(`${API_BASE_URL}`, (req, res, ctx) => {
        return res(ctx.json(mockPhotosResponse));
      })
    );
    render(<CardList searchValue="search" />);

    await waitFor(() => {
      expect(screen.getByText(/Test Photo/i)).toBeInTheDocument();
      expect(screen.getByText(/Test Owner/i)).toBeInTheDocument();
    });
  });
});
