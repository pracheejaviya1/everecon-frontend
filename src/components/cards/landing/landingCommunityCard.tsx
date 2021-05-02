import * as React from 'react';
import { mediaurl } from '../../config';
import { Link } from 'gatsby';
// TODO: use logo instead
export default function CommunityCard({ logo, id, name }) {
  console.log(id);
  return (
    <Link to={'/community/' + id}>
      <div className=''>
        <img
          className='shadow hover:shadow-2xl h-72 w-72 rounded-md object-cover'
          src={mediaurl + logo}
          alt='community logo'
        />
        <h3 className='p-3'>{name}</h3>
      </div>
    </Link>
  );
}
