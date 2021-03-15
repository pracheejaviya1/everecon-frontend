import React from 'react';

export default function Login() {
  return (
    <div>
      <h1>EveRecon</h1>
      <text>Sign In</text>
      <form>
        <input
          type='email'
          className='border-black m-2 rounded-xl'
          placeholder='Name'
        />
        <br />
        <input
          type='tel'
          className='border-black m-2 rounded-xl'
          placeholder='Mobile Number'
        />
        <br />
        <input
          type='email'
          className='border-black m-2 rounded-xl'
          placeholder='Email ID'
        />
        <br />
        <input
          type='password'
          className='border-black m-2 rounded-xl'
          placeholder='Password'
        />
        <br />
        <input
          type='password'
          className='border-black m-2 rounded-xl'
          placeholder='Confirm Password'
        />
      </form>
      <text>
        <text>Location</text>
        <text>Bharuch</text>
        <text>(change)</text>
      </text>

      <button>
        <text> Create account </text>
      </button>
      <br />
    </div>
  );
}
