import React, { Component } from 'react';
import Home from './containers/home.js';
import UserProfile from './containers/userProfile.js';

export default class App extends Component {

    constructor(props){
		super(props);
		
		this.state = {
			currentSection: 'home'
		}
	}

    showUserProfile(item) {
        this.setState({ currentSection: 'userProfile', userName: item.name })
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                    </div>
                    <div className="col-md-6">
                        { this.state.currentSection == 'home' ? <Home showUserProfile={ (item) => this.showUserProfile(item) }/> : <UserProfile userName={ this.state.userName } /> }
                    </div>
                    <div className="col-md-3">
                    </div>
                </div>
            </div>
        )
    }
}