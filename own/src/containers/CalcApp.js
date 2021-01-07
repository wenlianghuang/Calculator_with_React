import React, {useState} from 'react';

import CalcButton from '../components/CalcButton';
import PlusFunction from '../components/plusNumber';
import MulFunction from '../components/productNumber';
import MinusFunction from '../components/minusNumber';
import DiviFunction from '../components/diviNumber';
import ResetState from '../components/resetState';
// 計算機 App
class CalcApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      StringNumber: 0,
      totalNumber: null,
      tmpAdd: null,
      operator: null,
      ACorC: "AC",
      CNC_p: true,
      CNC_mi: true,
      CNC_mu: true,
      CNC_d: true
    };
  }

  resetState() {
    this.setState({
      StringNumber: 0,
      totalNumber: 0,
      ACorC: "AC",
      tmpOP: null,
    })
  }

  showNotImplemented() {
    //console.warn('This function is not implemented yet.');
  }
  
  showStringNumber(setNumber){
    if(this.state.StringNumber === 0){
      this.setState({
        StringNumber: setNumber,
        tmpAdd: Number(setNumber),
        totalNumber: 0,
        ACorC: "C",
        CNC_p: true,
        CNC_mi: true,
        CNC_mu: true,
        CNC_d: true,
      })
    }
    else{
      if(this.state.tmpOP === "plus" || 
         this.state.tmpOP === 'minus' || 
         this.state.tmpOP === 'mul'||
         this.state.tmpOP === 'manymul' || 
         this.state.tmpOP === 'divi' || 
         this.state.tmpOP === 'manydivi'){
           this.setState({
             StringNumber: setNumber,
             tmpAdd: Number(setNumber),
             tmpOP: null,
             CNC_p: true,
             CNC_mi: true,
             CNC_mu: true,
             CNC_d: true,
           })
         }
      else if(this.state.tmpOP == null){
        setNumber = this.state.StringNumber + setNumber;
        this.setState({
          StringNumber: setNumber,
          tmpAdd: Number(setNumber),
          CNC_p: true,
          CNC_mi: true,
          CNC_mu: true,
          CNC_d: true,
        })
      }
    }

  }

  addNumber(){
    /*
    this.setState({
      StringNumber: (this.state.totalNumber) + (this.state.tmpAdd),
      totalNumber: (this.state.totalNumber) + (this.state.tmpAdd),
      tmpAdd: 0,
      operator: "plus",
      tmpOP: "plus",
      CNC_p: !this.state.CNC_p,
    })
    */
    this.setState(PlusFunction(this.state));
  }

  minusNumber(){
    this.setState(MinusFunction(this.state));
  }
 
  productNumber(){
    this.setState(MulFunction(this.state));
    
  }

  diviNumber(){
    this.setState(DiviFunction(this.state));
  }

  percentageNumber(){
    
    this.setState({
      StringNumber: Number(this.state.StringNumber) * 0.01,
      totalNumber: Number(this.state.StringNumber) * 0.01,
      tmpAdd: 0,
    })
  }

  PositiveorNegative() {
    this.setState({
      StringNumber: Number(-(this.state.StringNumber)),
      totalNumber: Number(-(this.state.StringNumber)),
      tmpAdd: 0,
    })
  }

  DecimalNumber(){
    this.setState({
      StringNumber: this.state.StringNumber + ".",
      //totalNumber: this.state.StringNumber + ".",
      tmpAdd: 0,
    })
  }
  equalNumber(){
    if(this.state.operator === "plus"){
      this.setState({
        StringNumber: (this.state.totalNumber)+(this.state.tmpAdd),
        totalNumber: (this.state.totalNumber)+(this.state.tmpAdd),
        tmpAdd: 0,
        tmpOp: "plus",
      })
    }
    else if(this.state.operator === "minus"){
      
      this.setState({
        StringNumber: (this.state.totalNumber) - (this.state.tmpAdd),
        totalNumber: (this.state.totalNumber) - (this.state.tmpAdd),
        tmpAdd: 0,
        tmpOP: "minus"
      })
      
    }
    
    else if(this.state.operator === "mul"){
      
      this.setState({
        StringNumber: String((this.state.totalNumber) * (this.state.tmpAdd)),
        totalNumber: (this.state.totalNumber) * (this.state.tmpAdd),
        tmpAdd: 0,
        tmpOP: 'mul',
      })
    }

    else if(this.state.operator === "manymul"){
      this.setState({
        StringNumber: String((this.state.totalNumber) * (this.state.tmpAdd)),
        totalNumber: (this.state.totalNumber) * (this.state.tmpAdd),
        tmpAdd: 0,
        operator: "mul",
        tmpOP: 'mul',
      })
    }

    else if(this.state.operator === 'divi'){
      this.setState({
        StringNumber: String((this.state.totalNumber) / (this.state.tmpAdd).toFixed(4)),
        totalNumber: ((this.state.totalNumber) / (this.state.tmpAdd)),
        tmpAdd: 0,
        tmpOP: 'divi'
      })
    }

    else if(this.state.operator === "manydivi"){
      this.setState({
        StringNumber: String((this.state.totalNumber) / (this.state.tmpAdd).toFixed(4)),
        totalNumber: ((this.state.totalNumber) / (this.state.tmpAdd)),
        tmpAdd: 0,
        operator: "divi",
        tmpOP: "divi",
      })
    }
    
  }
  render() {
    return (
      <div className="calc-app">
        <div className="calc-container">
          <div className="calc-output">
            <div className="calc-display">{this.state.StringNumber}</div>
          </div>
          <div className="calc-row">
            <CalcButton onClick={this.resetState.bind(this)} children={this.state.ACorC} ></CalcButton>            
            <CalcButton onClick={this.PositiveorNegative.bind(this)} children="+/-" ></CalcButton>
            <CalcButton onClick={this.percentageNumber.bind(this)} children="%" ></CalcButton>
            <CalcButton className="calc-operator" children="÷" onClick={this.diviNumber.bind(this)} CNC_d={this.state.CNC_d}></CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton className="calc-number" children="7" onClick={() => this.showStringNumber("7")} ></CalcButton>
            <CalcButton className="calc-number" children="8" onClick={() => this.showStringNumber("8")} ></CalcButton>
            <CalcButton className="calc-number" children="9" onClick={() => this.showStringNumber("9")} ></CalcButton>
            <CalcButton className="calc-operator" children="x" onClick={this.productNumber.bind(this)} CNC_mu={this.state.CNC_mu}></CalcButton>
          </div>
          <div className="cal-row">
            <CalcButton className="calc-number" children="4" onClick={() => this.showStringNumber("4")} ></CalcButton>
            <CalcButton className="calc-number" children="5" onClick={() => this.showStringNumber("5")} ></CalcButton>
            <CalcButton className="calc-number" children="6" onClick={() => this.showStringNumber("6")} ></CalcButton>
            <CalcButton className="calc-operator" children="-" onClick={this.minusNumber.bind(this)} CNC_mi={this.state.CNC_mi}></CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton className="calc-number" children="1" onClick={() => this.showStringNumber("1")} ></CalcButton>
            <CalcButton className="calc-number" children="2" onClick={() => this.showStringNumber("2")} ></CalcButton>
            <CalcButton className="calc-number" children="3" onClick={() => this.showStringNumber("3")} ></CalcButton>
            <CalcButton className="calc-operator" children="+" onClick={this.addNumber.bind(this)} CNC_p={this.state.CNC_p}></CalcButton>
          </div>
          <div className="cal-row">
            <CalcButton className="bigger-btn" children="0" onClick={() => this.showStringNumber("0")} ></CalcButton>
            <CalcButton className="calc-number" children="." onClick={this.DecimalNumber.bind(this)} ></CalcButton>
            <CalcButton className="calc-operator" children="=" onClick={this.equalNumber.bind(this)}></CalcButton>
          </div>
        </div>
      </div>
    );
  }
}

export default CalcApp;
