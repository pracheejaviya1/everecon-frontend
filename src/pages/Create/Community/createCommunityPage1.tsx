import * as React from 'react';
import Rectangle from '../../../assets/Images/Rectangle6.png';
import Header from '../../../components/header';
import { Link, navigate } from 'gatsby';

// TODO: handle image, display error, fix next css 
export default function CreateCommunityOne() {
  const [logo,setLogo] = React.useState("")
  const [name,setName] = React.useState("")
  const [description,setDescription] = React.useState("")
  const [email,setEmail] = React.useState("")
  // const handleSubmit = () => {
    
  //   const operation = {
  //     query: createCommunityMutation,
  //     variables: {
  //       email: email,
  //       name:name,
  //       description:description,
  //     },
  //   };
  //   makePromise(execute(link, operation)).then(r => {
  //     if (r.data?.createCommunity !== null) {
  //       const communityid =  r.data.createCommunity.community.id
  //       navigate('/Create/Community/createCommunityPage2',{state:{communityid}});
  //       return;
  //     }
  //     if (r.errors != null) {
  //       console.error(r.errors);
  //     }
  //   });
  // };
  return (
    <div className='h-screen w-screen'>
      <Header />
      <div className='flex flex-col h-5/6 justify-center items-center'>
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
            <img className='h-40 w-60 rounded-lg' src={Rectangle} />
            <input type='file' className='hidden' />
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
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label className='my-2' htmlFor='email id'>
            <input
              className='border w-60 border-gray p-2 rounded-lg font-roboto text-sm'
              placeholder='email id'
              name='email id'
              required={true}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
        </form>
        <button>
          Next
          </button>
      </div>
    </div>
  );
}
