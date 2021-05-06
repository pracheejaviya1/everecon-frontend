import * as React from 'react';
import image from '../../assets/Images/community.jpg';

export default function SpeakerBlock() {
  return (
    <div className='flex flex-col bg-gray-100 py-6 px-8 rounded-lg'>
      <div className='font-light'>Host - John Doe</div>
      <p className='font-mulsih text-lg font-base'>Speaker</p>
      <div className='flex flex-row items-center'>
        <img
          src={image}
          className='h-16 w-16 rounded-full my-2 mr-4 object-cover'
        />
        <h1 className='text-xl font-semibold'>John Doe</h1>
      </div>
      <div className='font-light'>Date</div>
      <div className='font-light'>Mode</div>
    </div>
  );
}
