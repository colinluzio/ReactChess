import React, {Component} from 'react';
import SearchBar from '../containers/search_bar';
import GamesList from '../containers/games_list';
import Profile from  '../containers/profile';
import Archive from  '../containers/archive';
import{Router, Route, browserHistory} from 'react-router';

export default class Resources extends Component{
    render(){
        return (
            <div>
                <SearchBar/>
                <Profile/>
                <GamesList/>
            </div>
        )
    }
}
