import { Link } from 'gatsby';
import * as React from 'react';
import CreateCommunityOne from '../components/community/createCommunityPage1';
import CreateCommunityTwo from '../components/community/CreateCommunityPage2';
import CreateCommunityThree from '../components/community/createCommunityPage3';
import CreateEventOne from '../components/event/createEventPage1';
import CreateEventTwo from '../components/event/createEventPage2';
import EventRegister from '../components/event/Register';
import UpdateEvent from '../components/event/updateEvent';
import UpdateEventTwo from '../components/event/UpdateEvent2';
import Events from '../components/Events';
import Landing from '../components/landing';
import Signin from '../components/signin';
import Signup from '../components/signup';
import Communities from './Explore/Communities';
import ViewEvent from './Explore/CommunityView';

export default function Home() {
  return (
    <div className='divide-y'>
      <Signin />
      <Signup />
      <Landing />
      <Communities />
      <ViewEvent />
      <Events title='Random Title' />
      <EventRegister title='Talking Tech with Ingenium' datetime={new Date()} />
      <CreateCommunityOne />
      <CreateCommunityTwo />
      <CreateCommunityThree />
      <CreateEventOne />
      <CreateEventTwo />
      <UpdateEvent />
      <UpdateEventTwo />
      <Link to='/Settings/SettingsSecurity'>Settings</Link>
    </div>
  );
}
