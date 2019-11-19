import React, { Component } from 'react';

class UserProfile extends Component {

	constructor(props){
		super(props);
		
		this.state = {
            name: '',
            location: '',
            picture: ''
        }
        
        this.loadUserInfo = this.loadUserInfo.bind(this);
	}

	onSuccessStored(){
		this.hideTodoFormComponent();
    }	
    
    loadUserInfo() {
        const url = 'https://api.github.com/users/' + this.props.userName;

        fetch(url)
        .then(res => res.json())
        .then(
            (data) => {
                this.setState({name: data.name, location: data.location});
            },
            (error) => {
            this.setState({
                isLoaded: true,
                error
            });
            }
        )
    }

	componentWillMount(){
        this.loadUserInfo();
	}

	renderHeader(){
		return(
		<div className="card border-dark mb-3">
			<div className="card-header">
				<div className="row">
					<div className="col-lg-10 col-md-10 col-sm-10">
						<h4 className="movement-title-list">Person</h4>
					</div>
				</div>
			</div>
		</div>
		)
	}

	render(){
		return(
			<div className="main-container">
				{ this.renderHeader() }
                <div>
                    { this.state.name }
                </div>
			</div>
		)
	}
}

export default UserProfile;