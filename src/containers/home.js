import React, { Component } from 'react';

class Home extends Component {

	constructor(props){
		super(props);
		
		this.state = {
			topFive: [
                {
                    name: 'grahamcampbell'
                },
                {
                    name: 'fabpot'
                },
                {
                    name: 'weierophinney'
                },
                {
                    name: 'rkh'
                },
                {
                    name: 'josh'
                }
            ]
		}
	}

	onSuccessStored(){
		this.hideTodoFormComponent();
	}	

	renderHeader(){
		return(
		<div className="card border-dark mb-3">
            <div className="row">
                    <div className="col-md-12">
                        <h1 className="main-title">Home</h1>
                        <hr/>
                    </div>
                </div>
			<div className="card-header">
				<div className="row">
					<div className="col-lg-10 col-md-10 col-sm-10">
						<h4 className="movement-title-list">Top 5 Github users</h4>
                        <h6 className="movement-title-list">Tap the user to see more information</h6>
					</div>
				</div>
					
			</div>
		</div>
		)
    }

    renderUserItem(item) {
		return <div className="card border-dark mb-3" onClick={ () => this.props.showUserProfile(item) }>
					<div className="card-header">
						<div className="row">
							<div className="col-lg-8 col-md-8 col-sm-8 movement-description-label">
								{item.name}
							</div>
						</div>
					</div>
				</div>
	}

	render(){
		return(
			<div className="main-container">
				{ this.renderHeader() }
                <div>
                    { this.state.topFive.map((item, id) => { return this.renderUserItem(item) }) }
                </div>
			</div>
		)
	}
}

export default Home;