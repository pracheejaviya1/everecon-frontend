import * as React from 'react';
import LandingTitle from '../assets/Images/evereconLanding.png';

export default function Login() {
  const btn_class: string =
    'p-4 my-2 rounded-xl w-full border border-solid border-gray-200 text-gray-700 font-roboto ';
  const input_class: string =
    'border-gray p-3 text-xs block w-full my-4 rounded-xl font-roboto';

  return (
    <div className='flex flex-col items-center h-screen mx-auto w-1/3 mt-10'>
      <img src={LandingTitle} width='487' height='118' alt='EveRecon' />
      <text className='m-1 mt-16 font-mulish text-2xl'>Sign Up</text>
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
      <text className='flex divide-x w-1/2 mb-2 flex-row items-baseline justify-evenly'>
        <text className='flex-grow text-left text-xs'>Location</text>
        <text className='flex-grow text-center text-lg'>Bharuch</text>
        <text className='flex-grow text-right text-xs'>(change)</text>
      </text>
      <button className='mt-7'>
        <text className={btn_class}>Create account</text>
      </button>
      <br />
    </div>
  );
}
