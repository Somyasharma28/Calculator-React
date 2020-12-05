import React, { Component } from 'react';
import './style.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';

export default class Result extends Component {  
    render() {
        return (
        <div className="card border" >
            <div className="card-body">
                {this.props.result}
            </div>
      </div>);
    }
}
