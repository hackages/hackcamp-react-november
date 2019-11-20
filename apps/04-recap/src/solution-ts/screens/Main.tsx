import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import filters from '../mocks/filters.json';
import {FilterItems} from '../components/Filter/FilterItems';
import {AppState} from '../redux/store';
import {MovieType} from '../movieType';
import {Movie} from '../../solution/components/Movie/Movie';

export const Main = () => {
  const [selectedFilter, setSelectedFilter] = useState(filters[0]);
  const [navClosed, setNavClosed] = useState(true);
  const [search, setSearch] = useState('');

  const movies = useSelector<AppState, MovieType[]>(
    state => state.movieReducer.movies
  );

  const filteredMovies = movies
    .filter(
      movie => selectedFilter === 'All' || movie.genres.includes(selectedFilter)
    )
    .filter(
      movie =>
        !search || movie.title.toLowerCase().includes(search.toLowerCase())
    );

  let className = 'gallery';
  if (!navClosed) {
    className += ' filter-is-visible';
  }
  return (
    <main className="main-content">
      {/* Filters */}
      <div className="tab-filter-wrapper">
        <div className="tab-filter">
          <FilterItems
            counter={filteredMovies.length}
            filters={filters}
            selectedFilter={selectedFilter}
            selectTab={setSelectedFilter}
          />
        </div>
      </div>

      {/* Movie list */}
      <section className={className}>
        {filteredMovies.map(movie => (
          <Movie key={movie.id} data={movie} />
        ))}
      </section>

      {/* Sidebar search */}
      <div>
        <div className={!navClosed ? 'filter filter-is-visible' : 'filter'}>
          <form onSubmit={e => e.preventDefault()}>
            <div className="filter-block">
              <h4>Search</h4>
              <div className="filter-content">
                <input
                  type="search"
                  placeholder="title"
                  onChange={({target: {value}}) => setSearch(value)}
                />
              </div>
            </div>
          </form>
          <span
            className="hand-cursor close-f"
            onClick={() => setNavClosed(true)}
          >
            Close
          </span>
        </div>

        <span
          className="hand-cursor filter-trigger"
          onClick={() => setNavClosed(c => !c)}
        >
          Filters
        </span>
      </div>
    </main>
  );
};
