import * as React from 'react';
import CommunityImage from '../../../assets/Images/ahmedabad.jpeg';

type EventProps = {
  date: Date;
  title: string;
  communityName: string;
};

export default function EventCard(props: EventProps) {
  return (
    <div className='flex flex-row items-center justify-between p-5 shadow-lg mx-auto rounded-lg w-3/4 text-left my-4'>
      <div className='flex'>
        <img className='h-40 w-60 rounded-md' src={CommunityImage} />
        <div className='flex flex-col items-start mx-5 '>
          <span className='font-inter font-light'>
            {/* {props.date.toUTCString()} */}
          </span>
          <span className='text-lg font-semibold font-inter'>
            {props.title}
          </span>
          <span className='font-inter text-sm'>{props.communityName}</span>
          <span className='font-inter text-sm text-gray-500 my-2'>
            100 members
          </span>
          <button
            className='bg-gray-600 text-white rounded-2xl my-4 px-4 py-1'
            onClick={e => e.preventDefault()}
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
}
