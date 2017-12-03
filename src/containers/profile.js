import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {setUser} from '../actions/user';


class Profile extends Component{

    constructor(props){
        super(props);
    }

    render(){
        var avatar = 'http://via.placeholder.com/200x200';
        var userData = this.props.data.user[0];

        if(userData.avatar){
            avatar = userData.avatar;
        }

        return(
            <div>
                <div className = "row">
                    <div className = "col-md-4">
                        <img src={avatar}/>
                    </div>
                    <div className = "col-md-8">
                        <div className="row">
                            <div className = "col-xs-12">
                                {userData.username}
                            </div>
                        </div>
                        <div className="row">
                            <div className = "col-xs-12">
                                {userData.name}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(data){
    return {data};
}

export default connect(mapStateToProps)(Profile);
