import React from 'react';

export default function Signin() {
  return (
    <div>
      <h1>EveRecon</h1>
      <h2>Welcome!</h2>
      <text>Sign Up</text>
      <form>
        <label>
          Username
          <input type='email' name='email' />
        </label>
        <br />
        <label>
          Password
          <input type='text' name='name' />
        </label>
      </form>
      <hr />
      <text>OR</text>
      <hr />
      <br />
      <button>
        <text> Continue with Google </text>
      </button>
      <br />
      <button>
        <text> Continue with Facebook </text>
      </button>
      <br />
      <text>
        Forgot password? <text>Reset</text>
      </text>
      <br />
      <button>
        <text> Login </text>
      </button>
      <br />
      <button>
        <text> Create account </text>
      </button>
      <br />
    </div>
  );
}
