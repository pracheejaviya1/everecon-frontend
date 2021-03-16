import React from 'react';
import Header from '../../components/header';

export default function ExploreCommunity() {
  return (
    <div>
      <Header />
      <h1>Explore Communities</h1>
      <div className='inline-block text-center'>
        <div>
          <button
            type='button'
            className='inline-flex justify-left w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500'
            id='options-menu'
            aria-expanded='true'
            aria-haspopup='true'
          >
            Domain
            <svg
              className='-mr-1 ml-2 h-5 w-5'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              aria-hidden='true'
            >
              <path
                fill-rule='evenodd'
                d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                clip-rule='evenodd'
              />
            </svg>
          </button>
        </div>
      </div>
      <text>Reset</text>
      <form>
        <label>
          Location
          <input type='text' name='firstName' />
        </label>
      </form>
    </div>
  );
}
