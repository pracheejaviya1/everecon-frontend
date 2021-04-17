import * as React from 'react';

export default function SpeakerBlock() {
  return (
    <div className='flex flex-col bg-gray-100 p-4 rounded-lg'>
      <div className='font-light'>Host - John Doe</div>
      <h1 className='text-xl font-semibold'>Speaker - John Doe</h1>
      <div className='font-light'>Mode</div>
      <div className='font-light'>Date</div>
    </div>
  );
}
