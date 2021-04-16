import * as React from 'react';
import profilepic from '../../assets/Images/community.jpg';
import Header from '../../components/header';

export default function SettingAccount() {
  return (
    <div className='h-screen bg-landing bg-no-repeat bg-left-bottom'>
      <Header />
      <div className='flex'>
        <div className='flex flex-col w-1/6 items-center justify-center'>
          <button
            className='bg-blue-200 flex items-center justify-center rounded-md py-2 px-4 m-2'
            onClick={e => e.preventDefault()}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6 mr-2'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
              />
            </svg>
            <p className='ml-1'>Account</p>
          </button>
          <button
            className='py-2 px-4 m-2 flex items-center justify-center'
            onClick={e => e.preventDefault()}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6 mr-1'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z'
              />
            </svg>
            <p className='ml-1'>Security</p>
          </button>
        </div>
        <div className='flex flex-col my-8 justify-start items-start mx-auto w-full'>
          <div className='flex items-end justify-between border-b-2 pb-4 w-2/3'>
            <div className='flex items-center justify-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6 mr-2'
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
              <h1 className='text-4xl ml-2 font-bold text-center'>Settings</h1>
            </div>
            <ul className='flex list-none'>
              <li className='mx-2 text-green-500'>Save</li>
              <li className='mx-2 text-red-500'>Discard</li>
            </ul>
          </div>

          <div className='w-2/3 pt-4 flex items-start justify-between'>
            <div>
              <h2 className='font-bold text-2xl'>Profile</h2>
              <p className='text-gray-500'>
                This information is publicly visible. Be careful with what you
                share.
              </p>
            </div>
            <button
              className='text-white text-lg bg-red-400 py-2 px-4 rounded-md'
              onClick={e => e.preventDefault()}
            >
              Log Out
            </button>
          </div>

          <form className='flex w-2/3'>
            <div className='flex my-4 mr-4 flex-col'>
              <label htmlFor='firstname' className='mb-1'>
                First Name <span className='text-red-500'>*</span>
              </label>
              <input
                type='text'
                className='rounded-lg border-gray-400'
                name='firstname'
              />
            </div>
            <div className='flex my-4 ml-4 flex-col'>
              <label htmlFor='lastname' className='mb-1'>
                Last Name <span className='text-red-500'>*</span>
              </label>
              <input
                type='text'
                className='rounded-lg border-gray-400'
                name='lastname'
              />
            </div>
          </form>

          <div className='w-full'>
            <h3 className='font-bold text-md my-2'>Photo</h3>
            <div className='flex items-center justify-between w-1/4'>
              <img src={profilepic} className='w-16 h-16 rounded-full' />
              <button
                className='bg-gray-300 rounded-md py-2 px-4'
                onClick={e => e.preventDefault()}
              >
                Change
              </button>
              <button onClick={e => e.preventDefault()}>Remove</button>
            </div>
          </div>

          <div className='w-full my-2'>
            <h3 className='text-md my-1'>
              Location <span className='text-red-500'>*</span>
            </h3>
            <select className='rounded-xl'>
              <option value='Ahmedabad, India' selected>
                Ahmedabad, India
              </option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
