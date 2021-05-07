import * as React from 'react';
import { gql, useQuery, useLazyQuery } from '@apollo/client';
import EventImage from '../../../assets/Images/community.jpg';
import Header from '../../../components/header';
import DD_Categories from '../../../components/dd_categories';
import TagInput from '../../../components/taginput';
import { graphqlurl } from '../../../components/config';

type UpdateProps = {
  details: string;
};
const CATEGORIES_QUERY = gql`
  query categories {
    categories {
      id
      name
    }
  }
`;
const SPEAKER_EMAIL_QUERY = gql`
  query speakerByEmail($email: String) {
    speakerByEmail(email: $email) {
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
`;

const SpeakerCard = ({ speaker, removeSpeaker }) => {
  return (
    <div>
      <ul className='flex flex-row items-center justify-between w-96 border-b-1'>
        <p className='font-inter text-gray-500'>{speaker.email}</p>
        <button onClick={() => removeSpeaker(speaker.id)}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6 mx-10 my-4'
            fill='none'
            viewBox='0 0 24 24'
            stroke='#EF4444'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z'
            />
          </svg>{' '}
        </button>
      </ul>
    </div>
  );
};

export default function UpdateEventTwo(props: UpdateProps) {
  const [fields, setFields] = React.useState([{ value: null }]);
  const { data: categories_data } = useQuery(CATEGORIES_QUERY);
  const [category, setCategory] = React.useState();
  const [tags, setTags] = React.useState([]);
  const [startTime, setStartTime] = React.useState('2018-06-07T00:00');
  const [endTime, setEndTime] = React.useState('');
  const removeSpeaker = (speakerid: number) => {
    let newspeakers = speakers.filter(speaker => speaker.id !== speakerid);
    setSpeakers(newspeakers);
  };
  const [fetch_speaker, { data: speakerdata }] = useLazyQuery(
    SPEAKER_EMAIL_QUERY,
    {
      onError: e => {
        alert(JSON.stringify(e.graphQLErrors[0]?.message));
      },
    }
  );

  const [speakers, setSpeakers] = React.useState([]);
  const [speakerinput, setSpeakerInput] = React.useState('');

  React.useEffect(() => {
    console.log(speakerdata);
    if (speakerdata) {
      let speakersids = speakers.map(e => e.id);
      if (speakersids.includes(speakerdata.speakerByEmail.id)) {
        return;
      } else {
        setSpeakers([...speakers, speakerdata.speakerByEmail]);
        console.log(speakerdata);
        console.log(speakers);
      }
    }
  }, [speakerdata]);

  console.log(props.location);
  return (
    <div className='h-screen w-screen'>
      <Header />
      <div className='flex flex-col my-8 justify-center items-center ml-12 mr-0 w-full'>
        <div className='flex items-end justify-between border-b-2 pb-4 w-2/3'>
          <div className='flex items-center justify-center'>
            <h1 className='text-2xl ml-2 font-light text-center font-mulish text-gray-700'>
              Update Event
            </h1>
          </div>
          <ul className='flex list-none'>
            <li className='mx-2 text-green-500 font-inter'>Save</li>
            <li className='mx-2 text-red-500 font-inter'>Discard</li>
          </ul>
        </div>
        <div className='flex mx-auto w-2/3 font-mulish my-4'>
          <label>
            <img
              className='h-48 w-72 object-cover items-center justify-between rounded-lg hover:shadow-lg'
              src={EventImage}
            />

            <input type='file' className='hidden' />
            <figcaption className='py-2 text-center items-center justify-between text-xs font-mulish'>
              Update Event photo
            </figcaption>
          </label>
          <div className='grid items-top grid-cols-2 mx-10 h-24 w-3/5 font-inter'>
            <input
              className='col-span-2 bg-gray-100 rounded-md p-2 font-sm placeholder-gray my-3 mx-3'
              placeholder='Event Name'
            />
            <input
              className='bg-gray-100 rounded-md p-2 font-sm placeholder-gray my-3 mx-3'
              placeholder='City'
            />
            <input
              className='bg-gray-100 rounded-md p-2 font-sm placeholder-gray my-3 mx-3'
              placeholder='Country'
            />
            <div className='col-span-2 flex flex-row items-center justify-between w-full my-2'>
              <label className='w-36 font-inter' htmlFor='Start Time'>
                Start Time
              </label>
              <input
                name='Start Time'
                className='rounded-md font-inter text-gray-500'
                type='datetime-local'
                min='2018-06-07T00:00'
                value={startTime}
                onChange={e => setStartTime(e.target.value)}
              />
              <label className='mx-4 w-36 font-inter' htmlFor='End Time'>
                End Time
              </label>
              <input
                name='End Time'
                className='rounded-md font-inter text-gray-500'
                type='datetime-local'
                min={startTime}
                value={endTime}
                onChange={e => setEndTime(e.target.value)}
              />
            </div>
          </div>
          <button
            type='submit'
            className='text-white bg-red-500 h-1/4 p-2 my-3 rounded-md'
            onClick={e => e.preventDefault()}
          >
            Delete Event
          </button>
        </div>
        <div className='w-2/3 mx-auto font-inter'>
          <hr className='my-4' />
          <form>
            <div className='flex items-center justify-between w-2/5'>
              <label className=' text-md' htmlFor='Address'>
                Address
              </label>
              <input className='col-span-2 w-72 bg-gray-100 rounded-md p-2 font-sm placeholder-gray my-3 mx-3' />
            </div>
            <div className='flex items-center justify-between w-1/5 my-4'>
              <label htmlFor='online'>Make this event online</label>
              <input
                className='bg-gray-100 rounded-full border border-gray-100 h-6 w-6'
                placeholder='online'
                type='checkbox'
                name='online'
              />
            </div>
            <div className='flex items-center justify-between w-2/5'>
              <label className='text-md' htmlFor='Host'>
                Host
              </label>
              <input className='col-span-2 w-72 bg-gray-100 rounded-md p-2 font-sm placeholder-gray my-3 mx-3' />
            </div>
            <div className='flex items-center justify-between w-2/5'>
              <label className='text-md' htmlFor='Event URL'>
                Event URL
              </label>
              <input className='col-span-2 w-72 bg-gray-100 rounded-md p-2 font-sm placeholder-gray my-3 mx-3' />
            </div>

            <hr className='my-4' />

            <div>
              <p className='font-inter my-4 mb-6 text-bold'>Speaker</p>
              <div className='flex flex-row items-center'>
                <input
                  type='text'
                  placeholder='Add Speaker'
                  className='placeholder-gray-400 h-12 border-none rounded-md text-md w-1/3 bg-gray-100 font-mulish'
                  value={speakerinput}
                  onChange={e => setSpeakerInput(e.target.value)}
                />
                <button
                  className='text-white text-sm bg-blue-400 mx-8 h-8 w-24 rounded-md font-inter'
                  onClick={e => {
                    e.preventDefault();
                    fetch_speaker({
                      variables: {
                        email: speakerinput,
                      },
                    });
                  }}
                >
                  Search
                </button>
              </div>
              {speakers.map(e => (
                <SpeakerCard speaker={e} removeSpeaker={removeSpeaker} />
              ))}
            </div>
            <label className='my-2' htmlFor='Event category'>
              {/* <input
              className='border border-gray-400 p-2 w-80 rounded-lg font-roboto text-sm'
              placeholder='category'
              name='Event category'
              value={category}
              onChange={e => setCategory(e.target.value)}
            /> */}
              <DD_Categories
                categories={categories_data?.categories || []}
                selected_category={category}
                setCategory={setCategory}
              />
            </label>
            <h3 className='my-3 text-semibold'>Tags</h3>
            <TagInput tags={tags} setTags={setTags} />
          </form>
        </div>
        <hr className='my-4 w-2/3' />

        <div className='w-2/3 my-2 mx-auto font-inter'>
          <h2 className='font-bold my-2'>Event Details</h2>
          <textarea className='w-1/2 h-72 rounded-md bg-gray-100 border border-gray-100'>
            {props.details}
          </textarea>
        </div>
      </div>
    </div>
  );
}
