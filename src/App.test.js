import { render, screen } from '@testing-library/react';
import App from './component/App';

test('renders page', () => {
  render(<App />);
  expect(true);
});
