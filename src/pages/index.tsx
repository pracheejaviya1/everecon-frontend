import { Link } from 'gatsby';
import * as React from 'react';
import CreateCommunityOne from '../components/community/createCommunityPage1';
import CreateCommunityTwo from '../components/community/CreateCommunityPage2';
import CreateCommunityThree from '../components/community/createCommunityPage3';
import Landing from '../components/community/landing';
import CreateEventOne from '../components/event/createEventPage1';
import CreateEventTwo from '../components/event/createEventPage2';
import UpdateEventTwo from '../components/event/UpdateEvent2';

export default function Home() {
  return (
    <div className='divide-y'>
      <CreateCommunityOne />
      <CreateCommunityTwo />
      <CreateCommunityThree />
      <CreateEventOne />
      <CreateEventTwo />
      <UpdateEventTwo details='Lorem Ipsum' />
      <Link to='/Settings/SettingsAccount'>Settings</Link>
      <Link to='/Settings/SettingsSecurity'>Setting</Link>
      <Landing />
    </div>
  );
}
