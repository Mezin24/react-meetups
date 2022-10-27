import { useState, useEffect } from 'react';
import React from 'react';
import MeetupList from '../components/meetups/MeetupList';

const AllMeetups = () => {
  const [meetups, setMeetups] = useState([]);
  const [loading, setloading] = useState(false);

  const fetchMeetups = async () => {
    const response = await fetch('http://localhost:5000/meetups');
    const data = await response.json();
    return data;
  };

  useEffect(() => {
    setloading(true);
    fetchMeetups().then((data) => {
      setloading(false);
      setMeetups(data);
    });
  }, []);

  if (loading) {
    return <div className='loading'></div>;
  }

  return (
    <section>
      <h1>AllMeetups</h1>
      {meetups.length > 0 ? (
        <MeetupList meetups={meetups} />
      ) : (
        <p>No Meetups Yet</p>
      )}
    </section>
  );
};

export default AllMeetups;
