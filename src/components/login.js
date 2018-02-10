import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import {loginUser} from '../actions/index';
import {browserHistory} from 'react-router';

class Login extends Component {


    componentDidUpdate(){
        // if (this.props.data.login && this.props.data.login == 'true') {
        //     browserHistory.push('/resources');
        // }
    }
    render() {

        const {fields: {username,password},handleSubmit} = this.props;
            return(
                <div>
                    <div className="row">
                        <div className="col-sm-12">
                            <h1>Login</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="brick-desktop brick-desktop--lg btm20">
                        <form name="login_form" method="post" id="login_form"  className="form-horizontal" onSubmit={handleSubmit(this.props.loginUser)}>
                            <div className="form-group ">
                                <label className="col-sm-2 control-label required" htmlFor="login_form_email" aria-required="true">Email:</label>
                                    <div className="col-sm-10">
                                        <div className="input-group">
                                            <span className="input-group-addon"><i className="fa fa-user fa-fw"></i></span>
                                                <input type="text" id="login_form_email" name="login_form[email]" required="required" className="form-control" aria-required="true" {...username}/>
                                        </div>
                                    </div>
                                    <div className="col-sm-offset-2 col-sm-10"></div>
                            </div>
                            <div className="form-group ">
                                <label className="col-sm-2 control-label required" htmlFor="login_form_password" aria-required="true">Password:</label>
                                    <div className="col-sm-10">
                                        <div className="input-group">
                                            <span className="input-group-addon"><i className="fa fa-lock fa-fw"></i></span>
                                            <input type="password" id="login_form_password" name="login_form[password]" required="required" className="form-control" aria-required="true" {...password}/>
                                        </div>
                                    </div>
                                    <div className="col-sm-offset-2 col-sm-10">
                            </div>
                        </div>
                        <div className="login-footer form-group">
                            <div className="col-xs-12 col-sm-offset-2 col-sm-5">
                                <div className="checkbox">
                                    <label><input type="checkbox" id="show-password"/>Show password</label>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-5">
                                <div className="checkbox text-right">
                                    <a href="/forgotten-password.html">Forgotten your password?</a>
                                </div>
                            </div>
                        </div>
                        <div className="form-group margin0">
                            <div className="col-xs-12 col-sm-offset-2 col-sm-10">
                                <button id="login_form_submit" className="btn btn-lg btn-primary" type="submit" name="send">
                                    Log in
                                </button>
                            </div>
                        </div>
                        </form>
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
export default reduxForm({
    form: 'LoginForm',
    fields: ['username','password'],
},mapStateToProps,{loginUser})(Login);
