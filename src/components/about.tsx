// AboutPage.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => (
  <div>
    <h1>About Page</h1>
    <p>This is the about page.</p>
    <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
    </ul>
    <br />
  </div>
);

export default AboutPage;
