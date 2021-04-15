import * as React from 'react';
import communityImg from '../../assets/Images/community.jpg';
import Header from '../../components/header';

export default function UpdateEventTwo() {
  return (
    <div className='h-screen'>
      <Header />
      <div className='flex flex-col my-8 justify-start items-start'>
        <div className='flex items-center justify-between border-b-2 pb-2 mx-auto w-3/4'>
          <p className='text-4xl font-bold text-center'>Update Event</p>
          <ul className='flex list-none'>
            <li className='mx-2 text-green-500'>Save</li>
            <li className='mx-2 text-red-500'>Discard</li>
          </ul>
        </div>
        <div className='flex items-center justify-between mx-auto w-3/4'>
          <img src={communityImg} className='rounded-xl m-2' />
          <div className='grid grid-cols-3 mx-2'>
            <input
              className='col-span-3 bg-gray-300 m-1 rounded-md p-2 placeholder-black'
              placeholder='Talking Tech with Ingenium'
            />
            <input
              className='bg-gray-300 m-1 rounded-md p-2 placeholder-black'
              placeholder='Date'
            />
            <input
              className='bg-gray-300 m-1 rounded-md p-2 placeholder-black'
              placeholder='Time'
            />
            <input
              className='bg-gray-300 m-1 rounded-md p-2 placeholder-black'
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
        <div className='w-3/4 mx-auto'>
          <form>
            <div className='flex items-center justify-between w-2/5 my-4'>
              <label className='m-2' htmlFor='Host'>
                Host
              </label>
              <input
                className='bg-gray-300 placeholder-black p-2 rounded-lg'
                placeholder='Host'
                name='Host'
              />
            </div>
            <div className='flex items-center justify-between w-2/5 my-4'>
              <label className='m-2' htmlFor='Speaker'>
                Speaker
              </label>
              <input
                className='bg-gray-300 placeholder-black p-2 rounded-lg'
                placeholder='Speaker'
                name='Speaker'
              />
            </div>
            <div className='flex items-center justify-between w-2/5 my-4'>
              <label className='m-2' htmlFor='Fees'>
                Fees
              </label>
              <input
                className='bg-gray-300 placeholder-black p-2 rounded-lg'
                placeholder='Fees'
                type='number'
                name='Fees'
              />
            </div>
            <div className='flex items-center justify-between w-2/5 my-4'>
              <label className='m-2' htmlFor='Tags'>
                Tags
              </label>
              <input
                className='bg-gray-300 placeholder-black p-2 rounded-lg'
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
        <div className='w-3/4 my-2 mx-auto'>
          <h2 className='font-bold my-2'>Event Details</h2>
          <p className='w-1/2'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            neque repellat tenetur, enim corrupti consequuntur distinctio
            deleniti numquam ut iste ullam illum quod. Accusamus cum fugit quod
            totam reprehenderit quidem.
          </p>
        </div>
      </div>
    </div>
  );
}
