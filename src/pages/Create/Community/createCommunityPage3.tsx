import * as React from 'react';
import Header from '../../../components/header';

export default function CreateCommunityThree() {
  return (
    <div className='w-screen h-screen'>
      <Header />
      <div className='flex flex-col font-mulish items-center justify-center my-40'>
        <p className='text-6xl text-green-400 font-bold'>
          Community successfully created!
        </p>
        <button
          className='px-20 py-6 border border-black my-20 rounded-lg'
          onClick={e => e.preventDefault()}
        >
          Go to page
        </button>
      </div>
    </div>
  );
}
