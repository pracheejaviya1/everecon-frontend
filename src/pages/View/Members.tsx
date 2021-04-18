import * as React from 'react';
import communityImg from '../../assets/Images/community.jpg';
import Header from '../../components/header';

function MemberCard(props: MemberProps) {
  return (
    <div className='flex items-center justify-between border-b-2 pb-4 border-gray-400'>
      <div className='flex'>
        <img src={communityImg} className='h-14 w-14 rounded-full' />
        <div className='mx-10'>
          <p className='text-xl'>Name</p>
          <p>Location</p>
        </div>
      </div>
      {props.memberType === 'lead' ? (
        <button onClick={e => e.preventDefault()}>Lead</button>
      ) : props.memberType === 'core' ? (
        <button onClick={e => e.preventDefault}>Core</button>
      ) : (
        <button onClick={e => e.preventDefault()}>Volunteer</button>
      )}
    </div>
  );
}

type MemberProps = {
  memberType: 'lead' | 'core' | 'volunteer';
};

export default function Members(props: MemberProps) {
  return (
    <div className='h-screen'>
      <Header />
      <div className='flex w-3/4 h-1/2 items-start my-20 mx-auto'>
        <div>
          <img src={communityImg} className='rounded-lg mx-2 my-4 h-20 w-40' />
          <h2 className='font-bold text-xl text-center'>NAME</h2>
        </div>
        <div className='flex flex-col w-1/2 mx-10 h-3/4 justify-between '>
          <div className='flex items-center border-b-2 border-gray-400'>
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
                d='M10 19l-7-7m0 0l7-7m-7 7h18'
              />
            </svg>
            <h2 className='text-2xl font-bold mx-2 my-4'>Members</h2>
          </div>
          <ul className='flex list-none w-1/3 justify-between'>
            <li
              className={`${
                props.memberType === 'lead' ? 'text-green-400' : 'text-black'
              }`}
            >
              Lead
            </li>
            <li
              className={`${
                props.memberType === 'core' ? 'text-green-400' : 'text-black'
              }`}
            >
              Core
            </li>
            <li
              className={`${
                props.memberType === 'volunteer'
                  ? 'text-green-400'
                  : 'text-black'
              }`}
            >
              Volunteers
            </li>
          </ul>
          <input
            placeholder='Search'
            className='p-2 rounded-lg w-2/5 bg-gray-200'
          />
          <MemberCard memberType='lead' />
          <MemberCard memberType='core' />
          <MemberCard memberType='volunteer' />
        </div>
      </div>
    </div>
  );
}
