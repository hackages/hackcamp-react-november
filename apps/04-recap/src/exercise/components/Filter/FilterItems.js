import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {loginUser} from '../../api/auth';
import {login, logout} from '../../redux/authReducer';
import {Link} from 'react-router-dom';

const performLogin = dispatchLogin => {
  loginUser().then(response => {
    dispatchLogin(response.data.token);
  });
};

export const FilterItems = ({filters, selectTab, counter, selectedFilter}) => {
  // TODO: Take the logged in state from the store
  const loggedIn = false;

  // TODO: Dispatch the login action to the store
  const dispatchLogin = token => null;

  // TODO: Dispatch the logout action to the store
  const dispatchLogout = () => null;

  return (
    <div className="filters">
      <ul className="filters-list">
        {filters.map(filter => (
          <li key={filter} onClick={() => selectTab(filter)}>
            <span className={selectedFilter === filter ? 'selected' : ''}>
              {filter}
            </span>
          </li>
        ))}
      </ul>
      <ul className="misc">
        <li className="counter">
          <span>{counter}</span>
        </li>

        <li>
          <a href="/stats">Stats</a>
        </li>
        <li>
          <span
            className="hand-cursor"
            onClick={() =>
              loggedIn ? dispatchLogout() : performLogin(dispatchLogin)
            }
          >
            {loggedIn ? 'Log out' : 'Login'}
          </span>
        </li>
      </ul>
    </div>
  );
};
