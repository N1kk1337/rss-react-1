import React from 'react';
import { render, screen, userEvent } from '../src/utils/test-utils';
import { HashRouter, MemoryRouter } from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/store';

const AppWrapper = () => (
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
);

describe('App component', () => {
  test('renders header component', () => {
    render(<AppWrapper />);
    expect(screen.getByText(/Main/i)).toBeInTheDocument();
  });

  test('renders main page by default', () => {
    render(<AppWrapper />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  test('navigates to about page', async () => {
    render(<AppWrapper />);
    await userEvent.click(screen.getByText(/About/i));
    expect(screen.getByText(/Welcome to our site/i)).toBeInTheDocument();
  });

  test('navigates to forms page', async () => {
    render(<AppWrapper />);
    await userEvent.click(screen.getByText(/Forms/i));
    expect(screen.getByText(/Send me your cats!/i)).toBeInTheDocument();
  });

  test('navigates to error page when an invalid route is accessed', () => {
    render(
      <MemoryRouter initialEntries={['/non-existent-route']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByAltText(/Error/i)).toBeInTheDocument();
  });
});
