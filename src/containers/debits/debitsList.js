import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { fetchDebits } from '../../actions/index';

import DebitFormComponent from './debitFormComponent';
import DebitComponent from './debitComponent';

class DebitsList extends Component {

	constructor(props){
		super(props);
		
		this.state = {
            debits: []
		}
	}

	onSuccessStored(){
		this.hideTodoFormComponent();
	}

	componentWillMount(){
		this.props.fetchDebits();
	}

	componentWillReceiveProps(nextProps){
		if(nextProps.debits._id !== undefined) {
			this.props.fetchDebits();
		} else {
            this.setState({ debits: nextProps.debits });
		}
	}

	render(){
		
		if(this.props.debits == null){
			return(<div>Loading...</div>)
		}

		return(
			<div className="main-container">
				<header> <h1>Debits and Credits App</h1> </header>
				<h2>Debits</h2>
				<DebitFormComponent />
                <div>
                    { this.state.debits.map((item) => {
                        return <DebitComponent key={item._id} id={item._id} sessionId={this.props.sessionId} item={item} onClickDelete={(id) => this.onClickDelete(id)}/>
                    }) }
                </div>
			</div>
		)
	}
}

function mapStateToProps(state){
	return {
		debits: state.debits
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({ fetchDebits }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DebitsList);