import * as React from 'react';
import Header from '../../components/header';
import SpeakerProfile from '../../assets/Images/Rectangle6.png';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import { navigate } from 'gatsby-link';

const CREATE_SPEAKER_MUTATION = gql`
  mutation createSpeaker(
    $description: String
    $email: String
    $facebook: String
    $firstName: String!
    $instagram: String
    $lastName: String
  ) {
    createSpeaker(
      description: $description
      email: $email
      facebook: $facebook
      firstName: $firstName
      instagram: $instagram
      lastName: $lastName
    ) {
      speaker {
        id
        firstName
        lastName
        email
        facebook
        instagram
        profilePicture
      }
    }
  }
`;

const ADD_SPEAKER_MUTATION = gql`
  mutation addSpeaker($eventid: ID!, $speakerid: ID!) {
    addSpeaker(eventid: $eventid, speakerid: $speakerid) {
      ok
    }
  }
`;
export default function UpdateEventTwo({ location }) {
  const [callCreateSpeaker, { data: data_createSpeaker }] = useMutation(
    CREATE_SPEAKER_MUTATION
  );

  const [fname, setFName] = React.useState('');
  const [lname, setLName] = React.useState('');

  const [instagram, setInstagram] = React.useState('');
  const [facebook, setFacebook] = React.useState('');
  const [email, setEmail] = React.useState('');

  const [photo, setPhoto] = React.useState(null);
  const [photoURL, setPhotoURL] = React.useState(SpeakerProfile);
  // const [website,setWebsite] = React.useState('')
  // const [linkedin,setLinkedin] = React.useState('')
  // const [twitter,setTwitter] = React.useState('')

  const discard = () => {
    setEmail('');
    setFName('');
    setLName('');
    setFacebook('');
    setInstagram('');
    // where to navigate to ??
  };
  const handleFileChange = (e: { target: { files: any } }) => {
    var files = e.target.files;
    if (files[0]) {
      setPhoto(files[0]);
      setPhotoURL(URL.createObjectURL(files[0]));
    }
  };
  async function uploadSpeakerPic(speakerid) {
    // upload logo if logo else return True
    if (!photo) {
      console.log('no photo');
      return true;
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
    updateSpeakerpicture (id: ${speakerid}) {
        success
        picture
    }
}
      `
    );
    formdata.append('file', photo);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow',
    };

    let r = await fetch('http://localhost:8000/graphql/', requestOptions)
      .then(response => response.json())
      .catch(error => {
        console.log('error', error);
        alert('image upload error ' + JSON.stringify(error));
      });

    return r.data.updateSpeakerpicture.success;
  }
  async function handleSubmit() {
    let { data, error: e } = await callCreateSpeaker({
      variables: {
        email: email,
        facebook: facebook,
        firstName: fname,
        lastName: lname,
        instagram: instagram,
        description: 'Just a speaker',
      },
    });
    if (e) {
      console.log(e.graphQLErrors[0].message);
      alert(e.graphQLErrors[0].message);
      return;
    } else {
      alert('created speaker');
    }
    if (uploadSpeakerPic(data.createSpeaker.speaker.id)) {
      let newlocation = JSON.parse(JSON.stringify(location));
      let speakeremail = data.createSpeaker.speaker.email;
      newlocation.state.speakeremail = speakeremail;
      alert('speaker profile photo upload successful');
      navigate('/Create/Event/createEventPage2', newlocation);
    } else {
      console.error('Failed to upload Speaker Photo');
      alert('Failed to upload Speaker Photo');
    }
    return;
  }
  return (
    <div className='h-screen w-screen'>
      <Header />
      <div className='flex flex-col my-8 items-center ml-12 mr-0'>
        <div className='flex items-end justify-between border-b-2 pb-4 w-2/3'>
          <div className='flex items-center  '>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5 mr-2'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              onClick={() =>
                navigate('/Create/Event/createEventPage2', location)
              }
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M10 19l-7-7m0 0l7-7m-7 7h18'
              />
            </svg>
            <h1 className='text-xl ml-2 font-base text-center font-inter text-gray-700'>
              Add Speaker
            </h1>
          </div>
          <ul className='flex list-none'>
            <button
              className='mx-2 text-green-500 font-inter'
              onClick={handleSubmit}
            >
              Save
            </button>
            <button className='mx-2 text-red-500 font-inter' onClick={discard}>
              Discard
            </button>
          </ul>
        </div>
        <div>
          <div className='flex flex-col mx-auto items-center  justify-center'>
            <figure className='mt-8 mb-6'>
              <label>
                <img
                  src={photoURL}
                  className='my-8 h-40 w-40 rounded-full object-cover'
                />
                <input
                  type='file'
                  className='hidden'
                  onChange={handleFileChange}
                />
                <figcaption className='text-center font-mulish'>
                  Add Photo
                </figcaption>
              </label>
            </figure>
            <div className='flex flex-col justify-between mx-auto font-mulish my-4'>
              <div className='flex flex-row items-center'>
                <label
                  htmlFor='firstname'
                  className='mb-1 font-mulish text-lg mt-2 w-24 mx-6'
                >
                  First Name
                </label>
                <input
                  type='text'
                  className='rounded-lg bg-gray-100 border-gray-100 w-96'
                  name='Lastname'
                  value={fname}
                  onChange={e => setFName(e.target.value)}
                />
              </div>
              <div className='flex flex-row items-center mt-2'>
                <label
                  htmlFor='lastname'
                  className='mb-1 font-mulish text-lg mt-2 w-24 mx-6'
                >
                  Last Name
                </label>
                <input
                  type='text'
                  className='rounded-lg bg-gray-100 border-gray-100 w-96'
                  name='name'
                  value={lname}
                  onChange={e => setLName(e.target.value)}
                />
              </div>
              <div className='flex flex-row'>
                <label
                  htmlFor='Links'
                  className='mb-1 font-inter text-xl m-5 mx-6'
                >
                  Links
                </label>
              </div>
              <div className='flex flex-row items-center mt-2  '>
                <label
                  htmlFor='email'
                  className='mb-1 font-mulish text-lg mt-1 w-24 mx-6'
                >
                  Email
                </label>
                <input
                  type='email'
                  className='rounded-lg bg-gray-100 border-gray-100 w-96'
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
              {/* <div className='flex flex-row items-center mt-2  '>
                <label
                  htmlFor='website'
                  className='mb-1 font-mulish text-lg mt-1 w-24 mx-6'
                >
                  Website
                </label>
                <input
                  type='url'
                  className='rounded-lg bg-gray-100 border-gray-100 w-96'
                  value={website}
                  onChange={e => setWebsite(e.target.value)}
                />
              </div> */}
              {/* <div className='flex flex-row items-center mt-2  '>
                <label
                  htmlFor='linkedin url'
                  className='mb-1 font-mulish w-24 text-lg mt-1 mx-6'
                >
                  LinkedIn
                </label>
                <input
                  className='rounded-lg bg-gray-100 border-gray-100 w-96'  
                  type='url'
                  value={linkedin}
                  onChange={e => setLinkedin(e.target.value)}
                
                />
              </div> */}
              <div className='flex flex-row items-center mt-2  '>
                <label
                  htmlFor='instagram url'
                  className='mb-1 font-mulish w-24 text-lg mt-1 mx-6'
                >
                  Instagram
                </label>
                <input
                  className='rounded-lg bg-gray-100 border-gray-100 w-96'
                  type='url'
                  value={instagram}
                  onChange={e => setInstagram(e.target.value)}
                />
              </div>
              <div className='flex flex-row items-center mt-2  '>
                <label
                  htmlFor='facebook url'
                  className='mb-1 font-mulish w-24 text-lg mt-1 mx-6'
                >
                  Facebook
                </label>
                <input
                  className='rounded-lg bg-gray-100 border-gray-100 w-96'
                  type='url'
                  value={facebook}
                  onChange={e => setFacebook(e.target.value)}
                />
              </div>
              {/* <div className='flex flex-row items-center mt-2  '>
                <label
                  htmlFor='twitter url'
                  className='mb-1 font-mulish w-24 text-lg mt-1 mx-6'
                >
                  Twitter
                </label>
                <input
                  className='rounded-lg bg-gray-100 border-gray-100 w-96'
                  type='url'
                  value={twitter}
                  onChange={e => setTwitter(e.target.value)}
                
                />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
