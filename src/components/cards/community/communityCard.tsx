import * as React from 'react';
import { mediaurl } from '../../config';
import { Link } from 'gatsby';
type TagProps = {
  text: string;
};

function Tag(props: TagProps) {
  return (
    <span className='flex bg-gray-300 items-center mx-2 my-2 font-mulish rounded-xl justify-between px-4 h-3/4'>
      {props.text}
    </span>
  );
}

export default function CommunityCard(props) {
  return (
    <Link to={'/community/' + props.id}>
      <div className='flex flex-row items-center justify-between p-5 shadow-md mx-auto rounded-lg w-3/4 text-left my-2 mt-3'>
        <div className='flex'>
          <img
            className='h-30 w-40 rounded-md'
            src={mediaurl + props.imageurl}
          />
          <div className='flex flex-col mx-5 '>
            <span className='text-lg font-semibold font-inter'>
              {props.name}
            </span>
            <span className='font-inter font-light'> {props.location}</span>
            <span className='font-inter text-sm'> {props.memcount}</span>
          </div>
        </div>
        <div className='float-right'>
          <button className='font-inter my-2 text-xs bg-blue-400 text-white rounded-lg px-3 py-2'>
            Follow
          </button>
        </div>
      </div>
    </Link>
  );
}
