import Button, { ButtonProps } from './Button';
import { render, screen } from '@testing-library/react';

it('should render a button with crashing', () => {
  const props: ButtonProps = {
    label: 'Button',
  };

  render(<Button {...props} />);
  const button = screen.getByRole('button', { name: props.label });
  expect(button).toBeInTheDocument();
});
