import { Link } from 'gatsby';
import * as React from 'react';
import Rectangle from '../../../assets/Images/Rectangle6.png';
import Header from '../../../components/header';

export default function CreateCommunityOne() {
  return (
    <div className='h-screen w-screen'>
      <Header />
      <div className='flex flex-col h-5/6 justify-center items-center'>
        <div className='flex items-center justify-between border-b-2 pb-2 w-1/2'>
          <Link to='/Profiles/userProfile'>
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
          </Link>

          <span className='text-3xl flex-grow text-center font-base font-mulish'>
            Create Community
          </span>
        </div>
        <figure className='mt-8 mb-6'>
          <img className='h-40 w-60 rounded-lg' src={Rectangle} />
          <figcaption className='py-2 text-center font-mulish'>
            Upload Community photo
          </figcaption>
        </figure>
        <form className='flex flex-col'>
          <label className='my-2' htmlFor='Community name'>
            <input
              className='border border-gray p-2 rounded-lg font-roboto text-sm'
              placeholder='Community name'
              name='Community name'
            />
          </label>
          <label className='my-2' htmlFor='email id'>
            <input
              className='border border-gray p-2 rounded-lg font-roboto text-sm'
              placeholder='email id'
              name='email id'
            />
          </label>
          <label className='my-2' htmlFor='Description'>
            <input
              className='border border-gray p-2 rounded-lg font-roboto text-sm'
              placeholder='Description'
              name='Description'
            />
          </label>
        </form>
        <Link
          to='/Create/Community/createCommunityPage2'
          className='my-6 bg-blue-500 rounded-md text-white py-2 px-4 font-inter'
        >
          Next
        </Link>
      </div>
    </div>
  );
}