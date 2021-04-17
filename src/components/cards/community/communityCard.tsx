import * as React from 'react';
import CommunityImage from '../../../assets/Images/ahmedabad.jpeg';

type TagProps = {
  text: string;
};

function Tag(props: TagProps) {
  return (
    <span className='flex bg-gray-300 items-center mx-2 my-2 font-mulish rounded-xl justify-between border-gray-400 border px-4 h-3/4'>
      {props.text}
    </span>
  );
}

export default function CommunityCard() {
  return (
    <div className='flex flex-row items-center justify-between p-5 shadow-md mx-auto rounded-lg w-3/4 text-left my-2'>
      <div className='flex'>
        <img className='h-30 w-40 rounded-md' src={CommunityImage} />
        <div className='flex flex-col mx-5 '>
          <span className='text-lg font-semibold font-inter'> Name</span>
          <span className='font-inter font-light'> Location</span>
          <div className='flex my-1'>
            <Tag text='Tag' />
            <Tag text='Tag' />
            <Tag text='Tag' />
          </div>
          <span className='font-inter text-sm'> 100 members</span>
        </div>
      </div>
      <div className='float-right'>
        <button className='font-inter my-2 text-xs bg-blue-400 text-white rounded-lg px-3 py-2'>
          Follow
        </button>
      </div>
    </div>
  );
}
