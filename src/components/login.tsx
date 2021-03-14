import React from 'react';

export default function Login() {
  return (
    <div>
      <h1>EveRecon</h1>
      <text>Sign In</text>
      <form>
        <label>
          Name
          <input type='email' name='email' />
        </label>
        <br />
        <label>
          Mobile Number
          <input type='text' name='name' />
        </label>
        <br />
        <label>
          email id
          <input type='text' name='name' />
        </label>
        <br />
        <label>
          Password
          <input type='text' name='name' />
        </label>{' '}
        <br />
        <label>
          Confirm password
          <input type='text' name='name' />
        </label>
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
