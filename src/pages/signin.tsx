import { gql, useMutation } from '@apollo/client';
import { Link, navigate } from 'gatsby';
import * as React from 'react';
import LandingTitle from '../assets/Images/evereconLanding.png';

const LOGIN_MUTATION = gql`
  mutation tokenAuth($username: String!, $password: String!) {
    tokenAuth(username: $username, password: $password) {
      token
      refreshToken
    }
  }
`;
export default function Signin(props) {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');
  const [call_login, { data }] = useMutation(LOGIN_MUTATION);

  const handleSubmit = () => {
    setError('');
    call_login({
      variables: {
        username: username,
        password: password,
      },
    })
      .then(r => {
        let data = r.data.tokenAuth;
        window.localStorage.setItem('token', data.token);
        window.localStorage.setItem('refreshToken', data.refreshToken);
        navigate('/Landing/landing');
        return;
      })
      .catch(e => setError(JSON.stringify(e.graphQLErrors[0].message)));
  };
  const input_class: string =
    'border-gray-200 p-3 text-sm w-full my-2 rounded-xl font-roboto focus:outline-none focus:ring focus:border-green-100';
  const btn_class: string =
    'p-2 my-3 rounded-xl w-full text-white text-lg font-roboto bg-gradient-to-r from-indigo-500 via-blue-400 to-blue-300 shadow-lg';

  return (
    <div className='flex flex-col bg-landing_signin bg-no-repeat bg-right-bottom items-center h-screen mx-auto'>
      <img
        src={LandingTitle}
        width='487'
        height='118'
        className='mt-10'
        alt='EveRecon'
      />
      <span className='m-1 mt-16 font-mulish text-3xl mb-4 text-gray-600'>
        Sign In
      </span>
      <form className='w-1/6'>
        <input
          type='text'
          className={input_class}
          placeholder='Username'
          name='username'
          value={username}
          id='username'
          onChange={e => setUsername(e.target.value)}
        />
        <input
          type='password'
          className={input_class}
          placeholder='Password'
          name='password'
          id='password'
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </form>

      <span className='font-roboto'>
        {
          '\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015\u2015'
        }
      </span>
      {/* <div className='w-1/6 mb-3'>
        <button className={btn_class_google}>Continue with Google</button>
        <button className={btn_class_facebook}>Continue with Facebook</button>
        <span className='p-1 text-sm text-left font-roboto'>
          Forgot password?
        </span>
        <span className='font-roboto text-blue-500 text-sm underline'>
          Reset
        </span>
      </div> */}
      <span className='text-left w-1/6 font-mulish text-sm text-red-400'>
        {error}
      </span>
      <div className='w-1/6'>
        <button id='login-button' className={btn_class} onClick={handleSubmit}>
          Login
        </button>

        <Link to='/signup'>
          <button className={btn_class}>Sign Up</button>
        </Link>
      </div>
    </div>
  );
}
