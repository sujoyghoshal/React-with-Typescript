// ContactPage.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const ContactPage: React.FC = () => (
  <div>
    <h1>Contact Page</h1>
    <p>This is the contact page.</p>
    <Link to='/'>Home</Link>
    <br />
    <Link to="/about">About</Link>
  </div>
);

export default ContactPage;
