import React, {Component} from 'react';
import {connect} from 'react-redux';

class GamesList extends Component{

    renderGames(user,gameData){
        var white = gameData.white.substring(gameData.white.lastIndexOf("/") + 1);
        var user  = (user == white ? gameData.black.substring(gameData.black.lastIndexOf("/") + 1) : white);
        return(
            <tr key={user}>
                <td>{user}</td>
            </tr>
        )
    }

    render(){

        return(
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
        )
    }
}

function mapStateToProps(data){
    return {data};
}

export default connect(mapStateToProps)(GamesList);
