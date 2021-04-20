import * as React from 'react';
import CommunityImage from '../../../assets/Images/ahmedabad.jpeg';

import Header from '../../../components/header';

type TagProps = {
  title: string;
};

function Tag(props: TagProps) {
  return (
    <span className='rounded-xl flex flex-row items-center text-center m-2 bg-gray-200 px-2 py-1'>
      {props.title}
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-4 w-4 m-1'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M6 18L18 6M6 6l12 12'
        />
      </svg>
    </span>
  );
}

export default function UpdateCommunity() {
  const input_class: string =
    'border-gray-100 p-3 text-xs block w-80 rounded-xl font-mulish bg-gray-100';
  return (
    <div className='h-screen w-screen'>
      <Header />
      <div className='flex border-b-2 py-10 w-2/3 mx-auto font-inter'>
        <img
          className='h-60 w-90 rounded-md hover:bg-red-500'
          src={CommunityImage}
        />
        <div className='flex ml-10 items-start justify-between h-full flex-col font-inter'>
          <form className='flex flex-col'>
            <label className='my-2' htmlFor='Community name'>
              <input
                className='border w-80 border-gray p-3 rounded-lg font-roboto text-sm'
                placeholder='Community name'
                name='Community name'
                required={true}
              />
            </label>
            <label className='my-2' htmlFor='email id'>
              <input
                className='border w-80 border-gray p-3 rounded-lg font-roboto text-sm'
                placeholder='Location'
                name='Location'
                required={true}
              />
            </label>
            <label className='my-2' htmlFor='Description'>
              <input
                className='border w-80 border-gray p-3 rounded-lg font-roboto text-sm'
                placeholder='Lead'
                name='Lead'
              />
            </label>
          </form>
          <button className='text-white text-sm bg-red-400 py-2 px-4 rounded-md font-inter bottom-0 right-0 hover:bg-red-500'>
            Delete Community
          </button>
        </div>
        <ul className='flex list-none'>
          <li className='mx-2 text-green-500 font-inter'>Save</li>
          <li className='mx-2 text-red-500 font-inter'>Discard</li>
        </ul>
      </div>
      <div className='w-2/3 m-auto py-4 font-inter justify-between flex'>
        <div className='w-1/3'>
          <div className='w-full flex justify-between'>
            <button onClick={e => e.preventDefault()} type='submit'>
              About
            </button>
            <button onClick={e => e.preventDefault()} type='submit'>
              Events
            </button>
            <button onClick={e => e.preventDefault()} type='submit'>
              Members
            </button>
            <button onClick={e => e.preventDefault()} type='submit'>
              Contact
            </button>
          </div>
          <form className='flex flex-col'>
            <label className='my-2' htmlFor='Community name'>
              <textarea
                className='border w-full h-80 border-gray p-3 rounded-lg font-roboto text-sm my-10 text-gray-500'
                placeholder='Description'
                name='Community Description'
                required={true}
              />
            </label>
          </form>
        </div>
        <div className='flex items-center flex-col w-1/4'>
          <h3 className='text-center mb-4 text-lg'>Tags</h3>
          <form className='items-center justify-between'>
            <input
              type='text'
              className={input_class}
              placeholder='Search tags'
              name='category'
            />
          </form>
          <div className=' grid grid-cols-3 items-center my-4 justify-evenly justify-between'>
            <Tag title='AI' />
            <Tag title='Machine Learning' />
            <Tag title='Tag' />
            <Tag title='Tag' />
            <Tag title='Tag' />
          </div>
        </div>
      </div>
    </div>
  );
}
