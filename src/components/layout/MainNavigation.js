import React from 'react';
import { navLinks } from '../../utils/nav-links';
import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link to={link.link}>{link.text}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
