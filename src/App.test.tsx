import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import App from './App';
import { describe, expect, it } from 'vitest';

describe('App', () => {
  it('renders DashboardArea and Calculator on corresponding routes', async () => {
    const history = createMemoryHistory();

    render(
      <Router history={history}>
        <App />
      </Router>
    );

    // Navigate to the "/" route
    history.push('/');

    // Check if DashboardArea is rendered
    expect(screen.getByTestId('dashboard-area')).toBeInTheDocument();

    // Navigate to the "/calculator" route
    history.push('/calculator');

    // Check if Calculator is rendered
    expect(screen.getByTestId('calculator')).toBeInTheDocument();
  });
});
