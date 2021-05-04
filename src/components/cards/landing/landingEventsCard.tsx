import * as React from 'react';
import { mediaurl } from '../../config';
import { Link } from 'gatsby';
//TODO use logo
export default function EventsCard({ logo, id, name }) {
  return (
    <Link to={'/event/' + id}>
      <div>
        <img
          className='shadow hover:shadow-2xl h-72 w-72 rounded-md object-cover'
          src={mediaurl + logo}
        />
        <h3 className='p-3 text-xl font-inter text-center'>{name}</h3>
      </div>
    </Link>
  );
}
