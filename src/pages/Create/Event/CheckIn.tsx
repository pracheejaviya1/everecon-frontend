import * as React from 'react';
import EventTitle from '../../../components/eventComponents/Title';
import Header from '../../../components/header';

type Text = {
  title: string;
};

function MemberCard(props: Text) {
  // TODO: take userid and eventid in props on Click make call
  const [checkedin,setCheckedin] = React.useState(false)
  return (
    <div className='my-2 flex items-center border-b-2 p-2 border-gray-400'>
        <div className='flex flex-row w-full'>
          <p className='text-xl font-inter flex-auto'>{props.title}</p>
          <label className='self-end'>
            <input
              type='checkbox'
              className='form-checkbox h-5 w-5 text-blue-600 items-end'
              checked={checkedin}
              onChange={() => setCheckedin(!checkedin)}
            />
          </label>
        </div>
    </div>
  );
}

export default function ViewEvent() {
  const input_class: string =
    'border-gray-100 p-3 text-xs block w-80 rounded-xl font-mulish bg-gray-100 ';
  return (
    <div className='m-2 border-b-2 h-screen'>
      <Header />
      <div className='flex flex-col mx-auto w-3/4 items-center'>
        <EventTitle
          datetime={new Date()}
          title='Talking Tech with Feeling Ingenium'
        />
      </div>
      <div className='w-3/4 pt-4 mx-auto flex items-start justify-between'>
        <div>
          <h2 className='font-inter text-2xl font-base'>Check-In Attendees</h2>
        </div>
      </div>
      <div className='flex flex-col mx-auto w-3/4 items-start mt-4'>
        <form className='mb-2'>
          <input
            type='text'
            className={input_class}
            placeholder='Search Participant'
            name='category'
          />
        </form>
        <ol className='flex flex-col list-decimal text-gray-700 mt-4 mx-4 justify-evenly w-full'>
          <li>
            <MemberCard title='Prachee Javiya' />
          </li>
          <li>
            {' '}
            <MemberCard title='Shloka Javiya' />
          </li>
          <li>
            <MemberCard title='Mr Stuffy' />
          </li>
          <li>
            <MemberCard title='Kevin' />
          </li>
        </ol>
      </div>
    </div>
  );
}
