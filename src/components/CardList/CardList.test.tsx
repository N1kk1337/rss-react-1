import axios from 'axios';
import CardList from './CardList';
import React from 'react';
import { screen, render, waitFor } from '../../utils/test-utils';
import { vi } from 'vitest';

vi.mock('axios');

const mockResponse = {
  data: {
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
  },
};

describe('CardList', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  test('renders the CardList component with photos', async () => {
    (axios.get as jest.Mock).mockResolvedValue(mockResponse);

    render(<CardList searchValue="" />);

    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledTimes(1);
    });

    const photoTitle = screen.getByText(/Test Photo/i);
    const photographerName = screen.getByText(/Test Owner/i);
    expect(photoTitle).toBeInTheDocument();
    expect(photographerName).toBeInTheDocument();
  });

  test('renders the CardList component with search results', async () => {
    (axios.get as jest.Mock).mockResolvedValue(mockResponse);

    render(<CardList searchValue="search" />);

    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledTimes(1);
    });

    const photoTitle = screen.getByText(/Test Photo/i);
    const photographerName = screen.getByText(/Test Owner/i);
    expect(photoTitle).toBeInTheDocument();
    expect(photographerName).toBeInTheDocument();
  });

  test('handles error in API request', async () => {
    (axios.get as jest.Mock).mockRejectedValue(new Error('API Error'));

    console.error = vi.fn();

    render(<CardList searchValue="" />);

    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledTimes(1);
    });

    expect(console.error).toHaveBeenCalledTimes(1);
  });
});
