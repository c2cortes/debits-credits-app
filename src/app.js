import React, { Component } from 'react';
import DebitsList from './containers/debits/debitsList.js';

export default class App extends Component {
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    <h1 className="main-title">Debits and Credits App</h1>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <DebitsList section={'Debits'}/>
                    </div>
                    <div className="col-md-6">
                        <DebitsList section={'Credits'}/>
                    </div>
                </div>
            </div>
        )
    }
}