// HomePage.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => (
  <div>
    <h1>Home Page</h1>
    <Link to='/'>Home</Link>
    <br />
    <Link to='/about'>About</Link>
    <br />
    <Link to='/contact'>Contact</Link>
  </div>
);

export default HomePage;
