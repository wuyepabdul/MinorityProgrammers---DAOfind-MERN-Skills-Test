import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../dao-logo.svg';

const SideBar = () => {
  return (
    <div>
      <div className='mb-5'>
        {' '}
        <img className='logo' src={logo} alt='logo' />
      </div>
      <ul className='nav-menu '>
        <li>
          <Link className='link' to='/'>
            <i className='fas fa-home'></i>Home
          </Link>
        </li>
        <li>
          <Link className='link' to='/addDao'>
            <i className='far fa-plus-square'></i>Add
          </Link>
        </li>
        <li>
          <Link className='link' to='/learn'>
            <i className='fas fa-book'></i>Learn
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
