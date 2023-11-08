import { Logo, Text } from 'components';

const Navbar = () => {
  return (
    <div className="py-4 flex justify-between">
      <Logo />
      <Text>Source Code</Text>
    </div>
  );
};

export default Navbar;
