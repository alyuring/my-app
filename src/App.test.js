import { render, screen } from '@testing-library/react';
import App from './App';
import ReactDOM from 'react-dom';
import userEvent from '@testing-library/user-event';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

test('renders title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Encrypt Text/i);
  expect(linkElement).toBeInTheDocument();
});

it('should render the submit button', () => {
  render(<button />)
})


test('render text input', () => {
  render(<App />);
  const inputEl = screen.getByTestId("test-input");
  expect(inputEl).toBeInTheDocument();
  expect(inputEl).toHaveAttribute("type", "text");
});


test('pass valid text to test input field', () => {
  render(<App />);

  const inputEl = screen.getByTestId("test-input");
  userEvent.type(inputEl, "aaaa");

  expect(screen.getByTestId("test-input")).toBeInTheDocument("aaaa");
  expect(screen.queryByTestId("error-msg")).not.toBeInTheDocument();
});




test('eventHandler called on click', () => {
  const handleClick = jest.fn();
  render(
  <button data-testid="test-input" onClick={handleClick} 
  input type="text" className="App-button">Submit!</button>
                
  );

  userEvent.click(screen.getByRole('button'));

  expect(handleClick).toHaveBeenCalledTimes(1);
});


