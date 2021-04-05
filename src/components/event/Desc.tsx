import React from 'react';
import image from '../../assets/Images/community.jpg';

export default function EventDesc() {
  return (
    <div className='flex items-center justify-between w-3/4 mx-auto my-2'>
      <div className='w-1/2 my-2'>
        <img className='rounded-md' src={image} />
        <h2 className='my-4 font-bold'>Details</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi
          nesciunt molestias vero expedita non labore reprehenderit sapiente?
          Laboriosam provident cupiditate non ratione illo voluptates aspernatur
          enim porro, corrupti, similique quo.
        </p>
      </div>
      <div>
        {/* Add cards here */}
        <button className='bg-blue-500 rounded-md text-white py-2 px-4'>
          Register
        </button>
      </div>
    </div>
  );
}
