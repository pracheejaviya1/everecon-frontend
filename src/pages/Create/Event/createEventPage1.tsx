import { gql, useQuery } from '@apollo/client';
import { Link, navigate } from 'gatsby';
import * as React from 'react';
import EventImg from '../../../assets/Images/Rectangle6.png';
import Header from '../../../components/header';
import DD_Categories from "../../../components/dd_categories"
import TagInput from "../../../components/taginput";

const CATEGORIES_QUERY = gql`
query categories{
    categories{
        id
        name
    }
}
`
export default function CreateEventOne({ location }) {
  const communityid = location.state?.communityid;
  // check communityid else return ERROR probably 404
  const {data:categories_data} = useQuery(CATEGORIES_QUERY);
  const [logo, setLogo] = React.useState(null);
  const [tags,setTags] = React.useState([]);
  const [logoURL, setLogoURL] = React.useState(EventImg);
  const [name, setName] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [category, setCategory] = React.useState();
  const [city, setCity] = React.useState('');
  const [country, setCountry] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [liveUrl, setliveURL] = React.useState('');

  const handleFileChange = (e: { target: { files: any } }) => {
    var files = e.target.files;
    if (files[0]) {
      setLogo(files[0]);
      setLogoURL(URL.createObjectURL(files[0]));
    }
  };

  return (
    <div className='h-screen w-full'>
      <Header />
      {/*Add back icon */}
      <div className='flex flex-col h-5/6 items-center mt-8'>
        <div className='flex items-center justify-between border-b-2 pb-2 w-1/2'>
          <Link to='/View/ViewCommunity'>
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
        <figure className='mt-8 mb-6'>
          <label>
            <img className='h-40 w-60 rounded-lg' src={logoURL} />
            <input type='file' className='hidden' onChange={handleFileChange} />
            <figcaption className='py-2 text-center font-mulish'>
              Upload Event photo
            </figcaption>
          </label>
        </figure>
        <form className='flex flex-col'>
          <label className='my-2' htmlFor='Event name'>
            <input
              className='border border-gray-400 p-2 w-80 rounded-lg font-roboto text-sm'
              placeholder='Event name'
              name='Event name'
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </label>
          <label className='my-2' htmlFor='Description'>
            <textarea
              className='border border-gray-400 p-2 w-80 h-40 rounded-lg font-roboto text-sm'
              placeholder='Description'
              name='Description'
              value={description}
              onChange={e => setDescription(e.target.value)}
            />
          </label>

          <label className='my-2' htmlFor='Event category'>
            {/* <input
              className='border border-gray-400 p-2 w-80 rounded-lg font-roboto text-sm'
              placeholder='category'
              name='Event category'
              value={category}
              onChange={e => setCategory(e.target.value)}
            /> */}
            <DD_Categories categories={categories_data?.categories || []} selected_category={category} setCategory={setCategory}/>
          </label>
          <TagInput tags={tags} setTags={setTags}/>
          <label className='my-2' htmlFor='Event city'>
            <input
              className='border border-gray-400 p-2 w-80 rounded-lg font-roboto text-sm'
              placeholder='city'
              name='Event city'
              value={city}
              onChange={e => setCity(e.target.value)}
            />
          </label>

          <label className='my-2' htmlFor='Event country'>
            <input
              className='border border-gray-400 p-2 w-80 rounded-lg font-roboto text-sm'
              placeholder='country'
              name='Event country'
              value={country}
              onChange={e => setCountry(e.target.value)}
            />
          </label>
          {/* TODO: */}
          {/* Select Event Kind */}
          {/* if Kind is Live ask address else ask for liveURL */}
          <label className='my-2' htmlFor='Event address'>
            <textarea
              className='border border-gray-400 p-2 w-80 h-40 rounded-lg font-roboto text-sm'
              placeholder='address'
              name='Event address'
              value={address}
              onChange={e => setAddress(e.target.value)}
            />
          </label>
        </form>
        <button
          onClick={() =>
            navigate('/Create/Event/createEventPage2', {
              state: {
                name: name,
                description: description,
                address: address,
                category: category?.id,
                city: city,
                country: country,
                communityid: communityid,
                logo: logo,
              },
            })
          }
          className='text-white text-sm bg-blue-400 py-2 px-4 rounded-lg font-inter'
        >
          Next
        </button>
      </div>
    </div>
  );
}
