import React from 'react';
import Header from '../header';
import communityImage from '../../assets/Images/default.jpg';

export default function createCommunityOne() {
  return (
    <div>
      <Header />
      {/*Add back icon */}
      <text>Create Community</text>
      <hr />
      <img src={communityImage} />
      <text> Upload Community photo</text>
      <form className='w-1/2'>
        <input name='Community name' />
        <input name='email id' />
        <input name='Description' />
        <div>
          <text>Location</text>
          <text> Bharuch</text> {/*Add location spinner*/}
          <button>(change)</button>
        </div>
        <button>Next</button>
      </form>
    </div>
  );
}
