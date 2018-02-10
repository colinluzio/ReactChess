import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import SideMenu from '../components/side_menu';
import {fetchUserGames} from '../actions/index';
import {setUser} from '../actions/user';


class Profile extends Component{

    constructor(props){
        super(props);
        console.log(this.props);
    }
    static contextTypes = {
        router: React.PropTypes.object
    }
    componentWillMount(){
        if(!this.props.params.splat){
            this.context.router.push('/');
        }
        let user = this.props.params.splat;
        this.props.setUser(user);
    }
    render(){
        var avatar = 'http://via.placeholder.com/200x200';
        var userData = this.props.data.user[0];
        if(userData.avatar){
            avatar = userData.avatar;
        }

        return(
            <div className="row">
                <div className="col-xs-12">
                    <SideMenu/>
                    <div className="container-fluid">
                        <div className="side-body">
                           <h1> Main Content here </h1>

                        </div>
                    </div>
                </div>
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

export default connect(mapStateToProps,mapDispatchToProps)(Profile);
