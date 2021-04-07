import React from 'react';
import Header from '../header';
import communityImage from '../../assets/Images/default.jpg';

export default function createCommunityTwo() {
  return (
    <div>
      <Header />
      {/*Add back icon */}
      <text>Create Community</text>
      <hr />
      <div>
        <text>Add Members</text>
        <form className='w-1/2'>
          <input name='Enter member name' />
          {/*Add search icon here */}
        </form>
        {/*Maybe move this into card */}
        <div>
          <img src={communityImage} />
          <div>
            <text> Name</text>
            <text>Location</text>
          </div>
          {/*Minus icon */}
        </div>
      </div>
      <button>Next</button>
    </div>
  );
}
