import { act, render, screen } from '../../../utils/test-utils';
import MyCatCard from './MyCatCard';
import { MyCatModel } from './MyCatModel';
import React from 'react';

const mockCat: MyCatModel = {
  name: 'Fluffy',
  breed: 'Persian',
  gender: '1',
  birthDate: '2020-01-01',
  fluffiness: 4,
  friendliness: 3,
  bites: false,
  description: 'A very fluffy cat',
  img: {
    0: new File([''], 'placeholder_cat.jpg', { type: 'image/jpeg' }),
    length: 1,
    item: () => null,
    [Symbol.iterator]: function* () {
      let index = 0;
      while (index < this.length) {
        yield this[index++];
      }
    },
  },
};

describe('MyCatCard', () => {
  test('renders the MyCatCard component with cat information', async () => {
    await act(async () => {
      render(<MyCatCard {...mockCat} />);
    });
    const catName = screen.getByText('Fluffy');
    const catBreed = screen.getByText('Breed: Persian');
    const catGender = screen.getByText('Sex: Male');
    const catBirthday = screen.getByText('Birthday: 2020-01-01');
    const catFluffiness = screen.getByText(/Fluffiness/i);
    const catFriendliness = screen.getByText(/Friendliness/i);
    const catBites = screen.getByText('Bites? No!');
    const catDescription = screen.getByText('Description: A very fluffy cat');

    expect(catName).toBeInTheDocument();
    expect(catBreed).toBeInTheDocument();
    expect(catGender).toBeInTheDocument();
    expect(catBirthday).toBeInTheDocument();
    expect(catFluffiness).toBeInTheDocument();
    expect(catFriendliness).toBeInTheDocument();
    expect(catBites).toBeInTheDocument();
    expect(catDescription).toBeInTheDocument();
  });
});
