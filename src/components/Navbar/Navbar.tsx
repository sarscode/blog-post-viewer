import { Container, Logo } from 'components';

import { Link } from 'react-router-dom';
import routes from 'routes';

const Navbar = () => {
  return (
    <Container>
      <div className="py-4 flex justify-between">
        <Link to={routes.home}>
          <Logo />
        </Link>
      </div>
    </Container>
  );
};

export default Navbar;
