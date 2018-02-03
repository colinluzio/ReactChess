import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import {registerUser} from '../actions/index';

class Form extends Component {

    render() {
        const {fields: {name,username,password},handleSubmit} = this.props;
        return(
            <form onSubmit={handleSubmit(this.props.registerUser)}>
                <h3>Register</h3>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" {...name}/>
                </div>
                <div className="form-group">
                    <label>UserName</label>
                    <input type="text" className="form-control" {...username}/>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" {...password}/>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">Register</button>
                </div>
            </form>
        )
    }
}

export default reduxForm({
    form: 'RegistrationForm',
    fields: ['name', 'username','password']
},null,{registerUser})(Form);
