import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { storeDebit, fetchDebits } from '../../actions/index';
 
class DebitFormComponent extends Component {

	constructor(props){
		super(props);

		this.state = {
			concept: ''
		}

		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	showAlert(message){
		let messageContent = <div className="alert alert-danger" role="alert">{message}</div>;
		this.setState({ message: messageContent });
	}

	onFormSubmit(event){
		event.preventDefault();

		if(this.state.concept == ''){
			this.showAlert('Concept is required');
		} else {
			const params = {concept: this.state.concept };
			this.props.storeDebit(params);
			this.setState({ message: '', concept: '' });
		}
	}

	render(){
		return(
			<form onSubmit={this.onFormSubmit}>
				<div className="card border-dark mb-3">
					<div className="card-header">
						
							<div className="content-form-input">
								<input
									placeholder="Enter the concept of the new debit"
									className="form-control"
									value={this.state.concept}
									onChange={(event) => {this.setState({ concept: event.target.value })}}
								/>
							</div>

							<div className="content-form-input">
								<input
									placeholder="Enter the value of the new debit"
									className="form-control"
									value={this.state.value}
									onChange={(event) => {this.setState({ value: event.target.value })}}
								/>
							</div>

							<div className="content-form-input">
								<button onClick={(event) => this.onFormSubmit(event)} type="submit" className="btn btn-primary">Save</button>
							</div>

							<div>
								{this.state.message}
							</div>
						
					</div>
				</div>
			</form>
		)

	}
}

function mapStateToProps(state){
	return {
		storeDebitResponse: state.storeDebit
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({ storeDebit, fetchDebits }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DebitFormComponent)