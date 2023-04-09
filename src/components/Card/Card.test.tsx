import { render, screen } from '../../utils/test-utils';
import Card, { CardProps } from './Card';
import testCat from '../../assets/test_cat.jpg';
import React from 'react';
import { vi } from 'vitest';

vi.stubGlobal('navigator', {
  clipboard: {
    writeText: () => {},
  },
});

describe('Card test', () => {
  const defaultProps: CardProps = {
    id: 'testId',
    img: testCat,
    breed: 'test cat',
    wiki: 'https://en.wikipedia.org/wiki/Persian_cat',
    sheddingLevel: 3,
    friendly: 5,
    temperament: 'test temperament',
  };
  it('should show all card elements ', () => {
    render(<Card {...defaultProps} />);
    expect(screen.getByText(/test temperament/i)).toBeInTheDocument();
    expect(screen.getByText(/test cat/i)).toBeInTheDocument();
    expect(screen.getByText(/Breed Info/i)).toBeInTheDocument();
    expect(screen.getByText(/Like/i)).toBeInTheDocument();
    expect(screen.getByText(/Share/i)).toBeInTheDocument();
    expect(screen.getByText(/Fluffiness/i)).toBeInTheDocument();
    expect(screen.getByText(/Cuteness/i)).toBeInTheDocument();
  });

  it('calls handleLike function when like button is clicked', () => {
    const handle = vi.spyOn(window, 'alert');
    render(<Card {...defaultProps} />);
    const likeButton = screen.getByText(/Like/i);
    likeButton.click();
    expect(handle).toHaveBeenCalledWith('Do you like this cat? He likes you too!');
  });

  it('calls handleShare function when like button is clicked', async () => {
    render(<Card {...defaultProps} />);
    const handle = vi.spyOn(window, 'alert');
    const shareButton = screen.getByText(/Share/i);
    shareButton.click();
    expect(handle).toHaveBeenCalledWith('URL copied to clipboard :3');
  });
});
