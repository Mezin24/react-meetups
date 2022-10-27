import { useRef } from 'react';
import Card from '../UI/Card';
import classes from './NewMeetupForm.module.css';

const NewMeetupForm = () => {
  const titleRef = useRef();
  const imageRef = useRef();
  const addressRef = useRef();
  const descriptionRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = titleRef.current.value;
    const image = titleRef.current.value;
    const address = titleRef.current.value;
    const description = titleRef.current.value;

    const newMeetup = {
      title,
      image,
      address,
      description,
    };

    console.log(newMeetup);
  };

  return (
    <Card>
      <form className={classes.form} onSubmit={handleSubmit}>
        <div className={classes.control}>
          <label htmlFor='title'>Meetup Title</label>
          <input type='text' required id='title' ref={titleRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='image'>Meetup Image</label>
          <input type='url' required id='image' ref={imageRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='address'>Address</label>
          <input type='text' required id='address' ref={addressRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='description'>Description</label>
          <textarea
            type='text'
            required
            id='description'
            rows='5'
            ref={descriptionRef}
          />
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
};

export default NewMeetupForm;
