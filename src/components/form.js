import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import {registerUser} from '../actions/index';
import {Login} from './login';
import Register from './register';

export default class Form extends Component {

    render() {

        return(
            <div>
                <ul className="nav nav-tabs">
                    <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#login">Login</a></li>
                    <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#register">Register</a></li>
                </ul>

                <div className="tab-content">
                    <div id="login" className="tab-pane fade in active">

                    </div>
                    <div id="register" className="tab-pane fade">jhjh
                        <Register/>
                    </div>
                </div>
            </div>
        )
    }
}
