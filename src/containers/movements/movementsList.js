import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMovements } from '../../actions/index';

import MovementFormComponent from './movementFormComponent';
import MovementComponent from './movementComponent';

class MovementsList extends Component {

	constructor(props){
		super(props);
		
		this.state = {
			movements: [],
			showForm: false,
			movementsAmountsSum: 0
		}
	}

	onSuccessStored(){
		this.hideTodoFormComponent();
	}	

	componentWillMount(){
		this.props.fetchMovements();
	}

	componentWillReceiveProps(nextProps){
		this.setState({ movements: nextProps.movements, showForm: false, movementsAmountsSum: 0 }, () => this.sumMovementsAmounts());
	}

	sumMovementsAmounts(){
		let movementsAmountsSum = this.state.movementsAmountsSum;
		this.state.movements.map((item) => { 
			return item.type === this.props.type ? movementsAmountsSum += Number(item.amount) : null 
		})
		this.setState({ movementsAmountsSum });
	}

	renderHeader(){
		return(
		<div className="card border-dark mb-3">
			<div className="card-header">
				<div className="row">
					<div className="col-lg-10 col-md-10 col-sm-10">
						<h4 className="movement-title-list">{ this.props.type == 'debit' ? 'Debits' : 'Credits' } </h4>
					</div>
					<div className="col-lg-2 col-md-2 col-sm-2">
						<div className="content-form-input">
							<button onClick={() => this.setState({ showForm: true })} type="button" className="btn btn-primary">+</button>
						</div>
					</div>
				</div>
					
			</div>
		</div>
		)
	}

	renderMovementsSum() {
		return <div className={ this.props.type == 'debit' ? 'alert alert-success' : 'alert alert-danger' } role="alert">
						<div className="row">
							<div className="col-lg-8 col-md-8 col-sm-8 movement-description-label">
								Total:
							</div>
							<div className="col-lg-4 col-md-4 col-sm-4 movement-amount-label">
								${this.state.movementsAmountsSum}
							</div>
						</div>
				</div>
	}

	render(){
		return(
			<div className="main-container">
				{ this.renderHeader() }
				{ this.state.showForm ? <MovementFormComponent type={this.props.type}/> : null }
                <div>
                    { this.state.movements.map((item, id) => { return item.type === this.props.type ? <MovementComponent key={id} type={this.props.type}  item={item} onClickDelete={(id) => this.onClickDelete(id)}/> : null }) }
                </div>
				{ this.renderMovementsSum() }
			</div>
		)
	}
}

function mapStateToProps(state){
	return {
		movements: state.movements
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({ fetchMovements }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MovementsList);