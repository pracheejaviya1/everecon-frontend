import { Link } from 'gatsby';
import * as React from 'react';
import LandingTitle from '../../assets/Images/evereconLanding.png';

export default function Signin() {
  const input_class: string =
    'border-gray p-3 text-xs block w-full my-4 rounded-xl font-roboto';
  const btn_class: string =
    'p-2 my-2 rounded-xl w-full border border-solid border-gray-500 text-gray-700 font-roboto ';
  const btn_class_google: string =
    'p-3 my-2 rounded-xl w-full border border-solid border-red-500 text-red-400	font-roboto';
  const btn_class_facebook: string =
    'p-3 my-2 rounded-xl w-full border border-solid border-blue-500 text-blue-400	font-roboto';
  return (
    <div className='flex flex-col bg-landing_signin bg-no-repeat bg-right-bottom items-center h-screen mx-auto'>
      <img
        src={LandingTitle}
        width='487'
        height='118'
        className='mt-10'
        alt='EveRecon'
      />
      <span className='m-1 mt-16 font-mulish text-2xl'>Sign In</span>
      <form className='w-1/6'>
        <input
          type='email'
          className={input_class}
          placeholder='Email ID'
          name='password'
        />
        <input
          type='password'
          className={input_class}
          placeholder='Password'
          name='password'
        />
      </form>
      <span className='font-roboto'>
        {'\u2015\u2015\u2015\u2015\u2015\u2015\u2015'}
        {'\u00A0   '}OR{'   \u00A0'}
        {'\u2015\u2015\u2015\u2015\u2015\u2015\u2015'}
      </span>
      <div className='w-1/6 mb-3'>
        <button className={btn_class_google}>Continue with Google</button>
        <button className={btn_class_facebook}>Continue with Facebook</button>
        <span className='p-1 text-sm text-left font-roboto'>
          Forgot password?{' '}
        </span>
        <span className='font-roboto text-blue-500 text-sm underline'>
          Reset
        </span>
      </div>
      <span className='text-left w-1/6 font-mulish text-sm text-red-400'>
        Enter valid data
      </span>
      <div className='w-1/6'>
        <Link to='/Landing/landing'>
          <button className={btn_class}>Login</button>
        </Link>
        <Link to='/Signin/signup'>
          <button className={btn_class}>Sign Up</button>
        </Link>
        {/*  */}
      </div>
    </div>
  );
}