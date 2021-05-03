import * as React from 'react';
import Header from '../../components/header';
import SpeakerProfile from '../../assets/Images/default.jpg';

export default function UpdateEventTwo() {
  return (
    <div className='h-screen w-screen'>
      <Header />
      <div className='flex flex-col my-8 justify-center items-center ml-12 mr-0 w-full'>
        <div className='flex items-end justify-between border-b-2 pb-4 w-2/3'>
          <div className='flex items-center justify-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5 mr-2'
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
            <h1 className='text-xl ml-2 font-base text-center font-inter text-gray-700'>
              Add Speaker
            </h1>
          </div>
          <ul className='flex list-none'>
            <li className='mx-2 text-green-500 font-inter'>Save</li>
            <li className='mx-2 text-red-500 font-inter'>Discard</li>
          </ul>
        </div>
        <div>
          <div className='flex flex-col mx-auto items-center justify-center'>
            <img src={SpeakerProfile} className='my-8 h-40 w-40 rounded-full' />
            <span className='font-mulish font-xs'>Add photo</span>
            <div className='flex flex-col justify-between mx-auto font-mulish my-4'>
              <div className='flex flex-row items-center'>
                <label
                  htmlFor='firstname'
                  className='mb-1 font-mulish text-2xl mt-1 w-24 mx-6'
                >
                  Name
                </label>
                <input
                  type='text'
                  className='rounded-lg bg-gray-100 border-gray-100 w-96'
                  name='firstname'
                />
              </div>
              <div className='flex flex-row'>
                <label
                  htmlFor='Links'
                  className='mb-1 font-inter text-xl m-5 mx-6'
                >
                  Links
                </label>
              </div>
              <div className='flex flex-row items-center mt-2'>
                <label
                  htmlFor='email id'
                  className='mb-1 font-mulish w-24 text-lg mt-1 mx-6'
                >
                  Email ID
                </label>
                <input
                  type='text'
                  className='rounded-lg bg-gray-100 border-gray-100 w-96'
                />
              </div>
              <div className='flex flex-row items-center mt-2'>
                <label
                  htmlFor='website url'
                  className='mb-1 font-mulish text-lg mt-1 w-24 mx-6'
                >
                  Website
                </label>
                <input
                  type='text'
                  className='rounded-lg bg-gray-100 border-gray-100 w-96'
                />
              </div>
              <div className='flex flex-row items-center mt-2'>
                <label
                  htmlFor='linkedin url'
                  className='mb-1 font-mulish w-24 text-lg mt-1 mx-6'
                >
                  LinkedIn
                </label>
                <input
                  type='text'
                  className='rounded-lg bg-gray-100 border-gray-100 w-96'
                />
              </div>
              <div className='flex flex-row items-center mt-2'>
                <label
                  htmlFor='instagram url'
                  className='mb-1 font-mulish w-24 text-lg mt-1 mx-6'
                >
                  Instagram
                </label>
                <input
                  type='text'
                  className='rounded-lg bg-gray-100 border-gray-100 w-96'
                />
              </div>
              <div className='flex flex-row items-center mt-2'>
                <label
                  htmlFor='facebook url'
                  className='mb-1 font-mulish w-24 text-lg mt-1 mx-6'
                >
                  Facebook
                </label>
                <input
                  type='text'
                  className='rounded-lg bg-gray-100 border-gray-100 w-96'
                />
              </div>
              <div className='flex flex-row items-center mt-2'>
                <label
                  htmlFor='twitter url'
                  className='mb-1 font-mulish w-24 text-lg mt-1 mx-6'
                >
                  Twitter
                </label>
                <input
                  type='text'
                  className='rounded-lg bg-gray-100 border-gray-100 w-96'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
