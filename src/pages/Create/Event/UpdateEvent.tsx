import * as React from 'react';
import { gql, useQuery, useLazyQuery, useMutation } from '@apollo/client';
import DD_Categories from '../../../components/dd_categories';
import Header from '../../../components/header';
import TagInput from '../../../components/taginput';
import { mediaurl, graphqlurl } from '../../../components/config';

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

const EVENT_QUERY = gql`
  query eventById($id: ID) {
    eventById(id: $id) {
      iscore
      isvolunteer
      isregistered
      ischeckedin
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
      category {
        id
        name
      }
      tags {
        name
      }
      speakers {
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
  }
`;

const UPDATE_EVENT = gql`
  mutation updateEvent(
    $address: String
    $category: ID
    $city: String
    $country: String
    $description: String
    $endTime: DateTime
    $id: ID!
    $kind: String
    $liveUrl: String
    $maxRsvp: Int
    $name: String
    $startTime: DateTime
    $tags: [String]
    $speakers: [ID]
  ) {
    updateEvent(
      address: $address
      category: $category
      city: $city
      country: $country
      description: $description
      endTime: $endTime
      id: $id
      kind: $kind
      liveUrl: $liveUrl
      maxRsvp: $maxRsvp
      name: $name
      startTime: $startTime
      tags: $tags
      speakers: $speakers
    ) {
      event {
        id
        name
      }
      community {
        id
        name
      }
    }
  }
`;

const SpeakerCard = ({ speaker, removeSpeaker }) => {
  return (
    <div>
      <ul className='flex flex-row items-center justify-between w-96 border-b-1'>
        <p className='font-inter text-gray-500'>{speaker.email}</p>
        <button onClick={() => removeSpeaker(speaker.id)}>
          <img
            src={mediaurl + speaker.profilePicture}
            className='h-16 w-16 rounded-full my-2 mr-4 object-cover'
          />
        </button>
      </ul>
    </div>
  );
};

export default function UpdateEventTwo(props: UpdateProps) {
  const [id, setId] = React.useState();
  const { data: categories_data } = useQuery(CATEGORIES_QUERY);
  const [category, setCategory] = React.useState();
  const [tags, setTags] = React.useState([]);
  const [startTime, setStartTime] = React.useState('2020-06-07T00:00');
  const [endTime, setEndTime] = React.useState('');
  const [logo, setLogo] = React.useState(null);
  const [logoURL, setLogoURL] = React.useState('');
  const [name, setName] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [city, setCity] = React.useState('');
  const [country, setCountry] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [online, setOnline] = React.useState(true);
  const { loading, error, data, refetch } = useQuery(EVENT_QUERY, {
    variables: { id: props?.location.state.eventid },
  });

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
  const [callUpdateEvent, { data: update_data }] = useMutation(UPDATE_EVENT);
  const [speakers, setSpeakers] = React.useState([]);
  const [speakerinput, setSpeakerInput] = React.useState('');

  React.useEffect(() => {
    setId(props?.location.state.eventid);
    refetch();
  }, []);

  React.useEffect(() => {
    if (!loading) {
      setId(props?.location.state.eventid);
      setName(data?.eventById.name);
      setAddress(data?.eventById.address);
      setCity(data?.eventById.city);
      setCountry(data?.eventById.country);
      setDescription(data?.eventById.description);
      setCategory(data?.eventById.category);
      setTags(data?.eventById.tags.map(e => e.name));
      setStartTime(
        data?.eventById.startTime.substring(
          0,
          data?.eventById.startTime.length - 9
        )
      );
      console.log(data?.eventById.startTime);
      setEndTime(
        data?.eventById.endTime.substring(0, data?.eventById.endTime.length - 9)
      );
      console.log(data?.eventById.endTime);
      setLogoURL(mediaurl + data?.eventById.featuredImage);
      setOnline(data?.eventById.kind == 'V' ? true : false);
      setSpeakers(data?.eventById.speakers);
    }
  }, [data]);

  const handleFileChange = (e: { target: { files: any } }) => {
    var files = e.target.files;
    if (files[0]) {
      setLogo(files[0]);
      setLogoURL(URL.createObjectURL(files[0]));
    }
  };

  async function uploadImage(eventid) {
    // upload logo if logo else return True
    console.log(eventid);
    try {
      if (!logo) {
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
      formdata.append('file', logo);

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
          alert('image upload error ' + JSON.stringify(error));
        });

      return r?.data.updateEventimage?.success;
    } catch (e) {
      console.log(e);
    }
  }

  async function handleSubmit() {
    let speakerarr = speakers.map(e => parseInt(e.id));
    console.log(speakerarr);
    try {
      let { data, errors: e } = await callUpdateEvent({
        variables: {
          address: address,
          category: category.id,
          city: city,
          country: country,
          description: description,
          endTime: endTime,
          id: id,
          kind: online ? 'V' : 'P',
          name: name,
          startTime: startTime,
          tags: tags,
          speakers: speakerarr,
        },
      });
      if (e) {
        console.error(e);
        alert(JSON.stringify(e));
        return;
      } else {
        alert('event updated');
      }
      // let eventid = data.updateEvent.event.id;
      // console.log(eventid);
      let uploaded = await uploadImage(id);
      if (uploaded) {
        alert('event photo uploaded');
      } else {
        console.error('Failed to upload Event Image');
        alert('Failed to upload Event Image');
      }
    } catch (e) {
      alert(JSON.stringify(e));
    }
    return;
  }

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

  if (loading) {
    return `Loading`;
  }
  if (error) {
    return `Error! ${error}`;
  }

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
            <button onClick={handleSubmit}>
              <li className='mx-2 text-green-500 font-inter'>Save</li>
            </button>
          </ul>
        </div>
        <div className='flex mx-auto w-2/3 font-mulish my-4'>
          <label>
            <img
              className='h-48 w-72 object-cover items-center justify-between rounded-lg  hover:shadow-lg'
              src={logoURL}
            />
            <input type='file' className='hidden' onChange={handleFileChange} />
            <figcaption className='py-2 text-center font-mulish'>
              Upload Event photo
            </figcaption>
          </label>
          <div className='grid items-top grid-cols-2 mx-10 h-24 w-3/5 font-inter'>
            <input
              className='col-span-2 bg-gray-100 rounded-md p-2 font-sm placeholder-gray my-3 mx-3'
              placeholder='Event Name'
              value={name}
              onChange={e => {
                setName(e.target.value);
              }}
            />
            <input
              className='bg-gray-100 rounded-md p-2 font-sm placeholder-gray my-3 mx-3'
              placeholder='City'
              value={city}
              onChange={e => {
                setCity(e.target.value);
              }}
            />
            <input
              className='bg-gray-100 rounded-md p-2 font-sm placeholder-gray my-3 mx-3'
              placeholder='Country'
              value={country}
              onChange={e => {
                setCountry(e.target.value);
              }}
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
              <input
                value={address}
                onChange={e => {
                  setAddress(e.target.value);
                }}
                className='col-span-2 w-72 bg-gray-100 rounded-md p-2 font-sm placeholder-gray my-3 mx-3'
              />
            </div>
            <div className='flex items-center justify-between w-1/5 my-4'>
              <label htmlFor='online'>Make this event online</label>
              <input
                className='bg-gray-100 rounded-full border border-gray-100 h-6 w-6'
                placeholder='online'
                type='checkbox'
                name='online'
                checked={online}
                onClick={e => {
                  setOnline(e.target.checked);
                  console.log(e);
                }}
              />
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
          <textarea
            className='w-1/2 h-72 rounded-md bg-gray-100 border border-gray-100'
            value={description}
            onChange={e => {
              setDescription(e.target.value);
            }}
          ></textarea>
        </div>
      </div>
    </div>
  );
}
