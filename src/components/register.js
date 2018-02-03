import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import {registerUser} from '../actions/index';

class Register extends Component {

    render() {
        const {fields: {name,username,password},handleSubmit} = this.props;
        return(
            <form onSubmit={handleSubmit(this.props.registerUser)}>
                <h3>Register</h3>
                <div className={`form-group ${name.touched && name.invalid ? 'has-danger' : ''}`}>
                    <label>Name</label>
                    <input type="text" className="form-control" {...name}/>
                </div>
                <div className="text-help">
                    {name.touched ? name.error : ''}
                </div>
                <div className={`form-group ${username.touched && username.invalid ? 'has-danger' : ''}`}>
                    <label>UserName</label>
                    <input type="text" className="form-control" {...username}/>
                </div>
                <div className="text-help">
                    {username.touched ? username.error : ''}
                </div>
                <div className={`form-group ${password.touched && password.invalid ? 'has-danger' : ''}`}>
                    <label>Password</label>
                    <input type="password" className="form-control" {...password}/>
                </div>
                <div className="text-help">
                    {password.touched ? password.error : ''}
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">Register</button>
                </div>
            </form>
        )
    }
}
function validate(values){
    const errors ={};

    if(!values.name){
        errors.name = 'Enter a name';
    }
    if(!values.username){
        errors.username = 'Enter a user name';
    }

    if(!values.password){
        errors.password = 'Enter a password';
    }

    return errors;
}

export default reduxForm({
    form: 'RegistrationForm',
    fields: ['name', 'username','password'],
    validate
},null,{registerUser})(Register);
