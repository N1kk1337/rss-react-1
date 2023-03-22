import { render, screen } from '../../utils/test-utils';
import CardList from '../CardList/CardList';
import data from '../../assets/cats_data.json';
import React from 'react';

describe('CardList', () => {
  it('should render a card for each item in the data array', () => {
    render(<CardList />);

    // check that all cards are rendered
    const cards = screen.getAllByTestId('card');
    expect(cards.length).toBe(data.length);

    data.forEach((item) => {
      expect(screen.getByTestId(item.id)).toBeInTheDocument();
    });
  });
});
