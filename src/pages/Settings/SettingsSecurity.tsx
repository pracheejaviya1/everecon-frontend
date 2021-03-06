import { useMutation, useQuery } from '@apollo/client';
import { Link, navigate } from 'gatsby';
import gql from 'graphql-tag';
import * as React from 'react';
import Header from '../../components/header';

//TODO: requires Alert and Error dispaly to user
const UPDATE_SECURITY = gql`
  mutation updateUsersecurity($email: String, $password: String) {
    updateUsersecurity(email: $email, password: $password) {
      user {
        id
        email
      }
    }
  }
`;

const PROFILE_QUERY = gql`
  query myprofile {
    myprofile {
      id
      lastLogin
      isSuperuser
      username
      firstName
      lastName
      email
      isStaff
      isActive
      dateJoined
      profile {
        id
        contact
        city
        country
        profilePicture
      }
    }
  }
`;
export default function SettingSecurity() {
  const { data: userdata, error } = useQuery(PROFILE_QUERY);
  const [discard, setDiscard] = React.useState(0);
  const [callUpdateSecurity, { data }] = useMutation(UPDATE_SECURITY);

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmpassword, setConfirmPassword] = React.useState('');

  React.useEffect(() => {
    if (userdata) {
      setEmail(userdata.myprofile.email);
      setPassword('');
      setConfirmPassword('');
    }
    return;
  }, [userdata, discard]);

  const handleSubmit = () => {
    if (password !== confirmpassword) {
      console.error("Confirm Password doesn't match password");
      alert("Confirm Password doesn't match password");
      setPassword('');
      setConfirmPassword('');
      return;
    }
    callUpdateSecurity({
      variables: {
        email: email,
        password: password,
      },
    })
      .then(r => console.log('Updated Security'))
      .catch(e => {
        console.error(e.graphQLErrors);
        alert(JSON.stringify(e));
      });
    setPassword('');
    setConfirmPassword('');
  };

  const logout = () => {
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('refreshToken');
    navigate('/signin');
  };

  return (
    <div className='h-screen bg-landing_signin bg-no-repeat bg-right-bottom'>
      <Header />
      <div className='flex'>
        <div className='flex flex-col w-1/6 mx-12 items-end justify-start my-10'>
          <Link
            className='py-3 px-4 m-2 flex items-center justify-center font-inter'
            to='/Settings/SettingsAccount'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6 mr-2'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
              />
            </svg>
            <p className='ml-1 font-inter'>Account</p>
          </Link>
          <button className='bg-blue-200 flex items-center justify-center rounded-md py-3 px-4 m-2 font-inter'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6 mr-1'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z'
              />
            </svg>
            <p className='ml-1 font-inter'>Security</p>
          </button>
        </div>
        <div className='flex flex-col my-8 justify-center items-start ml-12 mr-0 w-full'>
          <div className='flex items-end justify-between border-b-2 pb-4 w-2/3'>
            <div className='flex items-center justify-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5 mr-2'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M10 19l-7-7m0 0l7-7m-7 7h18'
                />
              </svg>
              <h1 className='text-3xl ml-2 font-light text-center font-mulish text-gray-700'>
                Settings
              </h1>
            </div>
            <ul className='flex list-none'>
              <button
                className='mx-2 text-green-500 font-inter'
                onClick={handleSubmit}
              >
                Save
              </button>
              <button
                className='mx-2 text-red-500 font-inter'
                onClick={() => setDiscard(discard + 1)}
              >
                Discard
              </button>
            </ul>
          </div>

          <div className='w-2/3 pt-4 flex items-start justify-between'>
            <div>
              <h2 className='font-semibold text-xl font-mulish'>Security</h2>
            </div>
            <button
              className='text-white text-sm bg-red-400 py-2 px-4 rounded-md font-inter'
              onClick={logout}
            >
              Log Out
            </button>
          </div>

          <form className='flex w-2/3'>
            <div className='flex my-4 flex-col'>
              <label htmlFor='lastname' className='mb-1 font-mulish'>
                Email Id <span className='text-red-500 '>*</span>
              </label>
              <input
                type='email'
                className='rounded-lg border-gray-400'
                name='email'
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
          </form>
          <form className='flex w-2/3'>
            <div className='flex my-4 mr-4 flex-col'>
              <label htmlFor='password' className='mb-1 font-mulish'>
                Password <span className='text-red-500 '>*</span>
              </label>
              <input
                type='password'
                className='rounded-lg border-gray-400'
                name='password'
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            <div className='flex my-4 ml-4 flex-col'>
              <label htmlFor='confirm password' className='mb-1 font-mulish'>
                Confirm Password <span className='text-red-500 '>*</span>
              </label>
              <input
                type='password'
                className='rounded-lg border-gray-400'
                name='confirm password'
                value={confirmpassword}
                onChange={e => setConfirmPassword(e.target.value)}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
