import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import GamesList from '../containers/games_list';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar/>
        <GamesList/>
      </div>
    );
  }
}
