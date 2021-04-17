import * as React from 'react';
import EventImage from '../../../assets/Images/community.jpg';

export default function EventCard() {
  return (
    <div className=' flex flex-row p-6 shadow-md rounded-lg w-full text-left my-2'>
      <img
        className='h-20 w-30 rounded-md place-items-center'
        src={EventImage}
      />
      <div className='flex flex-col mx-8 '>
        <div className='flex flex-row'>
          <span className='text-xs font-inter font-light'>Day</span>
          <span className='text-xs font-inter font-light mx-2'>Date</span>
          <span className='text-xs font-inter font-light '>Time</span>
        </div>
        <span className='text-xl font-base font-inter'>
          {' '}
          Talking tech with Tech Ingenium
        </span>
        <span className='text-xs font-inter font-light'>Community Name</span>
        <span className='font-inter text-sm my-1'> 100 members</span>
        <button className='font-inter my-2 text-xs bg-gray-400 text-white rounded-lg p-1'>
          Details
        </button>
      </div>
    </div>
  );
}
