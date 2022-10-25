import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AllMeetups from './pages/AllMeetups';
import FavoritesMeetups from './pages/FavoritesMeetups';
import NewMeetup from './pages/NewMeetup';
import Layout from './components/layout/Layout';

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <AllMeetups />
        </Route>
        <Route path='/new-meetup'>
          <NewMeetup />
        </Route>
        <Route path='/favorites'>
          <FavoritesMeetups />
        </Route>
      </Switch>
    </Layout>
  );
};

export default App;
