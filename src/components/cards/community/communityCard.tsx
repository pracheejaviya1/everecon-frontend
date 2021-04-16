import * as React from 'react';
import CommunityImage from '../../../assets/Images/ahmedabad.jpeg';

export default function CommunityCard() {
  return (
    <div className=' flex flex-row p-5 shadow-md rounded-lg w-full text-left my-2'>
      <img className='h-30 w-40 rounded-md' src={CommunityImage} />
      <div className='flex flex-col  mx-5 '>
        <text className='text-lg font-semibold font-inter'> Name</text>
        <text className='font-inter font-light'> Location</text>
        <text className='font-inter font- text-sm'> 100 members</text>
      </div>
      <div className='float-right'>
        <button className='font-inter my-2 text-xs bg-blue-400 text-white rounded-lg px-3 py-2'>
          Follow
        </button>
      </div>
    </div>
  );
}
