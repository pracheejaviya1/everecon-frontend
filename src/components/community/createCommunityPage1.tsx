import * as React from 'react';
import communityImage from '../../assets/Images/default.jpg';
import Header from '../header';

export default function CreateCommunityOne() {
  return (
    <div className='h-screen'>
      <Header />
      {/*Add back icon */}
      <div className='flex flex-col h-5/6 my-8 justify-center items-center'>
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
          <span className='text-4xl flex-grow text-center'>
            Create Community
          </span>
        </div>
        <figure className='mt-8 mb-6'>
          <img className='h-60 w-80 rounded-lg' src={communityImage} />
          <figcaption className='py-2 text-center'>
            Upload Community photo
          </figcaption>
        </figure>
        <form className='flex flex-col'>
          <label className='my-2' htmlFor='Community name'>
            <input
              className='border border-black p-2 rounded-lg'
              placeholder='Community name'
              name='Community name'
            />
          </label>
          <label className='my-2' htmlFor='email id'>
            <input
              className='border border-black p-2 rounded-lg'
              placeholder='email id'
              name='email id'
            />
          </label>
          <label className='my-2' htmlFor='Description'>
            <input
              className='border border-black p-2 rounded-lg'
              placeholder='Description'
              name='Description'
            />
          </label>
        </form>
        <div>
          <span>Location</span>
          <span> Bharuch</span> {/*Add location spinner*/}
          <button>(change)</button>
        </div>
        <button type='submit'>Next</button>
      </div>
    </div>
  );
}
