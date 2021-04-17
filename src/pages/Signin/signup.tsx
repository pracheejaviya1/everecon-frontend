import * as React from 'react';
import LandingTitle from '../../assets/Images/evereconLanding.png';

export default function Login() {
  const btn_class: string =
    'p-4 my-2 rounded-xl w-full border border-solid border-gray-200 text-gray-700 font-roboto ';
  const input_class: string =
    'border-gray p-3 text-xs block w-full my-4 rounded-xl font-roboto';

  return (
    <div className='flex flex-col bg-landing bg-no-repeat bg-left-bottom items-center h-screen mx-auto w-full mt-10'>
      <img src={LandingTitle} width='487' height='118' alt='EveRecon' />
      <span className='m-1 mt-16 font-mulish text-2xl'>Sign Up</span>
      <form className='w-1/6'>
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
      <span className='text-left w-1/6 font-mulish text-sm text-red-400'>
        Enter valid data
      </span>
      <div className='flex items-center justify-center flex-row'>
        <span className='text-left font-mulish mr-1 text-sm text-black'>
          Already a user?
        </span>
        <span className='text-left font-mulish ml-1 text-lg text-blue-600'>
          SignIn
        </span>
      </div>

      <button className='mt-7'>
        <span className={btn_class}>Create account</span>
      </button>
      <br />
    </div>
  );
}
