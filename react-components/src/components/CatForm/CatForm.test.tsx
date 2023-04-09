import { render, screen, userEvent } from '../../utils/test-utils';
import React from 'react';
import { fireEvent, waitFor } from '@testing-library/react';
import CatForm from './CatForm';
import { vi } from 'vitest';

test('shows error messages when required fields are empty', async () => {
  const onSubmit = vi.fn();

  render(<CatForm onSubmit={onSubmit} />);
  const submitButton = screen.getByText(/submit/i);

  await userEvent.click(submitButton);

  expect(screen.getByText(/Name is required/i)).toBeInTheDocument();
  expect(screen.getByText(/Birth date is required/i)).toBeInTheDocument();
  expect(screen.getByText(/Description is required/i)).toBeInTheDocument();
});

test('shows an error message when the cat name does not start with a capital letter', async () => {
  const onSubmit = vi.fn();

  render(<CatForm onSubmit={onSubmit} />);
  const nameInput = screen.getByLabelText(/name/i);
  const submitButton = screen.getByText(/submit/i);

  fireEvent.change(nameInput, { target: { value: 'catName' } });
  fireEvent.click(submitButton);

  await waitFor(() => {
    expect(screen.getByText(/name must start with a capital letter/i)).toBeInTheDocument();
  });
});

test('calls onSubmit function when the form is filled correctly', async () => {
  const onSubmit = vi.fn();

  render(<CatForm onSubmit={onSubmit} />);
  const nameInput = screen.getByLabelText(/Name/i);
  const birthDateInput = screen.getByLabelText(/birth date/i);
  const descriptionInput = screen.getByLabelText(/description/i);
  const submitButton = screen.getByText(/submit/i);

  fireEvent.change(nameInput, { target: { value: 'CatName' } });
  fireEvent.change(birthDateInput, { target: { value: '2022-01-01' } });
  fireEvent.change(descriptionInput, { target: { value: 'A cute cat.' } });

  // Add interactions for other fields
  const breedSelect = screen.getByLabelText(/breed/i);
  fireEvent.change(breedSelect, { target: { value: 'Abyssinian' } });

  const bitesCheckbox = screen.getByText(/does this cat bite/i);
  fireEvent.click(bitesCheckbox);

  fireEvent.click(submitButton);

  await waitFor(() => {
    expect(onSubmit).toHaveBeenCalledTimes(1);
  });
});
