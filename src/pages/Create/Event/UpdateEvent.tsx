import * as React from 'react';
import EventImage from '../../../assets/Images/community.jpg';
import Header from '../../../components/header';

type UpdateProps = {
  details: string;
};

export default function UpdateEventTwo(props: UpdateProps) {
  console.log(props.location);
  return (
    <div className='h-screen w-screen'>
      <Header />
      <div className='flex flex-col my-8 justify-center items-center ml-12 mr-0 w-full'>
        <div className='flex items-end justify-between border-b-2 pb-4 w-2/3'>
          <div className='flex items-center justify-center'>
            <svg
              xmlns='https://www.w3.org/2000/svg'
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
            <h1 className='text-2xl ml-2 font-light text-center font-mulish text-gray-700'>
              Update Event
            </h1>
          </div>
          <ul className='flex list-none'>
            <li className='mx-2 text-green-500 font-inter'>Save</li>
            <li className='mx-2 text-red-500 font-inter'>Discard</li>
          </ul>
        </div>
        <div className='flex mx-auto w-2/3 font-mulish my-4'>
          <label>
            <img
              className='h-48 w-72 items-center justify-between rounded-lg hover:shadow-lg'
              src={EventImage}
            />
            <input type='file' className='hidden' />
            <figcaption className='py-2 text-center items-center justify-between text-xs font-mulish'>
              Update Event photo
            </figcaption>
          </label>
          <div className='grid items-top grid-cols-2 mx-10 h-24 w-3/5 font-inter'>
            <input
              className='col-span-2 bg-gray-100 rounded-md p-2 font-sm placeholder-gray my-3 mx-3'
              placeholder='Event Name'
            />
            <input
              className=' bg-gray-100 rounded-md p-2 font-sm placeholder-gray my-3 mx-3'
              placeholder='Date'
            />
            <input
              className=' bg-gray-100 rounded-md p-2 font-sm placeholder-gray my-3 mx-3'
              placeholder='Time'
            />
            <input
              className='bg-gray-100 rounded-md p-2 font-sm placeholder-gray my-3 mx-3'
              placeholder='City'
            />
            <input
              className='bg-gray-100 rounded-md p-2 font-sm placeholder-gray my-3 mx-3'
              placeholder='Country'
            />
          </div>
          <button
            type='submit'
            className='text-white bg-red-500 h-1/4 p-2 items-end rounded-md'
            onClick={e => e.preventDefault()}
          >
            Delete Event
          </button>
        </div>
        <div className='w-2/3 mx-auto font-mulish'>
          <form>
            <div className='flex items-center justify-between w-2/5'>
              <label className=' text-lg' htmlFor='Address'>
                Address
              </label>
              <input className='col-span-2 w-72 bg-gray-100 rounded-md p-2 font-sm placeholder-gray my-3 mx-3' />
            </div>
            <div className='flex items-center justify-between w-2/5 my-4'>
              <label htmlFor='online'>Make this event online</label>
              <input
                className='bg-gray-100 rounded-full border border-gray-100 h-6 w-6'
                placeholder='online'
                type='checkbox'
                name='online'
              />
            </div>
            <div className='flex items-center justify-between w-2/5'>
              <label className='text-lg' htmlFor='Host'>
                Host
              </label>
              <input className='col-span-2 w-72 bg-gray-100 rounded-md p-2 font-sm placeholder-gray my-3 mx-3' />
            </div>
            <div className='flex items-center justify-between w-2/5'>
              <label className='text-lg' htmlFor='Event URL'>
                Event URL
              </label>
              <input className='col-span-2 w-72 bg-gray-100 rounded-md p-2 font-sm placeholder-gray my-3 mx-3' />
            </div>
            <div className='flex items-center justify-between w-2/5'>
              <label className='text-lg' htmlFor='Category'>
                Category
              </label>
              <input className='col-span-2 w-72 bg-gray-100 rounded-md p-2 font-sm placeholder-gray my-3 mx-3' />
            </div>

            <div className='flex flex-row'>
              <div className=' w-2/5'>
                <label className='text-md' htmlFor='Start time'>
                  Start Time
                </label>
                <input className='col-span-2 w-72 bg-gray-100 rounded-md p-2 font-sm placeholder-gray my-3 mx-3' />
              </div>
              <div className=' w-2/5'>
                <label className='text-md' htmlFor='End time'>
                  End Time
                </label>
                <input className='col-span-2 w-72 bg-gray-100 rounded-md p-2 font-sm placeholder-gray my-3 mx-3' />
              </div>
            </div>
          </form>
        </div>
        <div className='w-2/3 my-2 mx-auto font-inter'>
          <h2 className='font-bold my-2'>Event Details</h2>
          <textarea className='w-1/2 h-72 rounded-md bg-gray-100 border border-gray-100'>
            {props.details}
          </textarea>
        </div>
      </div>
    </div>
  );
}
