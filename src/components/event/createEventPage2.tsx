import * as React from 'react';
import Header from '../header';

export default function CreateEventTwo() {
  return (
    <div className='h-screen'>
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
          <span className='text-4xl flex-grow text-center'>Create Event</span>
        </div>
        <form className='flex flex-col my-8 w-1/4'>
          <div className='flex items-center justify-between w-full my-2'>
            <label className='m-2' htmlFor='Date'>
              Date
            </label>
            <input
              className='border border-black p-2 rounded-lg'
              placeholder='Date'
              name='Date'
            />
          </div>
          <div className='flex items-center justify-between w-full my-2'>
            <label className='m-2' htmlFor='Time'>
              Time
            </label>
            <input
              className='border border-black p-2 rounded-lg'
              placeholder='Time'
              name='Time'
            />
          </div>
          <div className='flex items-center justify-between w-full my-2'>
            <label className='m-2' htmlFor='Tags'>
              Tags
            </label>
            <input
              className='border border-black p-2 rounded-lg'
              placeholder='Tags'
              name='Tags'
            />
          </div>
          <div className='flex items-center justify-between w-full my-2'>
            <label className='m-2' htmlFor='limit'>
              Participant Limit
            </label>
            <input
              className='border border-black p-2 rounded-lg'
              placeholder='limit'
              type='number'
              name='limit'
            />
          </div>
          <div className='flex items-center justify-between w-full my-2'>
            <label className='m-2' htmlFor='fees'>
              Fees
            </label>
            <input
              className='border border-black p-2 rounded-lg'
              type='currency'
              placeholder='fees'
              name='fees'
            />
          </div>
        </form>
        <button
          type='submit'
          className='border w-1/12 my-8 border-black rounded-lg p-4'
          onClick={e => e.preventDefault()}
        >
          Next
        </button>
      </div>
    </div>
  );
}
