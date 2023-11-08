import { HTMLAttributes, ReactNode } from 'react';

import classNames from 'classnames';

export interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
  element?: 'span' | 'p' | 'small';
  size?: 'base' | 'sm' | 'xs';
}

const Text = ({
  children,
  element = 'p',
  size = 'base',
  className,
  ...props
}: TextProps) => {
  const TagName = element;

  return (
    <TagName
      className={classNames(
        {
          'text-base': size === 'base',
          'text-sm': size === 'sm',
          'text-xs': size === 'xs',
        },
        className,
      )}
      {...props}
    >
      {children}
    </TagName>
  );
};

export default Text;
