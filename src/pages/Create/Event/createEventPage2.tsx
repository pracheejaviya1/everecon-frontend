import { gql, useMutation, useQuery } from '@apollo/client';
import { Link, navigate } from 'gatsby';
import * as React from 'react';
import { graphqlurl } from '../../../components/config';
import Header from '../../../components/header';

const CREATE_EVENT_MUTATION = gql`
  mutation createEvent(
    $address: String
    $category: ID!
    $city: String
    $community: ID
    $country: String
    $description: String!
    $endTime: DateTime!
    $kind: String!
    $liveUrl: String
    $maxRsvp: Int
    $name: String!
    $startTime: DateTime!
    $tags: [String]
  ) {
    createEvent(
      address: $address
      category: $category
      city: $city
      community: $community
      country: $country
      description: $description
      endTime: $endTime
      kind: $kind
      liveUrl: $liveUrl
      maxRsvp: $maxRsvp
      name: $name
      startTime: $startTime
      tags: $tags
    ) {
      event {
        id
        name
        description
        kind
        address
        city
        country
        liveUrl
        startTime
        endTime
        featuredImage
        isActive
        creationTime
        maxRsvp
      }
      community {
        id
        name
        description
        logo
        banner
        featuredVideo
        address
        city
        country
        email
        membersCount
        website
        facebook
        linkedin
        twitter
        instagram
        discord
        isActive
        creationTime
      }
      tags {
        id
        name
      }
      category {
        id
        name
        description
      }
    }
  }
`;
const SPEAKER_EMAIL_QUERY = gql`
query speakerByEmail ($email: String) {
    speakerByEmail (email: $email) {
        id
        firstName
        lastName
        email
        facebook
        instagram
        profilePicture
        description
    }
  }
`

export default function CreateEventTwo({ location }) {
  
  const [callCreateEvent, { data }] = useMutation(CREATE_EVENT_MUTATION);
  const [searchmeEmail,setSearchMeEmail] = React.useState('');
  
  const {data:speakerdata} = useQuery(SPEAKER_EMAIL_QUERY,{variables:{email:searchmeEmail}});

  const [startTime, setStartTime] = React.useState('2018-06-07T00:00');
  const [endTime, setEndTime] = React.useState('');
  const [maxRsvp, setmaxRsvp] = React.useState('');
  const [speakers,setSpeakers] = React.useState([]);
  const [speakerinput,setSpeakerInput] = React.useState('');
  
  React.useEffect(() => {
    if(location.state.speakeremail){
      setSearchMeEmail(location.state.speakeremail)
    }
  })

  React.useEffect(() => {
    setSpeakers([...speakers,speakerdata.speakerByEmail])
  },[speakerdata])
  const image = location.state?.logo;
  if(location.state?.speaker){
    console.log(location.state.speaker)
  }
  // TODO: input for Tags
  // const [tags, setTags] = React.useState('');
  async function uploadImage(eventid) {
    // upload logo if logo else return True
    if (!image) {
      console.log('no image');
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
    updateEventimage (id: ${eventid}) {
        success
        picture
    }
}
      `
    );
    formdata.append('file', image);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow',
    };

    let r = await fetch(graphqlurl, requestOptions)
      .then(response => response.json())
      .catch(error => console.log('error', error));

    return r.data.updateEventimage.success;
  }

  async function handleSubmit() {
    let { data, errors: e } = await callCreateEvent({
      variables: {
        address: location.state.address,
        category: 1, // need support for categories
        tags: ['tag1'],
        city: location.state.city,
        name: location.state.name,
        community: location.state.communityid,
        country: location.state.country,
        description: location.state.description,
        endTime: endTime,
        kind: 'V',
        maxRsvp: maxRsvp,
        startTime: startTime,
      },
    });
    if (e) {
      console.error(e);
      return;
    }
    let eventid = data.createEvent.event.id;
    console.log(eventid);
    if (uploadImage(eventid)) {
      navigate(`/event/${eventid}`);
    } else {
      console.error('Failed to upload Event Image');
    }
    return;
  }

  return (
    <div className='h-screen w-screen'>
      <Header />
      <div className='flex flex-col my-8 justify-start h-5/6 items-center'>
        <div className='flex items-center justify-between border-b-2 pb-2 w-1/2'>
          <Link to='/Create/Event/createEventPage1'>
            <svg
              xmlns='https://www.w3.org/2000/svg'
              className='h-6 w-6'
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
          </Link>
          <span className='text-3xl flex-grow text-center font-mulish'>
            Create Event
          </span>
        </div>
        <form className='flex flex-col my-8 w-1/4'>
          <div className='flex items-center justify-between w-full my-2'>
            <label className='m-2  font-mulish' htmlFor='Start Time'>
              Start Time
            </label>
            <input
              name='Start Time'
              type='datetime-local'
              min='2018-06-07T00:00'
              value={startTime}
              onChange={e => setStartTime(e.target.value)}
            />
            <label className='m-2  font-mulish' htmlFor='End Time'>
              End Time
            </label>
            <input
              name='End Time'
              type='datetime-local'
              min={startTime}
              value={endTime}
              onChange={e => setEndTime(e.target.value)}
            />
          </div>
          {/* <div className='flex items-center justify-between w-full my-2'>
            <label className='m-2 font-mulish' htmlFor='Tags'>
              Tags
            </label>
            <input
              className='border border-gray-400 p-2 w-80 rounded-lg font-roboto text-sm'
              name='Tags'
            />
          </div> */}

          <label className='my-4 mx-10 font-mulish' htmlFor='limit'>
            Participant Limit
          </label>
          <input
            className='border border-gray-400 mx-10 p-2 w-80 rounded-lg font-roboto text-sm'
            type='number'
            name='limit'
            value={maxRsvp}
            onChange={e => setmaxRsvp(e.target.value)}
          />
          <div>
            <p className='font-mulish mx-10 my-4 mb-6'>Speaker</p>
            <div className='flex flex-row'>
              <input
                type='text'
                placeholder='Add Speaker'
                className='placeholder-gray-400 mx-10 border-none rounded-md text-xs w-full bg-gray-100 font-mulish'
              />
              <button className='text-white text-sm bg-blue-400 py-2 px-4 rounded-md font-inter' onClick={(e) => {e.preventDefault();navigate('/Create/Speaker',location)}}>
                New Speaker
              </button>
            </div>
          </div>
        </form>
        {
          console.log(speakers)
        }
        <button
          className='text-white text-sm bg-blue-400 py-2 px-4 rounded-lg font-inter'
          onClick={handleSubmit}
        >
          Next
        </button>
      </div>
    </div>
  );
}
