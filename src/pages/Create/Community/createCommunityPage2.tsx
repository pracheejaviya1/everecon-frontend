import * as React from 'react';
import communityImg from '../../../assets/Images/community.jpg';
import Header from '../../../components/header';

export default function CreateCommunityTwo() {
  return (
    <div className='h-screen w-screen'>
      <Header />
      <div className='flex flex-col h-5/6 justify-center items-center'>
        <div className='flex mb-2 items-center justify-between border-b-2 pb-2 w-1/2'>
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
          <span className='text-3xl flex-grow text-center font-base font-mulish'>
            Create Community
          </span>
        </div>
        <div className='flex items-center justify-start mt-4 w-1/2'>
          <span className='mr-10 text-2xl'>Add Members</span>
          <div className='flex ml-10 py-1 px-4 rounded-lg items-center justify-between bg-gray-100'>
            <input
              type='text'
              className='border-none bg-gray-100'
              placeholder='Enter member name'
            />
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
              />
            </svg>
          </div>
        </div>
        <div className='flex items-center justify-between w-1/3 my-8 mx-auto'>
          <div className='flex w-1/5 items-center justify-between'>
            <img src={communityImg} className='h-16 w-16 rounded-full' />
            <div className='mx-8'>
              <p className='my-1'>Name</p>
              <p className='my-1'>Location</p>
            </div>
          </div>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6 text-red-500'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
            />
          </svg>
        </div>
        <button
          onClick={e => e.preventDefault()}
          className=' my-6 bg-blue-500 rounded-md text-white py-2 px-4 font-inter'
        >
          Next
        </button>
      </div>
    </div>
  );
}
