import { gql, useMutation } from '@apollo/client';
import { Link, navigate } from 'gatsby';
import * as React from 'react';
import Rectangle from '../../../assets/Images/Rectangle6.png';
import { graphqlurl } from '../../../components/config';
import Header from '../../../components/header';
const CREATE_COMMUNITY_MUTATION = gql`
  mutation createCommunity(
    $address: String
    $city: String
    $country: String
    $description: String!
    $discord: String
    $email: String
    $facebook: String
    $featuredVideo: String
    $instagram: String
    $linkedin: String
    $name: String!
    $twitter: String
    $website: String
  ) {
    createCommunity(
      address: $address
      city: $city
      country: $country
      description: $description
      discord: $discord
      email: $email
      facebook: $facebook
      featuredVideo: $featuredVideo
      instagram: $instagram
      linkedin: $linkedin
      name: $name
      twitter: $twitter
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
        leader {
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

// TODO: handle image, display error, fix next css
export default function CreateCommunityOne() {
  const [logo, setLogo] = React.useState(null);
  const [name, setName] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [discord, setDiscord] = React.useState('');
  const [facebook, setFacebook] = React.useState('');
  const [instagram, setInstagram] = React.useState('');
  const [linkedin, setLinkedIn] = React.useState('');
  const [twitter, setTwitter] = React.useState('');
  const [webpage, setWebpage] = React.useState('');
  const [city, setCity] = React.useState('');
  const [country, setCountry] = React.useState('');
  const [logoURL, setLogoURL] = React.useState(Rectangle);
  const [description, setDescription] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [callCreateCommunity, { data }] = useMutation(
    CREATE_COMMUNITY_MUTATION
  );

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
      .catch(error => {
        console.log('error', error);
        alert('image upload error ' + JSON.stringify(error));
      });

    return r?.data.updateCommunitylogo?.success;
  }
  async function handleSubmit() {
    try {
      let { data, errors: e } = await callCreateCommunity({
        variables: {
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
        },
      });
      if (e) {
        console.log(e.graphQLErrors[0].message);
        alert(JSON.stringify(e.graphQLErrors[0].message));
        return;
      }

      let communityid = data.createCommunity.community.id;

      if (uploadLogo(communityid)) {
        alert('community created');
        navigate('/Create/Community/createCommunityPage2', {
          state: { communityid },
        });
      } else {
        console.error('Failed to upload Community Logo');
        alert('Failed to upload Community Logo');
      }
      return;
    } catch (e) {
      console.log(e.graphQLErrors[0].message);
      alert(JSON.stringify(e.graphQLErrors[0].message));
    }
  }
  return (
    <div className='h-screen w-screen'>
      <Header />
      <div className='flex flex-col justify-center items-center'>
        <div className='flex items-center justify-between border-b-2 pb-2 w-1/2'>
          <Link to='/Profiles/userProfile'>
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

          <span className='text-3xl flex-grow text-center font-base font-mulish'>
            Create Community
          </span>
        </div>
        <figure className='mt-8 mb-6'>
          <label>
            <img className='rounded-lg h-64 w-96 object-cover' src={logoURL} />
            <input type='file' className='hidden' onChange={handleFileChange} />
            <figcaption className='py-2 text-center font-mulish'>
              Upload Community photo
            </figcaption>
          </label>
        </figure>
        <form className='flex flex-col'>
          <label className='my-2' htmlFor='Community name'>
            <input
              className='border w-60 border-gray p-2 rounded-lg font-roboto text-sm'
              placeholder='Community name'
              name='Community name'
              required={true}
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </label>
          <label className='my-2' htmlFor='email id'>
            <input
              className='border w-60 border-gray p-2 rounded-lg font-roboto text-sm'
              placeholder='email id'
              name='email id'
              required={true}
              value={email}
              type='email'
              onChange={e => setEmail(e.target.value)}
            />
          </label>
          <label className='my-2' htmlFor='Address'>
            <input
              className='border w-60 border-gray p-2 rounded-lg font-roboto text-sm'
              placeholder='Address'
              name='Address'
              required={true}
              value={address}
              onChange={e => setAddress(e.target.value)}
            />
          </label>
          <label className='my-2' htmlFor='City'>
            <input
              className='border w-60 border-gray p-2 rounded-lg font-roboto text-sm'
              placeholder='City'
              name='City'
              required={true}
              value={city}
              onChange={e => setCity(e.target.value)}
            />
          </label>
          <label className='my-2' htmlFor='Country'>
            <input
              className='border w-60 border-gray p-2 rounded-lg font-roboto text-sm'
              placeholder='Country'
              name='Country'
              required={true}
              value={country}
              onChange={e => setCountry(e.target.value)}
            />
          </label>
          <label className='my-2' htmlFor='Discord'>
            <input
              className='border w-60 border-gray p-2 rounded-lg font-roboto text-sm'
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
              className='border w-60 border-gray p-2 rounded-lg font-roboto text-sm'
              placeholder='Facebook'
              name='Facebook'
              type='url'
              required={true}
              value={facebook}
              onChange={e => setFacebook(e.target.value)}
            />
          </label>
          {/* <label className='my-2' htmlFor='video'>
            <input
              className='border w-60 border-gray p-2 rounded-lg font-roboto text-sm'
              placeholder='video'
              name='video'
              required={true}
              value={video}
              onChange={e => setVideo(e.target.value)}
            />
          </label> */}
          <label className='my-2' htmlFor='Instagram'>
            <input
              className='border w-60 border-gray p-2 rounded-lg font-roboto text-sm'
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
              className='border w-60 border-gray p-2 rounded-lg font-roboto text-sm'
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
              className='border w-60 border-gray p-2 rounded-lg font-roboto text-sm'
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
              className='border w-60 border-gray p-2 rounded-lg font-roboto text-sm'
              placeholder='Webpage'
              name='Webpage'
              type='url'
              required={true}
              value={webpage}
              onChange={e => setWebpage(e.target.value)}
            />
          </label>
          <label className='my-2' htmlFor='Description'>
            <textarea
              className='border w-60 border-gray h-40 p-2 rounded-lg font-roboto text-sm'
              placeholder='Description'
              name='Description'
              rows={10}
              value={description}
              required={true}
              onChange={e => setDescription(e.target.value)}
            />
          </label>
        </form>
        <button
          className='font-inter my-2 text-xs bg-blue-400 text-white rounded-lg px-3 py-2'
          onClick={handleSubmit}
        >
          Next
        </button>
      </div>
    </div>
  );
}
