import React from 'react';
import { Fragment } from 'react';
import  {CardList}  from './components/cards/CardList';
import { FilterBySearch } from './components/filterBySearch/FilterBySearch';
import NavBar from './components/navigation/NavBar';

function App() {
  return (
    <Fragment>
      <NavBar/>
      <CardList/>
      <FilterBySearch/>
    </Fragment>
  );
}

export default App;
