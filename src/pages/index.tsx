import { Link } from 'gatsby'
import React from 'react'
import Header from '../components/header'

export default function Home() {
  return (
    <div className='text-purple-700'>
      <Link
        to='/contact/'
        className='py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-purple-500 hover:bg-purple-700'
      >
        Contact
      </Link>
      <Header headerText='Hello Gatsby!' />
      <img src='https://source.unsplash.com/random/400x200' alt='' />
    </div>
  )
}
