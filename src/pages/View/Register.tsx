import * as React from 'react';
import Header from '../../components/header';
import SpeakerBlock from '../../components/eventComponents/Speaker';

type Props = {
  title: string;
  datetime: Date;
};

export default function EventRegister(props: Props) {
  return (
    <div className='border-b-2 border-black'>
      <Header />
      <h1 className='mx-auto font-base text-2xl my-2 border-b-2 p-2 w-1/2 font-inter'>
        Register for {props.title}
      </h1>
      <div className='flex items-start p-2 w-1/2 justify-between my-4 mx-auto font-roboto'>
        <form>
          <label className='block my-4' htmlFor='name'>
            <input
              name='name'
              className='border-gray rounded-xl h-10 w-60 text-xs'
              type='text'
              placeholder='Full Name'
            />
          </label>
          <label className='block my-4' htmlFor='number'>
            <input
              name='number'
              className='border-gray rounded-xl h-10 w-60 text-xs'
              type='text'
              placeholder='Phone Number'
            />
          </label>
          <label className='block my-4' htmlFor='email'>
            <input
              name='email'
              className='border-gray rounded-xl h-10 w-60 text-xs'
              type='email'
              placeholder='email id'
            />
          </label>
          <button
            type='submit'
            className='bg-blue-500 rounded-md text-white py-2 px-4 font-inter'
          >
            Confirm Registration
          </button>
        </form>
        <div className='font-inter '>
          <SpeakerBlock />
        </div>
        <div className='flex flex-col flex-basis bg-gray-10 p-4 rounded-lg'>
          <div className='font-light font-inter'>100 attendees</div>
        </div>
      </div>
    </div>
  );
}
