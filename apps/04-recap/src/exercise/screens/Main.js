import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import filters from '../mocks/filters.json';
import {FilterItems} from '../components/Filter/FilterItems';
import {Movie} from '../components/Movie/Movie';

export const Main = () => {
  const [selectedFilter, setSelectedFilter] = useState(filters[0]);
  const [navClosed, setNavClosed] = useState(true);
  const [search, setSearch] = useState('');

  // TODO: Get the movies from the state
  const movies = [];

  /*
    Filter the movies first by the selected filter: 
      - If the selectedFilter === 'All' or the movies.genres includes the selectedFilter 
    Then filter them by the search:
      - If the user has not typed anything dont filter anything
      - Otherwise filter the title of the movie by the search
  */
  const filteredMovies = movies;

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
        {/*
          Map over the filteredMovies array and display the Movie component. 
          Give the Movie component a props called 'data' with the movie
        */}
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
                  onChange={({target: {value}}) =>
                    /* Set the search value to the input */ null
                  }
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
