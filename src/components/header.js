import React, {Component} from 'react';
import  {Link} from 'react-router';
import Form from  './form';

export default class Header extends Component{
    render(){
        return (
            <nav className="navbar navbar-inverse bg-inverse">
                <ul className="nav navbar-nav">
                    <li className="nav-item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/resources">Resources</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/login" component={Form}>Login/Register</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}
