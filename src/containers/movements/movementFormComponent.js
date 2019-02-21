import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { storeMovement, fetchMovements } from '../../actions/index';
 
class MovementFormComponent extends Component {

	constructor(props){
		super(props);

		this.state = {
			amount: '',
			description: '',
			showMessage: false
		}

		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	showAlert(message){
		this.setState({ message, showMessage: true });
	}

	onFormSubmit(event){
		event.preventDefault();

		if(this.state.amount == ''){
			this.showAlert('Amount is required');
		} else if(this.state.description == ''){
			this.showAlert('Description is required');
		} else {
			const params = {amount: this.state.amount, description: this.state.description, type: this.props.type };
			this.props.storeMovement(params);
			this.setState({ showMessage: false, amount: '', description: '' }, () => this.props.fetchMovements() );
		}
	}

	render(){
		return(
			<form onSubmit={this.onFormSubmit}>
				<div className="card border-dark mb-3">
					<div className="card-header">

							<div className="content-form-input">
								<input
									type="number"
									placeholder="Amount"
									className="form-control"
									value={this.state.amount}
									onChange={(event) => {this.setState({ amount: event.target.value })}}
								/>
							</div>

							<div className="content-form-input">
								<input
									placeholder="Description"
									className="form-control"
									value={this.state.description}
									onChange={(event) => {this.setState({ description: event.target.value })}}
								/>
							</div>

							<div className="content-form-input">
								<div className="movement-submit-button">
									<button onClick={(event) => this.onFormSubmit(event)} type="submit" className="btn btn-primary">Save</button>
								</div>
							</div>

							<div>
								{ this.state.message ? <div className="alert alert-danger" role="alert">{this.state.message}</div> : null}
							</div>
						
					</div>
				</div>
			</form>
		)

	}
}

function mapStateToProps(state){
	return {
		storeMovement: state.storeMovement
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({ storeMovement, fetchMovements }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MovementFormComponent)