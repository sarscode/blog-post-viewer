import { HTMLAttributes, ReactNode } from 'react';

import classNames from 'classnames';

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const Container = ({ children, className, ...props }: ContainerProps) => {
  return (
    <div
      className={classNames('container max-w-4xl', className)}
      data-testid="container"
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
