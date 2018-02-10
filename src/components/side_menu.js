import React, {Component} from 'react';
import SearchBar from '../containers/search_bar';

export default class SideMenu extends Component {

    componentWillMount(nextProps){
        let user = this.props.current;
        this.setState({user: user});
    }
    render() {
        return(
            <div className="side-menu">
                <nav className="navbar navbar-default" role="navigation">
                    <div className="navbar-header">
                        <div className="brand-wrapper">
                            <button type="button" className="navbar-toggle">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <div className="brand-name-wrapper">
                                <a className="navbar-brand" href="#">
                                    Players
                                </a>
                            </div>
                            <a data-toggle="collapse" href="#search" className="btn btn-default" id="search-trigger">
                                <span className="glyphicon glyphicon-search"></span>
                            </a>
                            <SearchBar/>
                        </div>
                    </div>
                    <div className="side-menu-container">
                        <ul className="nav navbar-nav">
                            <li><a href={"/profile/" +this.state.user}><span className="glyphicon glyphicon-send"></span> Profile</a></li>
                            <li className="active"><a href="#"><span className="glyphicon glyphicon-plane"></span> Active Link</a></li>
                            <li><a href="#"><span className="glyphicon glyphicon-cloud"></span> Link</a></li>
                            <li className="panel panel-default" id="dropdown">
                                <a data-toggle="collapse" href="#dropdown-lvl1">
                                    <span className="glyphicon glyphicon-user"></span> Sub Level <span className="caret"></span>
                                </a>
                                <div id="dropdown-lvl1" className="panel-collapse collapse">
                                    <div className="panel-body">
                                        <ul className="nav navbar-nav">
                                            <li><a href="#">Link</a></li>
                                            <li><a href="#">Link</a></li>
                                            <li><a href="#">Link</a></li>
                                            <li className="panel panel-default" id="dropdown">
                                                <a data-toggle="collapse" href="#dropdown-lvl2">
                                                    <span className="glyphicon glyphicon-off"></span> Sub Level <span className="caret"></span>
                                                </a>
                                                <div id="dropdown-lvl2" className="panel-collapse collapse">
                                                    <div className="panel-body">
                                                        <ul className="nav navbar-nav">
                                                            <li><a href="#">Link</a></li>
                                                            <li><a href="#">Link</a></li>
                                                            <li><a href="#">Link</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li><a href="#"><span className="glyphicon glyphicon-signal"></span> Link</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}
