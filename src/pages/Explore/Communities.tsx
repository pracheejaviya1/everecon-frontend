import React from 'react';
import Header from '../../components/header';

export default function ExploreCommunity() {
  return (
    <div>
      <Header />
      <div className='m-10 flex flex-col divide-y divide-blue-500'>
        <div className='m-4'>
          <h1 className='my-5 text-lg text-center'>Explore Communities</h1>
          <div className='flex align-items-center justify-around'>
            <div className='flex w-1/5 items-end justify-evenly'>
              <button
                type='button'
                className='flex justify-left rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500'
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
              <text className='text-sm'>Reset</text>
            </div>
            <form>
              <label>
                <input
                  type='text'
                  className='border-none'
                  placeholder='Location'
                  name='firstName'
                />
              </label>
            </form>
          </div>
        </div>
        <div>{/* Enter card here */}</div>
      </div>
    </div>
  );
}
