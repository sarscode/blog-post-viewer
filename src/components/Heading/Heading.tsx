import { HTMLAttributes } from 'react';
import classNames from 'classnames';

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  children: string;
  level?: 'h1' | 'h2' | 'h3';
}

const Heading = ({ children, level = 'h2', ...props }: HeadingProps) => {
  const TagName = level;
  return (
    <TagName
      className={classNames(
        {
          'text-3xl': level === 'h1',
          'text-2xl': level === 'h2',
          'text-xl': level === 'h3',
        },
        'font-semibold',
      )}
      {...props}
    >
      {children}
    </TagName>
  );
};

export default Heading;
