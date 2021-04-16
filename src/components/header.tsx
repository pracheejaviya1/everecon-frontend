import { Link } from 'gatsby';
import * as React from 'react';
import HeadingTitle from '../assets/Images/headingTitle.png';

export default function Header() {
  return (
    <nav className='flex flex-row items-center bg-gray-50 justify-evenly h-28'>
      <img src={HeadingTitle} width='139' height='41' alt='EveRecon' />
      <div className='flex flex-initial rounded-lg w-1/3 bg-gray-100 p-2'>
        <input
          type='text'
          placeholder='What are you looking for?'
          className='placeholder-gray-400 border-none text-xs w-full bg-gray-100 font-mulish'
        />
      </div>
      <ul className='links flex flex-row justify-evenly font-mulish'>
        <li className='m-4'>
          <Link to='/about'>About</Link>
        </li>
        <li className='m-4'>
          <Link to='/explore'>Explore</Link>
        </li>
        <li className='m-4'>
          <Link to='/contact'>Contact</Link>
        </li>
        <li className='m-4'>
          <Link to='/help'>Help</Link>
        </li>
      </ul>
      <ul>Icons</ul>
    </nav>
  );
}
