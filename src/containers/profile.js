import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import SideMenu from '../components/side_menu';
import {getCountry} from '../helpers/profile_helper';
import {fetchUserGames} from '../actions/index';
import {setUser} from '../actions/user';


class Profile extends Component{

    constructor(props){
        super(props);
        this.state = {userData : {}};
    }
    static contextTypes = {
        router: React.PropTypes.object
    }
    componentWillMount(){
        if(!this.props.params.splat){
            this.context.router.push('/');
        }
        let user = this.props.params.splat;
        this.setState({user:user});
        this.props.setUser(user);
        console.log(this.props);
    }
    componentWillReceiveProps(nextProps){
        let userData = nextProps.data.user[0];
        let user     = this.mapProfileData(userData);
        this.setState({userData: user});
    }
    mapProfileData(userData){
        let data = {};
        data.avatar         = (userData.avatar ? userData.avatar : 'http://via.placeholder.com/200x200');
        data.name           = (userData.name ? userData.name : '');
        data.country        = (userData.country ? getCountry(userData.country) : '');
        data.location       = (userData.location ? userData.location : '');
        data.joined         = (userData.joined ? userData.joined : '');
        data.last_online    = (userData.last_online ? userData.last_online : '');

        return data;

    }
    render(){

        return(
            <div className="row">
                <div className="col-xs-12">
                    <SideMenu/>
                    <div className="container-fluid">
                        <div className="side-body">
                            <div className="row">
                                <div className="col-xs-12">
                                    <h1>Profile for {this.state.user}</h1>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    <img src={this.state.userData.avatar}/>
                                </div>
                                <div className="col-md-8">
                                    <table id="profile">
                                        <tbody>
                                            <tr>
                                                <td className="profile-left">Name:</td><td>{this.state.userData.name}</td>
                                            </tr>
                                            <tr>
                                                <td className="profile-left">Country:</td><td><span className={"flag-icon flag-icon-"+this.state.userData.country}></span></td>
                                            </tr>
                                            <tr>
                                                <td className="profile-left">Location:</td><td>{this.state.userData.location}</td>
                                            </tr>
                                            <tr>
                                                <td className="profile-left">Member since:</td><td>{this.state.userData.joined}</td>
                                            </tr>
                                            <tr>
                                                <td className="profile-left">Last online</td><td>{this.state.userData.last_online}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
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
