import * as React from 'react';
import LandingTitle from '../assets/Images/evereconLanding.png';

export default function Login() {
  const input_class: string =
    'border-black text-xs block w-full my-4 rounded-xl';

  return (
    <div className='flex flex-col items-center h-screen mx-auto w-1/3'>
      <img src={LandingTitle} width='487' height='118' alt='EveRecon' />
      <text className='m-6'>Sign Up</text>
      <form className='w-1/2'>
        <input type='email' className={input_class} placeholder='Name' />
        <input type='tel' className={input_class} placeholder='Mobile Number' />
        <input type='email' className={input_class} placeholder='Email ID' />
        <input type='password' className={input_class} placeholder='Password' />
        <input
          type='password'
          className={input_class}
          placeholder='Confirm Password'
        />
      </form>
      <text className='flex divide-x w-1/2 mb-4 flex-row items-baseline justify-evenly'>
        <text className='flex-grow text-left text-xs'>Location</text>
        <text className='flex-grow text-center text-lg'>Bharuch</text>
        <text className='flex-grow text-right text-xs'>(change)</text>
      </text>

      <button>
        <text>Create account</text>
      </button>
      <br />
    </div>
  );
}
