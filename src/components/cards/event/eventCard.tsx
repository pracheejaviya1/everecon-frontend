import { Link } from 'gatsby';
import * as React from 'react';
import { mediaurl } from '../../config';

export default function EventCard(props) {
  return (
    <Link to={'/event/' + props.id}>
      <div className='event_card flex flex-row items-center justify-between p-5 shadow-lg mx-auto rounded-lg text-left my-4'>
        <div className='flex'>
          <img
            className='h-24 w-48 rounded-md object-cover'
            src={mediaurl + props.imageurl}
          />
          <div className='flex flex-col items-start mx-5'>
            <span className='font-inter font-light'>
              {/* {props.date.toUTCString()} */}
            </span>
            <span className='text-lg font-semibold font-inter'>
              {props.title}
            </span>
            <span className='font-inter text-sm'>{props.communityName}</span>
            <span className='font-inter text-sm text-gray-500 my-2'>
              {props.date}
            </span>
            {/* <button
              className='bg-gray-600 text-white rounded-2xl my-4 px-4 py-1'
              onClick={e => e.preventDefault()}
            >
              Details
            </button> */}
          </div>
        </div>
      </div>
    </Link>
  );
}
