import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginUser } from "../../api/auth";
import { login, logout } from "../../redux/authReducer";
import { Link } from "react-router-dom";

const performLogin = dispatchLogin => {
  loginUser().then(response => {
    dispatchLogin(response.data.token);
  });
};

export const FilterItems = ({
  filters,
  selectTab,
  counter,
  selectedFilter
}) => {
  const loggedIn = useSelector(state => state.authReducer.loggedIn);

  const dispatch = useDispatch();

  const dispatchLogin = token => dispatch(login(token));
  const dispatchLogout = () => dispatch(logout());

  return (
    <div className="filters">
      <ul className="filters-list">
        {filters.map(filter => (
          <li key={filter} onClick={() => selectTab(filter)}>
            <span className={selectedFilter === filter ? "selected" : ""}>
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
          <Link to="/stats">Stats</Link>
        </li>
        <li>
          <span
            className="hand-cursor"
            onClick={() =>
              loggedIn ? dispatchLogout() : performLogin(dispatchLogin)
            }
          >
            {loggedIn ? "Log out" : "Login"}
          </span>
        </li>
      </ul>
    </div>
  );
};