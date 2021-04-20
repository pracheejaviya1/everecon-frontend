import * as React from 'react';
import Header from '../../../components/header';
import { Link } from 'gatsby';
import MemberCard from '../../../components/cards/members/membersCard';

export default function CreateCommunityTwo({location}) {
  console.log(location.state.communityid)
  return (
    <div className='h-screen w-screen'>
      <Header />
      <div className='flex flex-col mt-16 justify-center items-center'>
        <div className='flex mb-2 items-center justify-between border-b-2 pb-2 w-1/2'>
          <Link to='/Create/Community/createCommunityPage1'>
            <svg
              xmlns='https://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M10 19l-7-7m0 0l7-7m-7 7h18'
              />
            </svg>
          </Link>
          <span className='text-3xl flex-grow text-center font-base font-mulish'>
            Create Community
          </span>
        </div>
        <div className='flex items-center justify-start mt-4 w-1/2 font-inter'>
          <span className='mr-10 text-2xl'>Add Members</span>
          <div className='flex ml-10 py-1 px-4 rounded-lg items-center justify-between bg-gray-100'>
            <input
              type='text'
              className='border-none w-80 bg-gray-100'
              placeholder='Enter member name'
            />
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
              />
            </svg>
          </div>
        </div>
        <MemberCard />
        <MemberCard />
        <MemberCard />
        <Link
          className=' my-6 bg-blue-500 rounded-md text-white py-2 px-4 font-inter'
          to='/Create/Community/createCommunityPage3'
        >
          Next
        </Link>
      </div>
    </div>
  );
}
