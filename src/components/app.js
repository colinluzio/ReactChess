import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import GamesList from '../containers/games_list';
import Profile from  '../containers/profile';
import Archive from  '../containers/archive';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar/>
        <Profile/>
        <GamesList/>
        <Archive/>
      </div>
    );
  }
}
