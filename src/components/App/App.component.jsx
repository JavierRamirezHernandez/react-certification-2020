import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AuthProvider from '../../providers/Auth';
import HomePage from '../../pages/Home';
import VideoDetailsPage from '../../pages/VideoDetails';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import SecretPage from '../../pages/Secret';
import Private from '../Private';
import Fortune from '../Fortune';
import Layout from '../Layout';
import MainMenu from '../MainMenu/MainMenu';
// import { random } from '../../utils/fns';

function App() {
  // useLayoutEffect(() => {
  //   const { body } = document;

  //   function rotateBackground() {
  //     const xPercent = random(100);
  //     const yPercent = random(100);
  //     body.style.setProperty('--bg-position', `${xPercent}% ${yPercent}%`);
  //   }

  //   const intervalId = setInterval(rotateBackground, 3000);
  //   body.addEventListener('click', rotateBackground);

  //   return () => {
  //     clearInterval(intervalId);
  //     body.removeEventListener('click', rotateBackground);
  //   };
  // }, []);

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
          <Route exact path="/:id">
            <VideoDetailsPage />
          </Route>
          <Private exact path="/secret">
            <SecretPage />
          </Private>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
