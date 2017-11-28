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
        <form onSubmit={this.onFormSubmit} className ="input-group">
            <input placeholder="Search members by username" className = "form-control" value={this.state.term}
            onChange={this.onInputChange}/>
            <span className="input-group-btn">
                <button type="submit" className="btn btn-secondary">Submit</button>
            </span>
        </form>
    )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchUserGames,setUser},dispatch);
}

export default connect(null,mapDispatchToProps)(SearchBar);
