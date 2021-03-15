import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLocations } from './actions/location';
import MainWrapper from './screens/MainWrapper';


function App() {
  const dispatch = useDispatch();

  dispatch(fetchLocations());

  return (
    <React.Fragment >
      <MainWrapper />
    </React.Fragment>
  );
}

export default App;
