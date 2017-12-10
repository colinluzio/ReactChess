import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchArchive} from '../actions/archive';
import { GetBestWins } from '../helpers/game_helpers'

class Archive extends Component{

    constructor(props){
        super(props);
    }
    fetchArchive(user,event){
        event.preventDefault();
        this.props.fetchArchive(user);
    }

    render(){
        var user = {};
        var wins = [];
        if(this.props.data.user){
            user = this.props.data.user[0].username;
        }
        if(this.props.data.archive){
            wins = GetBestWins(this.props.data.archive[0],user);
        }
        console.log(wins);
        return(
            <div>
                <div className = "row">
                    <div className="col-xs-12">
                        <button type="button" className="btn btn-primary" onClick={this.fetchArchive.bind(this, user)}>Fetch Archive</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                    {wins.length > 0 ? (
                        <table className="table table-striped">
                           <thead>
                             <tr>
                               <th>User</th>
                               <th>Rating</th>
                               <th>Played as</th>
                             </tr>
                           </thead>
                           <tbody>
                               {wins.map(function(item,i){
                                  return <tr key={i}><td>{item.opponent}</td><td>{item.rating}</td><td>{item.color}</td></tr>
                               })}
                           </tbody>
                           </table>
                ) : (<div>No wins for that user!</div>)}
                    </div>
                </div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchArchive},dispatch);
}
function mapStateToProps(data){
    return {data};
}

export default connect(mapStateToProps,mapDispatchToProps)(Archive);
