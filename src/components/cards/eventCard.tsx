import * as React from 'react';

type Props = {
  title: string;
  datetime: Date;
  numAttendees: number;
};

export default function EventCard(props: Props) {
  return (
    <button className='rounded-lg w-full text-left border-gray-300 border p-4 my-2'>
      <p className='text-sm text-gray-700'>{props.datetime.toUTCString()}</p>
      <h2 className='text-lg font-bold'>{props.title}</h2>
      <p className='text-sm text-gray-700'>{props.numAttendees} attendees</p>
      <button className='my-2 text-xs bg-gray-500 text-white rounded-md px-2 py-1'>
        Details
      </button>
    </button>
  );
}
