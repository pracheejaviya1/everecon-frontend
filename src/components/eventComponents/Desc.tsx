import { Link } from 'gatsby';
import * as React from 'react';
import EventImage from '../../assets/Images/community.jpg';
import SpeakerBlock from './Speaker';

export default function EventDesc() {
  return (
    <div className='flex items-start justify-between w-full my-2 font-inter'>
      <div className='w-1/2 my-2'>
        <img className='rounded-md' src={EventImage} />
        <h2 className='my-4 font-bold'>Details</h2>
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
