import * as React from 'react';
import Header from '../header';

export default function CreateCommunityThree() {
  return (
    <div className='w-screen'>
      <Header />
      {/*Add back icon */}
      <span>Community successfully created!</span>
      <button>Go to page</button>
    </div>
  );
}
