import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchUserGames} from '../actions/index';
import {setUser} from '../actions/user';


class GamesList extends Component{

    constructor(props){
        super(props);
        this.state = {term: '',user:this.props.user};
    }
    componentWillMount()
    {
        this.props.fetchUserGames(this.state.user);
    }
    renderGames(user,gameData){
        var white = gameData.white.substring(gameData.white.lastIndexOf("/") + 1);
        var user  = (user == white ? gameData.black.substring(gameData.black.lastIndexOf("/") + 1) : white);
        return(
            <tr key={gameData.url.substring(gameData.url.lastIndexOf("/") + 1)}>
                <td><a href="#">{user}</a></td>
            </tr>
        )
    }

    render(){
        var games = this.props.data.games[0];
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
                        {this.props.data.games[0].map(this.renderGames.bind(this, this.props.data.user[0].username))}
                    </tbody>
                </table>
            ) : (<div className="games-empty">No current games found</div>)}
            </div>
        )
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchUserGames,setUser},dispatch);
}
function mapStateToProps(data){
    return {data};
}

export default connect(mapStateToProps,mapDispatchToProps)(GamesList);
