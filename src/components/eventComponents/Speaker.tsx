import * as React from 'react';
import image from '../../assets/Images/community.jpg';

export default function SpeakerBlock() {
  return (
    <div className='flex flex-col bg-gray-100 p-4 rounded-lg'>
      <div className='font-light'>Host - John Doe</div>
      <img src={image} className='h-16 w-16 rounded-full my-2' />
      <h1 className='text-xl font-semibold'>Speaker - John Doe</h1>
      <div className='font-light'>Mode</div>
      <div className='font-light'>Date</div>
    </div>
  );
}
