import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchArchive} from '../actions/archive';
import ReactPaginate from 'react-paginate';
import { GetBestWins } from '../helpers/game_helpers'

class Archive extends Component{

    constructor(props){
        super(props);

        this.state = {
            user: '',
            activePage: 0,
            wins : []
        };
    }
    componentDidUpdate(){
        let user = (this.props.data.user ? this.props.data.user[0].username : '');
        let wins = (this.props.data.archive ? GetBestWins(this.props.data.archive[0],this.state.user) : []);
        
        if(wins != this.state.wins && user != this.state.user){
            this.setState({wins: wins,user:user});
        }
    }
    fetchArchive(user,event){
        event.preventDefault();
        this.props.fetchArchive(user);
    }
    handlePageClick (data) {
       //console.log(ReferralMain.props);
       //console.log(this.props);


   };
    render(){

        return(
            <div>
                <div className = "row">
                    <div className="col-xs-12">
                        <button type="button" className="btn btn-primary" onClick={this.fetchArchive.bind(this, this.state.user)}>Fetch Archive</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                    {this.state.wins.length > 0 ? (
                        <div>
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
                                          return <tr key={i}><td>{item.opponent}</td><td>{item.rating}</td><td>{item.color}</td></tr>
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
