import React, {useEffect, useCallback} from 'react';
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
  const dispatch = useDispatch();
  const memoizedDispatch = useCallback(action => dispatch(action), [dispatch]);

  useEffect(() => {
    async function getData() {
      const movies = await getMovies();
      memoizedDispatch(saveAllMovies(movies));
    }

    getData();
  }, [memoizedDispatch]);

  return (
    <>
      <header>
        <img src={logo} alt="logo" />
      </header>
      <Switch>
        <Route exact path="/" component={Main} />
        <PrivateRoute path="/stats" component={Stats} />
        <Route path="/forbidden" component={Forbidden} />
      </Switch>
      <Cart />
    </>
  );
}

export default () => (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
