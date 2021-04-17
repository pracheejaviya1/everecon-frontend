import * as React from 'react';
import communityImage from '../../assets/Images/default.jpg';
import Header from '../header';

export default function CreateCommunityTwo() {
  return (
    <div className='w-screen'>
      <Header />
      {/*Add back icon */}
      <span>Create Community</span>
      <hr />
      <div>
        <span>Add Members</span>
        <form className='w-1/2'>
          <input name='Enter member name' />
          {/*Add search icon here */}
        </form>
        {/*Maybe move this into card */}
        <div>
          <img src={communityImage} />
          <div>
            <span> Name</span>
            <span>Location</span>
          </div>
          {/*Minus icon */}
        </div>
      </div>
      <button>Next</button>
    </div>
  );
}
