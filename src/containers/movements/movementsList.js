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
			showForm: false
		}
	}

	onSuccessStored(){
		this.hideTodoFormComponent();
	}	

	componentWillMount(){
		this.props.fetchMovements();
	}

	componentWillReceiveProps(nextProps){
		this.setState({ movements: nextProps.movements }, () => console.log('new props', nextProps.movements) );
	}

	renderHeader(){
		return(
		<div className="card border-dark mb-3">
			<div className="card-header">
					<div className="content-form-input">
						<button onClick={() => this.setState({ showForm: true })} type="button" className="btn btn-primary">Add a new { this.props.type }</button>
					</div>
			</div>
		</div>
		)
	}

	render(){
		return(
			<div className="main-container">
				<h2>{ this.props.type == 'debit' ? 'Debits' : 'Credits' } </h2>
				{ this.renderHeader() }
				{ this.state.showForm ? <MovementFormComponent type={this.props.section}/> : null }
                <div>
                    { this.state.movements.map((item) => { return <MovementComponent type={this.props.type}  item={item} onClickDelete={(id) => this.onClickDelete(id)}/> }) }
                </div>
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