import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

export const App = () => {
  return (
    /** TODO 1 */
    /** Wrap your App in a <BrowserRouter /> Component */
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
      }}
    >
      {/** Optional TODO: Wrap this inside of a <Link /> that points to '/' **/}
      <h2>Home</h2>
      {/**
          TODO 2
          Add a <Route /> for the root '/' that points to the <Cars /> component

          TODO 3:
          Add a <Route /> for the /:id path that points to the <CarDetails /> component


         **/}
    </div>
  );
};
