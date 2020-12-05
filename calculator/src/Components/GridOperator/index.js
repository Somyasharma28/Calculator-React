import React, { Component } from 'react';
import './style.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';

export default class GridOperator extends Component {

    render() {
        return (
        <div className="grid-container container">
            <div className="grid-row row justify-content-around toprow">
           <button type="button" className="btn btn-light " onClick={(e)=>this.props.selectButton(e.currentTarget.innerText)}>7</button>
           <button type="button" className="btn btn-light" onClick={(e)=>this.props.selectButton(e.currentTarget.innerText)} >8</button>
           <button type="button" className="btn btn-light" onClick={(e)=>this.props.selectButton(e.currentTarget.innerText)} >9</button>
           <button type="button" className="btn btn-warning" onClick={(e)=>this.props.selectButton(e.currentTarget.innerText)}>/</button>
           </div>
           <div className="grid-row row justify-content-around">
           <button type="button" className="btn btn-light" onClick={(e)=>this.props.selectButton(e.currentTarget.innerText)}>4</button>
           <button type="button" className="btn btn-light" onClick={(e)=>this.props.selectButton(e.currentTarget.innerText)}>5</button>
           <button type="button" className="btn btn-light" onClick={(e)=>this.props.selectButton(e.currentTarget.innerText)}>6</button>
           <button type="button" className="btn btn-warning" onClick={(e)=>this.props.selectButton(e.currentTarget.innerText)}>*</button>
           </div>
           <div className="grid-row row justify-content-around">
           <button type="button" className="btn btn-light" onClick={(e)=>this.props.selectButton(e.currentTarget.innerText)}>1</button>
           <button type="button" className="btn btn-light" onClick={(e)=>this.props.selectButton(e.currentTarget.innerText)}>2</button>
           <button type="button" className="btn btn-light" onClick={(e)=>this.props.selectButton(e.currentTarget.innerText)}>3</button>
           <button type="button" className="btn btn-warning" onClick={(e)=>this.props.selectButton(e.currentTarget.innerText)}>-</button>
           </div>
           <div className="grid-row row justify-content-around">
           <button type="button" className="btn btn-light " onClick={(e)=>this.props.selectButton(e.currentTarget.innerText)}>0</button>
           <button type="button" className="btn btn-light " onClick={(e)=>this.props.selectButton(e.currentTarget.innerText)}>.</button>
           <button type="button" className="btn btn-light " onClick={()=>this.props.back()}><img height="25" width="25" alt="backspace" src="https://previews.123rf.com/images/dxinerz/dxinerz1507/dxinerz150700863/42119251-back-previous-backspace-icon-vector-image-can-also-be-used-for-computer-hardware-computer-network-an.jpg"></img></button>
           <button type="button" className="btn btn-warning" onClick={(e)=>this.props.selectButton(e.currentTarget.innerText)}>+</button>
           </div>
           <div className="grid-row row justify-content-center">
           <button type="button" className="btn btn-success ans"  onClick={()=>this.props.answer()}>Ans</button>
           <button type="button" className="btn btn-success clear"  onClick={()=>this.props.reset()} >Clear</button>
           </div>
      </div>);
    }
}