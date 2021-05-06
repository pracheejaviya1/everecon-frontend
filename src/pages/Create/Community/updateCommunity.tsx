import { gql, useMutation, useQuery } from '@apollo/client';
import * as React from 'react';
import CommunityImage from '../../../assets/Images/ahmedabad.jpeg';
import { graphqlurl, mediaurl } from '../../../components/config';
import Header from '../../../components/header';

const COMMUNITY_QUERY = gql`
  query communityById($id: ID) {
    communityById(id: $id) {
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
      iscore
      isfollower
      isvolunteer
    }
  }
`;

const UPDATE_COMMUNITY_MUTATION = gql`
  mutation updateCommunity(
    $address: String
    $city: String
    $country: String
    $description: String
    $discord: String
    $email: String
    $facebook: String
    $featuredVideo: String
    $followers: [ID]
    $id: ID!
    $instagram: String
    $isActive: Boolean
    $linkedin: String
    $name: String
    $website: String
  ) {
    updateCommunity(
      address: $address
      city: $city
      country: $country
      description: $description
      discord: $discord
      email: $email
      facebook: $facebook
      featuredVideo: $featuredVideo
      followers: $followers
      id: $id
      instagram: $instagram
      isActive: $isActive
      linkedin: $linkedin
      name: $name
      website: $website
    ) {
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
    }
  }
`;

type TagProps = {
  title: string;
};

function Tag(props: TagProps) {
  return (
    <span className='rounded-xl flex flex-row items-center text-center m-2 bg-gray-200 px-2 py-1'>
      {props.title}
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-4 w-4 m-1'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M6 18L18 6M6 6l12 12'
        />
      </svg>
    </span>
  );
}

export default function UpdateCommunity(props) {
  const communityid = props.location?.state?.communityid;
  console.log(communityid);
  const [logo, setLogo] = React.useState(null);
  const [logoURL, setLogoURL] = React.useState(CommunityImage);
  const [name, setName] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [city, setCity] = React.useState('');
  const [country, setCountry] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [discord, setDiscord] = React.useState('');
  const [facebook, setFacebook] = React.useState('');
  const [instagram, setInstagram] = React.useState('');
  const [linkedin, setLinkedIn] = React.useState('');
  const [twitter, setTwitter] = React.useState('');
  const [webpage, setWebpage] = React.useState('');
  const [featuredVideo, setFeaturedVideo] = React.useState('');
  const [id, setId] = React.useState(props.location.id);
  const { loading, error, data, refetch } = useQuery(COMMUNITY_QUERY, {
    variables: { id: communityid },
  });
  const [callUpdateCommunity, { data: updateddata }] = useMutation(
    UPDATE_COMMUNITY_MUTATION
  );
  React.useEffect(() => {
    setId(props?.location.state.communityid);
    refetch();
  }, []);

  React.useEffect(() => {
    setId(props?.location.state.communityid);
    setName(data?.communityById.name);
    setAddress(data?.communityById.address);
    setCity(data?.communityById.city);
    setCountry(data?.communityById.country);
    setDescription(data?.communityById.description);
    setEmail(data?.communityById.email);
    setDiscord(data?.communityById.discord);
    setFacebook(data?.communityById.facebook);
    setInstagram(data?.communityById.instagram);
    setLinkedIn(data?.communityById.linkedin);
    setWebpage(data?.communityById.webpage);
    setLogoURL(mediaurl + data?.communityById.logo);
    setFeaturedVideo(data?.communityById.featuredVideo);
  }, [data]);

  const handleFileChange = (e: { target: { files: any } }) => {
    var files = e.target.files;

    setLogo(files[0]);
    setLogoURL(URL.createObjectURL(files[0]));
  };

  async function uploadLogo(communityid) {
    // upload logo if logo else return True
    if (!logo) {
      console.log('no logo');
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
      `mutation  {
    updateCommunitylogo(id: ${communityid}) {
        success
        logo
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
      .catch(error => console.log('error', error));

    return r.data.updateCommunitybanner.success;
  }

  async function handleSubmit() {
    let variables = {
      id: id,
      email: email,
      name: name,
      description: description,
      address: address,
      discord: discord,
      facebook: facebook,
      instagram: instagram,
      linkedin: linkedin,
      twitter: twitter,
      webpage: webpage,
      city: city,
      country: country,
      featuredVideo: featuredVideo,
    };
    console.log(variables);
    let { data, errors: e } = await callUpdateCommunity({
      variables,
    });

    if (e) {
      console.log(e.graphQLErrors[0].message);
    }

    uploadLogo(id);
    return;
  }

  const input_class: string =
    'border-gray-100 p-3 text-xs block w-80 rounded-xl font-mulish bg-gray-100';
  if (loading) {
    return `Loading`;
  }
  if (error) {
    return `Error! ${error}`;
  }

  return (
    <div className='h-screen w-screen'>
      <Header />
      <div className='flex border-b-2 py-10 w-2/3 mx-auto font-inter'>
        <label>
          <img
            className=' object-contain h-72 w-96 rounded-lg hover:bg-red-500'
            src={logoURL}
          />
          <input type='file' className='hidden' onChange={handleFileChange} />
          <figcaption className='py-2 text-center text-xs font-mulish'>
            Update Community photo
          </figcaption>
        </label>
        <div className='flex ml-10 items-start justify-between h-full flex-col font-inter w-4/5'>
          <form className='flex flex-col'>
            <label htmlFor='Community name'>
              <input
                className='w-96 mb-2 bg-gray-100 p-3 rounded-lg font-roboto text-sm'
                placeholder='Community name'
                name='Community name'
                required={true}
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </label>
            <div className='grid grid-cols-2'>
              <label className='my-2' htmlFor='email id'>
                <input
                  className='w-48 bg-gray-100 p-3 rounded-lg font-roboto text-sm'
                  placeholder='City'
                  name='City'
                  required={true}
                  value={city}
                  onChange={e => setCity(e.target.value)}
                />
              </label>
              <label className='my-2' htmlFor='Description'>
                <input
                  className='w-48 mx-2 bg-gray-100 p-3 rounded-lg font-roboto text-sm'
                  placeholder='Country'
                  name='Country'
                  value={country}
                  onChange={e => setCountry(e.target.value)}
                />
              </label>
            </div>

            <label className='my-2' htmlFor='Description'>
              <input
                className='w-96 bg-gray-100 p-3 rounded-lg font-roboto text-sm'
                placeholder='Address'
                name='Address'
                value={address}
                onChange={e => setAddress(e.target.value)}
              />
            </label>
            <label className='my-2' htmlFor='Description'>
              <input
                className='w-96 bg-gray-100 p-3 rounded-lg font-roboto text-sm'
                placeholder='email'
                name='Email'
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </label>
            <label className='my-2' htmlFor='Description'>
              <input
                className='w-96 bg-gray-100 p-3 rounded-lg font-roboto text-sm'
                placeholder='Featured Video'
                name='Featured Video'
                value={featuredVideo}
                onChange={e => setFeaturedVideo(e.target.value)}
              />
            </label>
          </form>
        </div>
        <ul className='flex list-none'>
          <li>
            <button
              className='mx-2 text-green-600 font-inter items-end text-lg'
              onClick={handleSubmit}
            >
              Save
            </button>
          </li>
        </ul>
      </div>

      <div className='w-2/3 m-auto py-4 font-inter justify-between flex'>
        <div className='w-2/3'>
          <div className='w-full mb-2 flex justify-between text-xl'>
            <button onClick={e => e.preventDefault()} type='submit'>
              About
            </button>
          </div>
          <form className='flex flex-col'>
            <label className='my-2' htmlFor='Community name'>
              <textarea
                className='w-full border border-gray-100 h-96 bg-gray-100 rounded-lg font-roboto text-sm text-gray-700'
                placeholder='Description'
                name='Community Description'
                required={true}
                value={description}
                onChange={e => setDescription(e.target.value)}
              />
            </label>
          </form>
        </div>
        <div className='w-2/3 mx-8'>
          <div className='w-full mb-2 flex justify-between text-xl'>
            <button onClick={e => e.preventDefault()} type='submit'>
              Contact
            </button>
          </div>
          <form className='flex flex-col'>
            <label className='my-2' htmlFor='Discord'>
              <input
                className='w-80 border border-gray-100 bg-gray-100 p-3 rounded-lg font-roboto text-sm'
                placeholder='Discord'
                name='Discord'
                required={true}
                type='url'
                value={discord}
                onChange={e => setDiscord(e.target.value)}
              />
            </label>
            <label className='my-2' htmlFor='Facebook'>
              <input
                className='w-80 border border-gray-100 bg-gray-100 p-3 rounded-lg font-roboto text-sm'
                placeholder='Facebook'
                name='Facebook'
                type='url'
                required={true}
                value={facebook}
                onChange={e => setFacebook(e.target.value)}
              />
            </label>
            <label className='my-2' htmlFor='Instagram'>
              <input
                className='w-80 border border-gray-100 bg-gray-100 p-3 rounded-lg font-roboto text-sm'
                placeholder='Instragram'
                name='Instragram'
                type='url'
                required={true}
                value={instagram}
                onChange={e => setInstagram(e.target.value)}
              />
            </label>
            <label className='my-2' htmlFor='LinkedIn'>
              <input
                className='w-80 border border-gray-100 bg-gray-100 p-3 rounded-lg font-roboto text-sm'
                placeholder='LinkedIn'
                name='LinkedIn'
                type='url'
                required={true}
                value={linkedin}
                onChange={e => setLinkedIn(e.target.value)}
              />
            </label>
            <label className='my-2' htmlFor='Twitter'>
              <input
                className='w-80 border border-gray-100 bg-gray-100 p-3 rounded-lg font-roboto text-sm'
                placeholder='Twitter'
                name='Twitter'
                type='url'
                required={true}
                value={twitter}
                onChange={e => setTwitter(e.target.value)}
              />
            </label>
            <label className='my-2' htmlFor='Webpage'>
              <input
                className='w-80 border border-gray-100 bg-gray-100 p-3 rounded-lg font-roboto text-sm'
                placeholder='Webpage'
                name='Webpage'
                type='url'
                required={true}
                value={webpage}
                onChange={e => setWebpage(e.target.value)}
              />
            </label>
          </form>
        </div>
        <button className='text-white text-sm bg-red-500 h-14 w-40 rounded-md font-inter right-0 hover:bg-red-700 items-end'>
          Delete Community
        </button>
      </div>
    </div>
  );
}
