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
          <text className='text-xs font-inter font-light'>Day</text>
          <text className='text-xs font-inter font-light mx-2'>Date</text>
          <text className='text-xs font-inter font-light '>Time</text>
        </div>
        <text className='text-xl font-base font-inter'>
          {' '}
          Talking tech with Tech Ingenium
        </text>
        <text className=' text-xs font-inter font-light'>Community Name</text>
        <text className=' text-xs font-inter font- text-sm my-1'>
          {' '}
          100 members
        </text>
        <button className='font-inter my-2 text-xs bg-gray-400 text-white rounded-lg p-1'>
          Details
        </button>
      </div>
    </div>
  );
}
