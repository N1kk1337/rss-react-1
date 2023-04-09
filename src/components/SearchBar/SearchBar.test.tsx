import React from 'react';
import SearchBar from './SearchBar';
import { fireEvent, render } from '../../utils/test-utils';
import { SearchBarProps } from './SearchBar';
import { vi } from 'vitest';

describe('SearchBar test', () => {
  const defaultProps: SearchBarProps = {
    searchValue: 'cat',
    setSearchValue: () => {},
    onSearch: () => {},
  };
  it('should render the search bar', () => {
    const { getByPlaceholderText } = render(<SearchBar {...defaultProps} />);
    const inputElement = getByPlaceholderText("Everybody's looking for something");
    expect(inputElement).toBeInTheDocument();
  });

  it('should call the onSearch function when the search button is clicked', () => {
    const onSearchMock = vi.fn();
    const { getByRole } = render(
      <SearchBar searchValue="" setSearchValue={() => {}} onSearch={onSearchMock} />
    );
    const buttonElement = getByRole('button');
    fireEvent.click(buttonElement);
    expect(onSearchMock).toHaveBeenCalled();
  });

  it('should call the onSearch function when the enter key is pressed', () => {
    const onSearchMock = vi.fn();
    const { getByPlaceholderText } = render(
      <SearchBar searchValue="" setSearchValue={() => {}} onSearch={onSearchMock} />
    );
    const inputElement = getByPlaceholderText("Everybody's looking for something");
    fireEvent.keyUp(inputElement, { key: 'Enter', code: 'Enter' });
    expect(onSearchMock).toHaveBeenCalled();
  });

  it('should update the search value when the input value changes', () => {
    const setSearchValueMock = vi.fn();
    const { getByPlaceholderText } = render(
      <SearchBar searchValue="" setSearchValue={setSearchValueMock} onSearch={() => {}} />
    );
    const inputElement = getByPlaceholderText("Everybody's looking for something");
    fireEvent.change(inputElement, { target: { value: 'test' } });
    expect(setSearchValueMock).toHaveBeenCalledWith('test');
  });
});
