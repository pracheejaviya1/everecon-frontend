import * as React from 'react';
import EventImage from '../../../assets/Images/community.jpg';
import Header from '../../../components/header';

type UpdateProps = {
  details: string;
};

export default function UpdateEventTwo(props: UpdateProps) {
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
            <h1 className='text-3xl ml-2 font-light text-center font-mulish text-gray-700'>
              Update Event
            </h1>
          </div>
          <ul className='flex list-none'>
            <li className='mx-2 text-green-500 font-inter'>Save</li>
            <li className='mx-2 text-red-500 font-inter'>Discard</li>
          </ul>
        </div>
        <div className='flex items-center justify-between mx-auto w-2/3 font-mulish my-4'>
          <img src={EventImage} className='rounded-xl h-40 m-2' />
          <div className='grid grid-cols-3 mx-2'>
            <input
              className='col-span-3 bg-gray-200 rounded-md p-2 placeholder-black'
              placeholder='Talking Tech with Ingenium'
            />
            <input
              className='bg-gray-200 rounded-md p-2 placeholder-black my-3'
              placeholder='Date'
            />
            <input
              className='bg-gray-200 rounded-md p-2 placeholder-black my-3 mx-3'
              placeholder='Time'
            />
            <input
              className='bg-gray-200 rounded-md p-2 placeholder-black my-3'
              placeholder='Location'
            />
          </div>
          <button
            type='submit'
            className='text-white bg-red-500 h-1/4 p-2 rounded-md'
            onClick={e => e.preventDefault()}
          >
            Delete Event
          </button>
        </div>
        <div className='w-2/3 mx-auto font-mulish'>
          <form>
            <div className='flex items-center justify-between w-2/5 my-4'>
              <label className='m-2 text-xs' htmlFor='Host'>
                Host
              </label>
              <input
                className='bg-gray-200 placeholder-black p-2 rounded-lg text-xs'
                placeholder='Host'
                name='Host'
              />
            </div>
            <div className='flex items-center justify-between w-2/5 my-4'>
              <label className='m-2 text-xs' htmlFor='Speaker'>
                Speaker
              </label>
              <input
                className='bg-gray-200 placeholder-black p-2 rounded-lg text-xs'
                placeholder='Speaker'
                name='Speaker'
              />
            </div>
            <div className='flex items-center justify-between w-2/5 my-4'>
              <label className='m-2 text-xs' htmlFor='Fees'>
                Fees
              </label>
              <input
                className='bg-gray-200 placeholder-black p-2 rounded-lg text-xs'
                placeholder='Fees'
                type='number'
                name='Fees'
              />
            </div>
            <div className='flex items-center justify-between w-2/5 my-4'>
              <label className='m-2 text-xs' htmlFor='Tags'>
                Tags
              </label>
              <input
                className='bg-gray-200 placeholder-black p-2 rounded-lg text-xs'
                placeholder='Tags'
                name='Tags'
              />
            </div>
            <div className='flex items-center justify-between w-2/5 my-4'>
              <label className='m-2' htmlFor='online'>
                Make this event online
              </label>
              <input
                className='bg-gray-300 placeholder-black p-2 rounded-lg'
                placeholder='online'
                type='checkbox'
                name='online'
              />
            </div>
          </form>
        </div>
        <div className='w-2/3 my-2 mx-auto font-inter'>
          <h2 className='font-bold my-2'>Event Details</h2>
          <p className='w-1/2'>{props.details}</p>
        </div>
      </div>
    </div>
  );
}
