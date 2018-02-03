import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import GamesList from '../containers/games_list';
import Profile from  '../containers/profile';
import Archive from  '../containers/archive';
import Form from './form';

export default class App extends Component {
  render() {
    return (
      <div>
        <Form/>
        <SearchBar/>
        <Profile/>
        <GamesList/>
        <Archive/>
      </div>
    );
  }
}
