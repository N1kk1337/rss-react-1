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
    img: '123',
    title: 'TestTitle',
    photographerName: 'TestPhotographerName',
  };
  it('should show all card elements ', () => {
    render(<Card {...defaultProps} />);
    expect(screen.getByText(/TestTitle/i)).toBeInTheDocument();
    expect(screen.getByText(/TestPhotographerName/i)).toBeInTheDocument();
  });

  // it('calls handleLike function when like button is clicked', () => {
  //   const handle = vi.spyOn(window, 'alert');
  //   render(<Card {...defaultProps} />);
  //   const likeButton = screen.getByText(/Like/i);
  //   likeButton.click();
  //   expect(handle).toHaveBeenCalledWith('Do you like this cat? He likes you too!');
  // });

  // it('calls handleShare function when like button is clicked', async () => {
  //   render(<Card {...defaultProps} />);
  //   const handle = vi.spyOn(window, 'alert');
  //   const shareButton = screen.getByText(/Share/i);
  //   shareButton.click();
  //   expect(handle).toHaveBeenCalledWith('URL copied to clipboard :3');
  // });
});
