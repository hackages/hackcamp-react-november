import React from "react";
import { useSelector } from "react-redux";

export const Stats = ({ history }) => {
  const movies = useSelector(state => state.movieReducer.movies);

  const moviesStats = movies.filter(movie => movie.vote_average >= 8);

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="stats">
            <h2>Movies that are rated more than 8/10</h2>
            <table className="table table-inverse table-striped">
              <thead>
                <tr>
                  <th>Movie</th>
                  <th>Rating</th>
                </tr>
              </thead>
              <tbody>
                {moviesStats.map(movie => (
                  <tr key={movie.id}>
                    <td>{movie.title}</td>
                    <td>{movie.vote_average}/10</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button className="btn" onClick={history.goBack}>
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
