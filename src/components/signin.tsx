import React from 'react';

export default function Signin() {
  const input_class: string =
    'border-black p-3 text-xs block w-full my-4 rounded-xl';
  const btn_class: string =
    'p-3 m-2 rounded-xl w-full border border-solid border-black';
  return (
    <div className='flex flex-col items-center h-screen mx-auto w-1/3'>
      <h1 className='mb-12 mt-10 text-3xl'>EveRecon</h1>
      <h2 className='mb-12 mt-10 text-xl'>Welcome!</h2>
      <text className='m-6'>Sign Up</text>
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
        {'\u2015\u2015\u2015\u2015\u2015\u2015\u2015'}
        {'  '}OR{'  '}
        {'\u2015\u2015\u2015\u2015\u2015\u2015\u2015'}
      </text>
      <div className='w-1/2'>
        <button className={btn_class}>Continue with Google</button>
        <button className={btn_class}>Continue with Facebook</button>
      </div>
      <text>Forgot password? Reset</text>
      <div className='w-1/3'>
        <button className={btn_class}>Login</button>
        <button className={btn_class}>Create account</button>
      </div>
    </div>
  );
}
