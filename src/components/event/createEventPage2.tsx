import * as React from 'react';
import Header from '../header';

export default function CreateEventTwo() {
  return (
    <div className='h-screen w-screen'>
      <Header />
      <div className='flex flex-col my-8 justify-start h-5/6 items-center'>
        <div className='flex items-center justify-between border-b-2 pb-2 w-1/2'>
          <svg
            xmlns='https://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M10 19l-7-7m0 0l7-7m-7 7h18'
            />
          </svg>
          <span className='text-4xl flex-grow text-center font-mulish'>
            Create Event
          </span>
        </div>
        <form className='flex flex-col my-8 w-1/4'>
          <div className='flex items-center justify-between w-full my-2'>
            <label className='m-2  font-mulish' htmlFor='Date'>
              Date
            </label>
            <input
              className='border border-gray-400 p-2 w-80 rounded-lg font-roboto text-sm'
              name='Date'
            />
          </div>
          <div className='flex items-center justify-between w-full my-2'>
            <label className='m-2 font-mulish' htmlFor='Time'>
              Time
            </label>
            <input
              className='border border-gray-400 p-2 w-80 rounded-lg font-roboto text-sm'
              name='Time'
            />
          </div>
          <div className='flex items-center justify-between w-full my-2'>
            <label className='m-2 font-mulish' htmlFor='Tags'>
              Tags
            </label>
            <input
              className='border border-gray-400 p-2 w-80 rounded-lg font-roboto text-sm'
              name='Tags'
            />
          </div>
          <div className='flex items-center justify-between w-full my-2'>
            <label className='m-2 font-mulish' htmlFor='limit'>
              Participant Limit
            </label>
            <input
              className='border border-gray-400 p-2 w-80 rounded-lg font-roboto text-sm'
              type='number'
              name='limit'
            />
          </div>
          <div className='flex items-center justify-between w-full my-2'>
            <label className='m-2 font-mulish' htmlFor='fees'>
              Fees
            </label>
            <input
              className='border border-gray-400 p-2 w-80 rounded-lg font-roboto text-sm'
              type='currency'
              name='fees'
            />
          </div>
        </form>
        <button
          className='text-white text-sm bg-blue-400 py-2 px-4 rounded-lg font-inter'
          onClick={e => e.preventDefault()}
        >
          Next
        </button>
      </div>
    </div>
  );
}
