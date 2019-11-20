import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {Switch, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {store} from './redux/store';

import {getMovies} from './api/movies';
import {saveAllMovies} from './redux/movieReducer';

import {PrivateRoute} from './customRoutes/privateRoute';
import {Forbidden} from './screens/Forbidden';
import {Main} from './screens/Main';
import {Stats} from './screens/Stats';
import {Cart} from './components/Cart/Cart';

import logo from './images/hackflix_logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.css';
import './styles/Header.css';

function App() {
  /* 
    When the app is shown on the screen, call the function getMovies to get all the movies and put them in the redux store
  */

  /*
    Below the header create 3 routes:
    "/" will display the Main component
    "/stats" will display the Stats component, but can only be seen if the user is logged in, if not the user should be redirected to the "/forbidden" page
    "/forbidden" will display the Forbidden component
  */

  return (
    <>
      <header>
        <img src={logo} alt="logo" />
      </header>

      <Cart />
    </>
  );
}

/*
  Wrap the App in the Redux provider and the Router
*/

export default () => <App />;
