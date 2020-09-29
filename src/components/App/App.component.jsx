import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AuthProvider from '../../providers/Auth';
import HomePage from '../../pages/Home';
import VideoDetailsPage from '../../pages/VideoDetails';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import SecretPage from '../../pages/Secret';
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
            <FavoritesPage />
          </Private>
          <Route exact path="/:id">
            <VideoDetailsPage />
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
