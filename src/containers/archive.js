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
            wins = GetBestWins(this.props.data.archive[0]);
        }

        return(
            <div>
                <div className = "row">
                    <div className="col-xs-12">
                        <button type="button" className="btn btn-primary" onClick={this.fetchArchive.bind(this, user)}>Fetch Archive</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12">

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
