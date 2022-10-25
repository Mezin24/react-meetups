import React from 'react';
import { DUMMY_DATA } from '../data';
import MeetupList from '../components/meetups/MeetupList';

const AllMeetups = () => {
  return (
    <section>
      <h1>AllMeetups</h1>
      <MeetupList meetups={DUMMY_DATA} />
    </section>
  );
};

export default AllMeetups;
