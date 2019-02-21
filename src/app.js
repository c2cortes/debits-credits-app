import React, { Component } from 'react';
import MovementsList from './containers/movements/movementsList.js';

export default class App extends Component {
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="main-title">Debits / Credits App</h1>
                        <hr/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <MovementsList type={'debit'}/>
                    </div>
                    <div className="col-md-6">
                        <MovementsList type={'credit'}/>
                    </div>
                </div>
            </div>
        )
    }
}