import { Link, navigate } from 'gatsby';
import * as React from 'react';
import HeadingTitle from '../assets/Images/headingTitle.png';
import SearchContext from '../context/searchcontext.js';
import Dropdown from './dropdown';

export default function Header() {
  const [searchcon, setSearchcon] = React.useContext(SearchContext);
  const [search, setSearch] = React.useState('');
  return (
    <nav
      id='header'
      className='flex flex-row items-center bg-gray-50 justify-evenly h-28 top-0 left-0 w-screen'
    >
      <Link to='/Landing/landing'>
        <img src={HeadingTitle} width='139' height='41' alt='EveRecon' />
      </Link>
      <div className='flex flex-initial rounded-lg w-1/3 bg-gray-100 p-2'>
        <input
          type='text'
          placeholder='What are you looking for?'
          className='placeholder-gray-400 border-none text-xs w-full bg-gray-100 font-mulish'
          value={search}
          onChange={e => {
            setSearch(e.target.value);
          }}
        />
      </div>
      <button
        className='font-inter my-2 text-xs bg-blue-400 text-white rounded-lg px-3 py-2'
        onClick={() => {
          setSearchcon(search);
          navigate('/search');
          // navigate to search results
        }}
      >
        Search
      </button>
      <ul className='links flex flex-row justify-evenly font-mulish'>
        <li className='m-4'>
          <Link to='/Landing/landing'>About</Link>
        </li>
        <Dropdown />
        <li className='m-4'>Contact</li>
        <li className='m-4'>Help</li>
      </ul>
      <ul className='flex flex-row justify-center'>
        <li className='my-2 m-7'>
          <Link to='/Settings/SettingsAccount'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-7 w-7'
              fill='none'
              viewBox='0 0 24 24'
              stroke='#737B7D'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z'
              />
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={1}
                d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
              />
            </svg>
          </Link>
        </li>
        <li>
          <Link to='/Profiles/userProfile'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-12 w-12'
              viewBox='0 0 20 20'
              fill='#737B7D'
              opacity='0.4'
            >
              <path
                fillRule='evenodd'
                d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z'
                clipRule='evenodd'
              />
            </svg>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
