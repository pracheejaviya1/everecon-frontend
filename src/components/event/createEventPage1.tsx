import * as React from 'react';
import EventImg from '../../assets/Images/default.jpg';
import Header from '../header';

export default function CreateEventOne() {
  return (
    <div className='h-screen w-screen'>
      <Header />
      {/*Add back icon */}
      <div className='flex flex-col h-5/6 justify-center items-center'>
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
        <figure className='mt-8 mb-6'>
          <img className='h-60 w-80 rounded-lg' src={EventImg} />
          <figcaption className='py-2 text-center font-mulish'>
            Upload Event photo
          </figcaption>
        </figure>
        <form className='flex flex-col'>
          <label className='my-2' htmlFor='Community name'>
            <input
              className='border border-gray-400 p-2 w-80 rounded-lg font-roboto text-sm'
              placeholder='Community name'
              name='Community name'
            />
          </label>
          <label className='my-2' htmlFor='email id'>
            <input
              className='border border-gray-400 p-2 w-80 rounded-lg font-roboto text-sm'
              placeholder='email id'
              name='email id'
            />
          </label>
          <label className='my-2' htmlFor='Description'>
            <input
              className='border border-gray-400 p-2 w-80 h-40 rounded-lg font-roboto text-sm'
              placeholder='Description'
              name='Description'
            />
          </label>
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
