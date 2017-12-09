import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class Archive extends Component{

    constructor(props){
        super(props);
    }
    changeUser(user,event){
        event.preventDefault();
    }

    render(){
        var games = this.props.data.games[0];
        return(
            <div>
                <div className = "row">
                    <div className="col-xs-12">
                        <button type="button" className="btn btn-primary">Fetch Archive</button>
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
    return '';
}
function mapStateToProps(data){
    return {data};
}

export default connect(mapStateToProps,mapDispatchToProps)(Archive);
