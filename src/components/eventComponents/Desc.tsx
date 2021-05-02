import { Link } from 'gatsby';
import * as React from 'react';
import { mediaurl } from '../config';
import SpeakerBlock from './Speaker';

export default function EventDesc(props: any) {
  return (
    <div className='flex items-start justify-between w-full my-2 font-inter'>
      <div className='w-1/2 my-2'>
        <img className='rounded-md' src={mediaurl + props.imageurl} />
        <h2 className='my-4 font-bold'>Details</h2>
        <div className='my-2 grid '>
          <p>City: {props?.City || 'city'}</p>
          <p>Country: {props?.Country || 'country'}</p>
          <p>Address: {props?.Address || 'address'}</p>
          <p>Start Time: {props?.Start || 'starttime'}</p>
          <p>End Time: {props?.End || 'endtime'}</p>
          <p>Event URL: {props?.URL || 'url'}</p>
        </div>
        <p>{props.description}</p>
      </div>
      <div className='flex flex-col items-center justify-around'>
        <SpeakerBlock />
        <Link to='/View/Register'>
          <button className='my-6 bg-blue-500 rounded-md text-white py-2 px-4 font-inter'>
            Register
          </button>
        </Link>
      </div>
    </div>
  );
}
