import React from 'react';
import { cva } from 'class-variance-authority';
import Logo from '../logo';
const container = cva('flex justify-around px-8 py-6');

const Navbar = () => {
  return (
    <div className={container()}>
      <Logo />
    </div>
  );
};

export default Navbar;
