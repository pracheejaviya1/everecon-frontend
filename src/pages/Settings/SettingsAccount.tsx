import { gql, useMutation, useQuery } from '@apollo/client';
import { Link, navigate } from 'gatsby';
import * as React from 'react';
import Header from '../../components/header';
import { graphqlurl } from '../../components/config';
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

const UPDATE_PROFILE_MUTATION = gql`
  mutation updateUser(
    $city: String
    $contact: String
    $country: String
    $firstname: String
    $lastname: String
  ) {
    updateUser(
      city: $city
      contact: $contact
      country: $country
      firstname: $firstname
      lastname: $lastname
    ) {
      profile {
        id
        contact
        city
        country
        profilePicture
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
          profile {
            id
            contact
            city
            country
            profilePicture
          }
        }
      }
    }
  }
`;
export default function SettingAccount() {
  const [profilepic, setProfilePic] = React.useState(null);
  const { data: userdata, error } = useQuery(PROFILE_QUERY);
  const [discard, setDiscard] = React.useState(0);
  const [call_UpdateProfile, { data }] = useMutation(UPDATE_PROFILE_MUTATION);

  const [profileURL, setProfileURL] = React.useState('');

  const [fname, setFname] = React.useState('');
  const [lname, setLname] = React.useState('');
  const [country, setCountry] = React.useState('');
  const [city, setCity] = React.useState('');
  const [contact, setContact] = React.useState('');
  const [userid, setUserid] = React.useState();

  const handleFileChange = (e: { target: { files: any } }) => {
    var files = e.target.files;

    setProfilePic(files[0]);
    setProfileURL(URL.createObjectURL(files[0]));
  };

  async function uploadProfilePic() {
    // upload logo if logo else return True
    if (!profilepic) {
      return true;
    }
    if (!userid) {
      console.error('Failed to fetch userid');
      alert('Failed to fetch userid');
      return;
    }
    var myHeaders = new Headers();
    myHeaders.append(
      'Authorization',
      `Bearer ${window.localStorage.getItem('token')}`
    );
    var formdata = new FormData();
    formdata.append(
      'query',
      `mutation{
        updateProfpic(id:${userid}){
          success
          picture
        }
      }
      `
    );
    formdata.append('file', profilepic);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow',
    };

    let r = await fetch(graphqlurl, requestOptions)
      .then(response => response.json())
      .catch(error => {
        console.log('error', error);
        alert(JSON.stringify(error));
      });

    return r.data.updateProfpic.success;
  }

  const handleSubmit = () => {
    call_UpdateProfile({
      variables: {
        city: city,
        contact: contact,
        country: country,
        firstname: fname,
        lastname: lname,
      },
    })
      .then(r => console.log('Profile Updated'))
      .catch(e => {
        console.error(e.graphQLErrors);
        alert(JSON.stringify(e));
      });

    uploadProfilePic();
  };
  React.useEffect(() => {
    if (userdata) {
      setFname(userdata.myprofile.firstName);
      setLname(userdata.myprofile.lastName);
      setContact(userdata.myprofile.profile.contact);
      setCity(userdata.myprofile.profile.city);
      setCountry(userdata.myprofile.profile.country);
      setProfileURL(userdata.myprofile.profile.profilePicture);
      setUserid(userdata.myprofile.profile.id);
    }
    return;
  }, [userdata, discard]);

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
          <button
            className='bg-blue-200 flex items-center justify-center rounded-md py-3 px-4 m-2'
            onClick={e => e.preventDefault()}
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
          </button>
          <Link
            className='py-3 px-4 m-2 flex items-center justify-center'
            to='/Settings/SettingsSecurity'
          >
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
          </Link>
        </div>
        <div className='flex flex-col my-8 justify-center items-start ml-12 mr-0 w-full'>
          <div className='flex items-end justify-between border-b-2 pb-4 w-2/3'>
            <div className='flex items-center justify-center'>
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
              <h2 className='font-semibold text-xl font-mulish'>Profile</h2>
              <p className='text-gray-500 font-inter'>
                This information is publicly visible. Be careful with what you
                share.
              </p>
            </div>
            <button
              className='text-white text-sm bg-red-400 py-2 px-4 rounded-md font-inter'
              onClick={logout}
            >
              Log Out
            </button>
          </div>

          <form className='flex w-2/3 my-3'>
            <div className='flex my-4 mr-4 flex-col'>
              <label htmlFor='firstname' className='mb-1 font-mulish'>
                First Name <span className='text-red-500'>*</span>
              </label>
              <input
                type='text'
                className='rounded-lg border-gray-400'
                name='firstname'
                value={fname}
                onChange={e => {
                  setFname(e.target.value);
                }}
              />
            </div>
            <div className='flex my-4 ml-4 flex-col'>
              <label htmlFor='lastname' className='mb-1 font-mulish'>
                Last Name <span className='text-red-500'>*</span>
              </label>
              <input
                type='text'
                className='rounded-lg border-gray-400'
                name='lastname'
                value={lname}
                onChange={e => {
                  setLname(e.target.value);
                }}
              />
            </div>
          </form>
          <form className='flex w-2/3 my-3'>
            <div className='flex my-4 mr-4 flex-col'>
              <label htmlFor='city' className='mb-1 font-mulish'>
                City <span className='text-red-500'>*</span>
              </label>
              <input
                type='text'
                className='rounded-lg border-gray-400'
                name='city'
                value={city}
                onChange={e => {
                  setCity(e.target.value);
                }}
              />
            </div>
            <div className='flex my-4 ml-4 flex-col'>
              <label htmlFor='country' className='mb-1 font-mulish'>
                Country <span className='text-red-500'>*</span>
              </label>
              <input
                type='text'
                className='rounded-lg border-gray-400'
                name='coutry'
                value={country}
                onChange={e => {
                  setCountry(e.target.value);
                }}
              />
            </div>
            <div className='flex my-4 ml-4 flex-col'>
              <label htmlFor='contact' className='mb-1 font-mulish'>
                Contact <span className='text-red-500'>*</span>
              </label>
              <input
                type='text'
                className='rounded-lg border-gray-400'
                name='contact'
                value={contact}
                onChange={e => {
                  setContact(e.target.value);
                }}
              />
            </div>
          </form>

          <div className='w-full'>
            <h3 className='font-base text-md my-3 font-mulish'>Photo</h3>
            <div className='flex items-center justify-between w-1/5'>
              <figure>
                <label className='flex items-center'>
                  <img
                    src={profileURL}
                    className='object-cover w-16 h-16 rounded-full object-cover'
                  />
                  <input
                    type='file'
                    className='hidden'
                    onChange={handleFileChange}
                  />
                  <figcaption className='bg-gray-100 rounded-md py-2 px-4 text-xs font-mulish ml-7'>
                    Change
                  </figcaption>
                </label>
              </figure>
              {/* <button className='font-mulish' onClick={e => e.preventDefault()}>
                Remove
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
