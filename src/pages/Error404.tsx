import { Container, Heading, Text } from 'components';

import { Link } from 'react-router-dom';
import routes from 'routes';

const Error404 = () => {
  return (
    <Container className="max-w-lg">
      <div className="flex min-h-screen justify-center flex-col items-center">
        <Heading>Page Not Found</Heading>
        <Text className="mb-4">How did you get here?</Text>
        <Link to={routes.home}>Return Home</Link>
      </div>
    </Container>
  );
};

export default Error404;
