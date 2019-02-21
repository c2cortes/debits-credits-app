import React, { Component } from 'react';
import { connect } from 'react-redux';

class MovementComponent extends Component {

	constructor(props){
		super(props);
		this.state = {
		}
	}

	renderItem(){
		return <div
							className="card border-dark mb-3"
							id={this.props.id}
						>
							<div className="card-header">
								<div>{this.props.item.concept}</div>
								<div className="trash-button">
									{this.state.button}
								</div>
							</div>
							<div className="card-body text-dark">
								{this.state.tasks}
							</div>
						</div>
	}

	render(){
		return(this.props.item.type === this.props.type ? this.renderItem() : null)
	}
}

function mapStateToProps(state){
	return {}
}

export default connect(mapStateToProps)(MovementComponent);