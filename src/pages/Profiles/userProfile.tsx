import { Link } from 'gatsby';
import * as React from 'react';
import CommunityImage from '../../assets/Images/community.jpg';
import landingImage from '../../assets/Images/default.jpg';
import Header from '../../components/header';

function CommunityCard() {
  return (
    <div className='flex flex-row items-center justify-between p-2 shadow-md mx-auto rounded-lg w-full text-left my-2 mt-3'>
      <div className='flex'>
        <img className='h-20 w-30 mx-5 my-2 rounded-md' src={CommunityImage} />
        <span className='text-2xl my-5 font-semibold mx-5 font-inter'>
          Name
        </span>
      </div>
      <div className='float-right mx-3'>
        <button className='font-inter my-2 text-xs bg-red-200 text-black rounded-lg px-2 py-2'>
          Unfollow
        </button>
      </div>
    </div>
  );
}

export default function UserProfile() {
  return (
    <div className='h-screen w-screen'>
      <Header />
      <div className='flex flex-col w-1/2 mx-auto items-center justify-center'>
        <img src={landingImage} className='my-8 h-28 w-28 rounded-full' />
        <p className='text-2xl font-mulish'>Name</p>
        <p className='text-xl font-mulish'>Location</p>
      </div>
      <div className='flex flex-col my-8 w-1/2 mx-auto items-center justify-center'>
        <div className='w-full py-2 border-b-2'>
          <div className='flex justify-between items-center font-inter'>
            <div className='flex justify-between w-4/12 '>
              <button onClick={e => e.preventDefault()}>Following</button>
              <button onClick={e => e.preventDefault()}>Tickets</button>
              <button onClick={e => e.preventDefault()}>History</button>
              <button onClick={e => e.preventDefault()}>Favorites</button>
            </div>
            <Link to='/Create/Community/createCommunityPage1'>
              Create Community
            </Link>
          </div>
        </div>
        <CommunityCard />
        <CommunityCard />
      </div>
    </div>
  );
}
