import { Link } from 'gatsby';
import * as React from 'react';
import EventImage from '../../assets/Images/community.jpg';
import SpeakerBlock from './Speaker';

type Props = {
  details: {
    City: string;
    Country: string;
    Address: string;
    Start: string;
    End: string;
    URL: string;
    Category: string;
    Check: number;
  };
  uid: string;
};

export default function EventDesc(props: Props) {
  return (
    <div className='flex items-start justify-between w-full my-2 font-inter'>
      <div className='w-1/2 my-2'>
        <img className='rounded-md' src={EventImage} />
        <h2 className='my-4 font-bold'>Details</h2>
        <div className='my-2 grid grid-cols-2'>
          <p>{props.details.City || 'city'}</p>
          <p>{props.details.Country || 'country'}</p>
          <p>{props.details.Address || 'address'}</p>
          <p>{props.details.Start || 'starttime'}</p>
          <p>{props.details.End || 'endtime'}</p>
          <p>{props.details.URL || 'url'}</p>
          <p>{props.details.Category || 'category'}</p>
          <p>{props.details.Check || 'num-checkins'}</p>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi
          nesciunt molestias vero expedita non labore reprehenderit sapiente?
          Laboriosam provident cupiditate non ratione illo voluptates aspernatur
          enim porro, corrupti, similique quo.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi
          nesciunt molestias vero expedita non labore reprehenderit sapiente?
          Laboriosam provident cupiditate non ratione illo voluptates aspernatur
          enim porro, corrupti, similique quo.
        </p>
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
