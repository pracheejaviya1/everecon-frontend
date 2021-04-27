import { gql, useMutation } from '@apollo/client';
import { Link, navigate } from 'gatsby';
import * as React from 'react';
import LandingTitle from '../../assets/Images/evereconLanding.png';

const SIGNUP_MUTATION = gql`
  mutation createUser(
    $city: String
    $contact: String
    $country: String
    $email: String!
    $password: String!
    $username: String!
    $firstname: String
    $lastname: String
  ) {
    createUser(
      city: $city
      contact: $contact
      country: $country
      email: $email
      password: $password
      username: $username
      firstname: $firstname
      lastname: $lastname
    ) {
      user {
        id
        password
        lastLogin
        isSuperuser
        username
        firstName
        lastName
        email
        isStaff
        isActive
        dateJoined
      }
      profile {
        id
        contact
        city
        country
        profilePicture
      }
      token
      refreshToken
    }
  }
`;

export default function Login() {
  const [city, setCity] = React.useState('');
  const [contact, setContact] = React.useState('');
  const [country, setCountry] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [firstname, setFirstName] = React.useState('');
  const [lastname, setLastName] = React.useState('');
  const [confirmpassword, setConfirmPassword] = React.useState('');
  const [error, setError] = React.useState('');
  const [call_signup, { data }] = useMutation(SIGNUP_MUTATION);

  const handleSubmit = () => {
    setError('');
    if (password !== confirmpassword) {
      setError("confirm password didn't match password");

      return;
    }
    call_signup({
      variables: {
        city: city,
        contact: contact,
        country: country,
        email: email,
        username: username,
        password: password,
        firstname: firstname,
        lastname: lastname,
      },
    })
      .then(r => {
        let data = r.data.createUser;
        window.localStorage.setItem('token', data.token);
        window.localStorage.setItem('refreshToken', data.refreshToken);
        navigate('/Landing/landing');
        return;
      })
      .catch(e => setError(e.graphQLErrors[0].message));
  };
  const btn_class: string =
    'p-4 my-2 rounded-xl w-full border border-solid border-gray-200 text-gray-700 font-roboto ';
  const input_class: string =
    'border-gray p-3 text-xs block w-full my-4 rounded-xl font-roboto';

  return (
    <div className='flex flex-col bg-landing bg-no-repeat bg-left-bottom items-center h-screen mx-auto w-full'>
      <img
        src={LandingTitle}
        width='487'
        height='118'
        className='mt-10'
        alt='EveRecon'
      />
      <span className='m-1 mt-16 font-mulish text-2xl'>Sign Up</span>
      <form className='w-1/6'>
        <input
          type='text'
          className={input_class}
          placeholder='First Name'
          value={firstname}
          onChange={e => setFirstName(e.target.value)}
        />
        <input
          type='text'
          className={input_class}
          placeholder='Last Name'
          value={lastname}
          onChange={e => setLastName(e.target.value)}
        />
        <input
          type='tel'
          className={input_class}
          placeholder='Mobile Number'
          value={contact}
          onChange={e => setContact(e.target.value)}
        />
        <input
          type='email'
          className={input_class}
          placeholder='Email ID'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type='text'
          className={input_class}
          placeholder='Username'
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <input
          type='password'
          className={input_class}
          placeholder='Password'
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <input
          type='password'
          className={input_class}
          placeholder='Confirm Password'
          value={confirmpassword}
          onChange={e => {
            setConfirmPassword(e.target.value);
          }}
        />
      </form>
      <span className='text-left w-1/6 font-mulish text-sm text-red-400'>
        {error}
      </span>
      <div className='flex items-center justify-center flex-row'>
        <span className='text-left font-mulish mr-1 text-sm text-black'>
          Already a user?
        </span>
        <span className='text-left font-mulish ml-1 text-lg text-blue-600'>
          <Link to='/Signin/signin'> SignIn </Link>
        </span>
      </div>
      <button className='mt-7' onClick={handleSubmit}>
        <span className={btn_class}>Create account</span>
      </button>
      <br />
    </div>
  );
}
