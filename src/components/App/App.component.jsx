import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AuthProvider from '../../providers/Auth';
import FavProvider from '../../providers/Favorites/';
import HomePage from '../../pages/Home';
import VideoDetailsPage from '../../pages/VideoDetails';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import FavoritesPage from '../../pages/Favorites';
import Private from '../Private';
import Fortune from '../Fortune';
import Layout from '../Layout';
import MainMenu from '../MainMenu/MainMenu';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <MainMenu />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/login">
            <Layout>
              <LoginPage />
              <Fortune />
            </Layout>
          </Route>
          <Private exact path="/favorites">
            <FavProvider>
              <FavoritesPage />
            </FavProvider>
          </Private>
          <Route exact path="/:id">
            <FavProvider>
              <VideoDetailsPage />
            </FavProvider>
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
