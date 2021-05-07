import * as React from 'react';
import image from '../../assets/Images/community.jpg';
import { mediaurl } from '../../components/config';

export default function SpeakerBlock(props) {
  return (
    <div className='flex flex-col bg-gray-100 py-6 px-8 rounded-lg'>
      <div className='font-light'>{'Host - ' + props.speakerData.name}</div>
      {props.speakerData.map(e => {
        return (
          <>
            <p className='font-mulsih text-lg font-base'>Speaker</p>
            <div className='flex flex-row items-center'>
              <img
                src={mediaurl + e.profilePicture}
                className='h-16 w-16 rounded-full my-2 mr-4 object-cover'
              />
              <h1 className='text-xl font-semibold'>
                {e.firstName + ' ' + e.lastName}
              </h1>
            </div>
          </>
        );
      })}
    </div>
  );
}
