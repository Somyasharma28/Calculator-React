import React, { Component } from 'react';
import './style.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
//import GridNumber from '../GridNumber/';
import GridOperator from '../GridOperator/';
import Result from '../Result/';


class App extends Component {

    constructor(props)
    {
        super(props);
        this.state={
            result: "",
        }  
    }

    updateResult=(value)=>{
        const newValue= this.state.result+value;
        this.setState({result: newValue});
    }

    backspace=()=>{
        const newValue= this.state.result.slice(0,-1);
        this.setState({result: newValue});
    }

    reset=()=>{
        this.setState({result: ""});
    }

    answer=()=>{
        try{
            const ans=eval(this.state.result)?? "";
            this.setState({result: ans});
        }
        catch(error)
        {
            console.error(error);
            this.setState({result: "Some Error has occured. Please try again!"});

        }
    }

    render() {
        return ( <div className="container-fluid h-100 mt-5 pt-5">
            <div className="row justify-content-center align-items-center "> 
            <h1>CALCULATOR</h1></div>
            <div className="row justify-content-center align-items-center "> 
            <Result result={this.state.result}/></div>
            <div className="row justify-content-center align-items-center "> 
            <GridOperator selectButton={this.updateResult} 
            back={this.backspace} reset={this.reset} answer={this.answer}/> 
            </div>
        </div>);

    }
}

export default App;



