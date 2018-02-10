import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchUserGames} from '../actions/index';
import {setUser} from '../actions/user';

class SearchBar extends Component{

    constructor(props){
        super(props);
        this.state = {term: ''};
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit  = this.onFormSubmit.bind(this);
    }
    onInputChange(event){
        this.setState({term: event.target.value});
    }
    onFormSubmit(event){
        event.preventDefault();
        this.props.fetchUserGames(this.state.term);
        this.props.setUser(this.state.term);
        this.setState({term: ''});
    }
    render(){
        return(
            <div id="search" className="panel-collapse collapse">
                <div className="panel-body">
                    <form className="navbar-form" role="search" onSubmit={this.onFormSubmit}>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Search" value={this.state.term}
                            onChange={this.onInputChange}/>
                        </div>
                        <button type="submit" className="btn btn-default "><span className="glyphicon glyphicon-ok"></span></button>
                    </form>
                </div>
            </div>
    )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchUserGames,setUser},dispatch);
}

export default connect(null,mapDispatchToProps)(SearchBar);
