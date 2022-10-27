import NewMeetupForm from '../components/meetups/NewMeetupForm';
import { useHistory } from 'react-router-dom';

const NewMeetup = () => {
  const history = useHistory();

  const addNewMeetup = (newMeetup) => {
    fetch('http://localhost:5000/meetups', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newMeetup),
    }).then(() => history.replace('/'));
  };

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddNewMeetup={addNewMeetup} />
    </section>
  );
};

export default NewMeetup;
