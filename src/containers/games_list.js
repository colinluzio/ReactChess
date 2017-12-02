import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchUserGames} from '../actions/index';
import {setUser} from '../actions/user';


class GamesList extends Component{

    constructor(props){
        super(props);
        this.state = {term: ''};
        this.changeUser = this.changeUser.bind(this);
    }
    changeUser(event){
        console.log(event.target);
    }
    renderGames(user,gameData){
        var white = gameData.white.substring(gameData.white.lastIndexOf("/") + 1);
        var user  = (user == white ? gameData.black.substring(gameData.black.lastIndexOf("/") + 1) : white);
        return(
            <tr key={user}>
                <td><a href="#" onClick={this.changeUser}>{user}</a></td>
            </tr>
        )
    }

    render(){
        var games = this.props.data.games[0]
        return(
            <div>
                {games.length > 0 ? (
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Opponent</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.data.games[0].map(this.renderGames.bind(this, this.props.data.user))}
                    </tbody>
                </table>
            ) : (<div>You have nothing</div>)}
            </div>
        )
    }
}

function mapStateToProps(data){
    return {data};
}

export default connect(mapStateToProps)(GamesList);
