import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchArchive} from '../actions/archive';
import SideMenu from '../components/side_menu';
import ReactPaginate from 'react-paginate';
import { GetBestWins } from '../helpers/game_helpers';
import {lodash} from 'lodash';

class Archive extends Component{

    constructor(props){
        super(props);

        this.state = {
            total: 10,
            activePage: 0,
            wins : []
        };
    }
    static contextTypes = {
        router: React.PropTypes.object
    }
    componentWillMount(){
        if(!this.props.params.splat){
            this.context.router.push('/');
        }
        let user = this.props.params.splat;
        console.log(user);
        this.setState({user:user});

        this.props.fetchArchive(user);
    }

    componentDidUpdate(){
        let wins = (this.props.data.archive ? GetBestWins(this.props.data.archive[0],this.state.user).slice((this.state.activePage * this.state.total),(this.state.activePage * this.state.total)+this.state.total) : []);

        let currentWins = this.state.wins;
        let currentUser = this.state.user;

        if(!_.isEqual(wins, currentWins) && wins.length > 0){
            this.setState({wins: wins});
        }

    }
    handlePageClick (data) {
        this.setState({activePage: data.selected});
   };
    render(){

        return(
            <div>
                <div className="row">
                    <div className="col-xs-12">
                    {this.state.wins.length > 0 ? (

                        <div className="row">
                            <div className="col-xs-12">
                                <SideMenu />
                                <div className="container-fluid">
                                    <div className="side-body">
                                        <div className="row">
                                            <div className="col-xs-12">
                                                <h1>Archive for {this.state.user}</h1>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-xs-12">
                                                <div>
                                                    <table className="table table-striped">
                                                       <thead>
                                                         <tr>
                                                           <th>User</th>
                                                           <th>Rating</th>
                                                           <th>Played as</th>
                                                         </tr>
                                                       </thead>
                                                       <tbody>
                                                           {this.state.wins.map(function(item,i){
                                                              return <tr key={i}><td><a href={"/profile/"+item.opponent}>{item.opponent}</a></td><td>{item.rating}</td><td>{item.color}</td></tr>
                                                           })}
                                                       </tbody>
                                                    </table>
                                                </div>
                                                <div>
                                                <ReactPaginate previousLabel={"previous"}
                                                           nextLabel={"next"}
                                                           breakLabel={<a href="">...</a>}
                                                           breakClassName={"break-me"}
                                                           pageCount={20}
                                                           marginPagesDisplayed={2}
                                                           pageRangeDisplayed={5}
                                                           onPageChange={this.handlePageClick.bind(this)}
                                                           containerClassName={"pagination"}
                                                           subContainerClassName={"pages pagination"}
                                                           activeClassName={"active"} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

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
