import React from 'react';
import { Fragment } from 'react';
import  {CardList}  from './components/cards/CardList';
import NavBar from './components/navigation/NavBar';

function App() {
  return (
    <Fragment>
      <NavBar/>
      <CardList/>
    </Fragment>
  );
}

export default App;
