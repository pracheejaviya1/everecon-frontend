import * as React from 'react';
import EventImage from '../../../assets/Images/community.jpg';

export default function EventDesc() {
  return (
    <div className='flex items-center justify-between w-3/4 mx-auto my-2 font-inter'>
      <div className='w-1/2 my-2'>
        <img className='rounded-md' src={EventImage} />
        <h2 className='my-4 font-bold'>Details</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi
          nesciunt molestias vero expedita non labore reprehenderit sapiente?
          Laboriosam provident cupiditate non ratione illo voluptates aspernatur
          enim porro, corrupti, similique quo.
        </p>
      </div>
      <div className='flex flex-col flex-basis'>
        <div className='bg-gray-100	 h-45 w-45 p-4 rounded-lg'>
          <div className='font-light'>Host - John Doe</div>
          <h1 className='text-xl font-semibold'>Speaker - John Doe</h1>
          <div className='font-light'>Mode</div>
          <div className='font-light'>Date</div>
        </div>
        <button className='bg-blue-500 rounded-md text-white py-2 px-4 font-inter'>
          Register
        </button>
      </div>
    </div>
  );
}
