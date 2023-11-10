import { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  variant?: 'base';
}

const Button = ({ label, variant = 'base', ...props }: ButtonProps) => {
  return (
    <button
      className="py-1 px-3 rounded-full text-gray-500 border-current border hover:bg-gray-100 hover:text-gray-800 transition-colors disabled:text-gray-300 disabled:hover:bg-transparent"
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
