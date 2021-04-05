import React from 'react';
import Header from '../header';

type Props = {
  title: string;
  datetime: Date;
};

export default function EventRegister(props: Props) {
  return (
    <div className='border-b-2 border-black'>
      <Header />
      <h1 className='mx-auto font-bold text-2xl my-2 border-b-2 p-2 w-1/2'>
        Register for {props.title}
      </h1>
      <div className='flex items-start p-2 w-1/2 justify-between my-4 mx-auto'>
        <form>
          <label className='block my-4' htmlFor='name'>
            <input
              name='name'
              className='border-black rounded-xl'
              type='text'
              placeholder='Full Name'
            />
          </label>
          <label className='block my-4' htmlFor='number'>
            <input
              name='number'
              className='rounded-xl border-black'
              type='text'
              placeholder='Phone Number'
            />
          </label>
          <label className='block my-4' htmlFor='email'>
            <input
              name='email'
              className='rounded-xl border-black'
              type='email'
              placeholder='Full Name'
            />
          </label>
          <button
            type='submit'
            className='my-6 block border border-black px-4 py-2 mx-auto rounded-xl text-center'
          >
            Proceed to Payment
          </button>
        </form>
        <div>
          <div className='bg-gray-200 rounded-md px-4 py-2'>
            <p>Host - John Doe</p>
            <h2 className='font-bold text-lg'>Speaker - John Doe</h2>
            <p className='my-2'>Online</p>
            <p className='text-sm my-2 text-gray-500'>
              {props.datetime.toUTCString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
