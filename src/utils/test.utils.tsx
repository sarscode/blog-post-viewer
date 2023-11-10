import { BrowserRouter } from 'react-router-dom';
import React from 'react';

type TestLayoutProps = 'react-router' | 'static';

const ReactRouterWrapper = ({ component }: { component: React.ReactNode }) => {
  return <BrowserRouter>{component}</BrowserRouter>;
};

export const getTestLayout = (
  component: JSX.Element,
  type?: TestLayoutProps,
) => {
  switch (type) {
    case 'react-router':
      return <ReactRouterWrapper component={component} />;
    case 'static':
      return component;
    default:
      return component;
  }
};
