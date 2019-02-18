import React, { Component } from 'react';
import { connect } from 'react-redux';

class DebitComponent extends Component {

	constructor(props){
		super(props);
		this.state = {
		}
	}

	render(){
		return(
			<div
				className="card border-dark mb-3"
				id={this.props.id}
			>
			  <div className="card-header">
			  	<div>{this.props.item.name}</div>
			  	<div className="trash-button">
			  		{this.state.button}
			    </div>
			  </div>
			  <div className="card-body text-dark">
			    {this.state.tasks}
			  </div>
			</div>
		)
	}
}

function mapStateToProps(state){
	return {}
}

export default connect(mapStateToProps)(DebitComponent);