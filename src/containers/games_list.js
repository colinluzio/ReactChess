import React, {Component} from 'react';
import {connect} from 'react-redux';

class GamesList extends Component{
    renderGames(gameData){
        return(
            <tr>
                <td>{gameData.white.substring(gameData.white.lastIndexOf("/") + 1)}</td>
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
                {this.props.games.games[0].map(this.renderGames)}
            </tbody>
            </table>
        )
    }
}

function mapStateToProps(games){
    return {games};
}

export default connect(mapStateToProps)(GamesList);