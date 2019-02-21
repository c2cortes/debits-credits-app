import React, { Component } from 'react';
import { connect } from 'react-redux';

class MovementComponent extends Component {

	constructor(props) {
		super(props);
		this.state = {
		}
	}

	renderItem() {
		return <div className="card border-dark mb-3">
					<div className="card-header">
						<div className="row">
							<div className="col-lg-8 col-md-8 col-sm-8 movement-description-label">
								{this.props.item.description}:
							</div>
							<div className="col-lg-4 col-md-4 col-sm-4 movement-amount-label">
								${this.props.item.amount}
							</div>
						</div>
					</div>
				</div>
	}

	render() {
		return (this.props.item.type === this.props.type ? this.renderItem() : null)
	}
}

function mapStateToProps(state) {
	return {}
}

export default connect(mapStateToProps)(MovementComponent);