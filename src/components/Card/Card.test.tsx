import { fireEvent, render, screen } from '../../utils/test-utils';
import Card, { CardProps } from './Card';
import React from 'react';

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

  it('should show the modal window when the card is clicked', () => {
    render(<Card {...defaultProps} />);
    const cardElement = screen.getByTestId('card');
    fireEvent.click(cardElement);
    const modalElement = screen.getByText(/Loading.../i);
    expect(modalElement).toBeInTheDocument();
  });

  it('should hide the modal window when cross is clicked', () => {
    render(<Card {...defaultProps} />);
    const cardElement = screen.getByTestId('card');
    fireEvent.click(cardElement);
    const closeButtonElement = screen.getByTestId('modal-close');
    fireEvent.click(closeButtonElement);
    const modalElement = screen.queryByText(/Loading.../i);
    expect(modalElement).not.toBeInTheDocument();
  });
});
