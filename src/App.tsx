import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Error404 from 'pages/Error404';
import Home from 'pages/Home';
import { Layout } from 'components';
import PostContextProvider from 'context/postContext';
import PostPage from 'pages/PostPage';
import routes from 'routes';

function App() {
  const router = createBrowserRouter([
    {
      path: routes.home,
      element: <Layout />,
      errorElement: <Error404 />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: routes.postItem,
          element: <PostPage />,
        },
      ],
    },
  ]);

  return (
    <>
      <PostContextProvider>
        <RouterProvider router={router} />
      </PostContextProvider>
    </>
  );
}

export default App;
