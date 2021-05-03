import * as React from 'react';
import communityImg from '../../assets/Images/community.jpg';
import Header from '../../components/header';

function MemberCard(props: MemberProps) {
  const [disp, setDisp] = React.useState(true);

  return (
    <div
      className={`${
        disp === false ? 'hidden' : ''
      } flex items-center justify-between font-mulish border-b-2 py-4 border-gray-400`}
    >
      <div className='flex'>
        <img src={communityImg} className='h-14 w-14 rounded-full' />
        <div className='mx-10'>
          <p className='text-xl'>Name</p>
          <p>Location</p>
        </div>
      </div>
      {props.memberType === 'lead' ? (
        <button onClick={e => e.preventDefault()}></button>
      ) : props.memberType === 'core' ? (
        <button onClick={() => setDisp(false)}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6 text-red-500'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z'
            />
          </svg>
        </button>
      ) : (
        <div className='flex items-center'>
          <button className='bg-blue-500 text-white text-xs px-2 py-1 rounded-md mx-2'>
            Add to Core
          </button>
          <button onClick={() => setDisp(false)}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6 text-red-500'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}

type MemberProps = {
  memberType: 'lead' | 'core' | 'volunteer';
};

export default function Members() {
  const [type, setType] = React.useState<MemberProps['memberType']>(
    'volunteer'
  );

  return (
    <div className='h-screen font-inter'>
      <Header />
      <div className='flex w-3/4 items-start my-36 mx-auto'>
        <div>
          <img src={communityImg} className='rounded-lg mx-2 my-4 h-20 w-40' />
          <h2 className='font-bold text-xl text-center'>NAME</h2>
        </div>
        <div className='flex flex-col w-1/2 mx-10 h-3/4 justify-between '>
          <div className='flex items-center border-b-2 border-gray-400'>
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
            <h2 className='text-2xl font-bold mx-2 my-4'>Members</h2>
          </div>
          <ul className='flex my-6 list-none w-1/3 justify-between'>
            <li
              className={`${type === 'lead' ? 'text-green-400' : 'text-black'}`}
            >
              <button onClick={() => setType('lead')}>Lead</button>
            </li>
            <li
              className={`${type === 'core' ? 'text-green-400' : 'text-black'}`}
            >
              <button onClick={() => setType('core')}>Core</button>
            </li>
            <li
              className={`${
                type === 'volunteer'
                  ? 'text-green-400 border-none'
                  : 'text-black'
              }`}
            >
              <button onClick={() => setType('volunteer')}>Volunteers</button>
            </li>
          </ul>
          <input
            placeholder='Search'
            className='p-2 mb-6 rounded-lg w-2/5 bg-gray-100'
          />
          <MemberCard memberType={type} />
          <MemberCard memberType={type} />
          <MemberCard memberType={type} />
        </div>
      </div>
    </div>
  );
}
