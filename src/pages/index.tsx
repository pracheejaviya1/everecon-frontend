import * as React from 'react';
import CreateCommunityTwo from '../components/community/CreateCommunityPage2';
import CreateCommunityThree from '../components/community/createCommunityPage3';
import Signin from './Signin/signin';

export default function Home() {
  return (
    <div>
      <Signin />
      <CreateCommunityTwo />
      <CreateCommunityThree />
    </div>
  );
}
