import * as React from 'react';
import LandingTitle from '../assets/Images/evereconLanding.png';

export default function Signin() {
  const input_class: string =
    'border-black p-3 text-xs block w-full my-4 rounded-xl';
  const btn_class: string =
    'p-3 my-2 rounded-xl w-full border border-solid border-black';
  return (
    <div className='flex flex-col items-center h-screen mx-auto w-1/3'>
      <img src={LandingTitle} width='487' height='118' alt='EveRecon' />
      <text className='m-6'>Sign In</text>
      <form className='w-1/2'>
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
      <text>
        {'\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015'}
        {'\u00A0   '}OR{'   \u00A0'}
        {'\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015'}
      </text>
      <div className='w-1/2 mb-3'>
        <button className={btn_class}>Continue with Google</button>
        <button className={btn_class}>Continue with Facebook</button>
        <text className='p-1 text-left'>Forgot password? Reset</text>
      </div>
      <div className='w-1/4'>
        <button className={btn_class}>Login</button>
        <button className={btn_class}>Create account</button>
      </div>
    </div>
  );
}
