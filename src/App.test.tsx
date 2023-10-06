import { render, screen } from '@testing-library/react';

import App from './App';

describe('', () => {
  it('test', () => {
    render(<App />);

    expect(screen.getByText('App')).toBeInTheDocument();
  });
});
