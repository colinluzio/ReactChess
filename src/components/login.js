import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import {loginUser} from '../actions/index';
import {browserHistory} from 'react-router';

class Login extends Component {


    componentDidUpdate(){
        if (this.props.data.login && this.props.data.login == 'true') {
            browserHistory.push('/resources');
        }
    }
    render() {

        const {fields: {username,password},handleSubmit} = this.props;
            return(
                <div>
                    <form onSubmit={handleSubmit(this.props.loginUser)}>
                        <h3>Login</h3>
                        <div className="form-group">
                            <label>UserName</label>
                            <input type="text" className="form-control" {...username}/>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" {...password}/>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
        )
    }
}
function mapStateToProps(data){
    return {data};
}
export default reduxForm({
    form: 'LoginForm',
    fields: ['username','password'],
},mapStateToProps,{loginUser})(Login);
