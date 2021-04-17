import { Link } from 'gatsby';
import * as React from 'react';
import CreateCommunityOne from '../components/community/createCommunityPage1';
import CreateCommunityTwo from '../components/community/CreateCommunityPage2';
import CreateCommunityThree from '../components/community/createCommunityPage3';
import CreateEventOne from '../components/event/createEventPage1';
import CreateEventTwo from '../components/event/createEventPage2';
import EventRegister from '../components/event/eventComponents/Register';
import UpdateEventTwo from '../components/event/UpdateEvent2';
import Communities from './Explore/Communities';
import ExploreEvents from './Explore/Events';
import ViewEvent from './View/ViewEvent';

export default function Home() {
  return (
    <div className='divide-y'>
      {/* <Communities />
      <ExploreEvents /> */}
      {/* <ViewEvent />
      <EventRegister title='Talking Tech with Ingenium' datetime={new Date()} /> */}
      <CreateCommunityOne />
      <CreateCommunityTwo />
      <CreateCommunityThree />
      <CreateEventOne />
      <CreateEventTwo />
      <UpdateEventTwo />
      <Link to='/Settings/SettingsAccount'>Settings</Link>
      <Link to='/Settings/SettingsSecurity'>Setting</Link>
    </div>
  );
}
