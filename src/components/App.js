import React, { useReducer } from 'react';

import './App.css';

import TotalDisplay from './TotalDisplay';
import CalcButton from './CalcButton';

import { addOne, applyNumber, changeOperation, clearDisplay, memorySave, memoryOperate, memoryClear } from '../actions/index'

import reducer, { initialState } from '../reducers/index';



function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { total, operation, memory } = state;

  const handleClick = e => {
    dispatch(applyNumber(parseInt(e.target.value, 10)))
  }

  const handleOpChange = e => {
    dispatch(changeOperation(e.target.value))
  }

  const handleClear = () => {
    dispatch(clearDisplay())
  }

  const handleMemorySave = () => {
    dispatch(memorySave(total))
  }

  const handleMomoryOperate = () => {
    dispatch(memoryOperate())
  }

  const handleMemoryClear = () => {
    dispatch(memoryClear())
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"> Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {operation}</span>
              <span id="memory"><b>Memory:</b> {memory}</span>
            </div>
            
            <div className="row">
              <CalcButton onClick={handleMemorySave} value={"M+"}/>
              <CalcButton onClick={handleMomoryOperate} value={"MR"}/>
              <CalcButton onClick={handleMemoryClear} value={"MC"}/>
            </div>

            <div className="row">
              <CalcButton onClick={handleClick} value={1}/>
              <CalcButton onClick={handleClick} value={2}/>
              <CalcButton onClick={handleClick} value={3}/>
            </div>

            <div className="row">
              <CalcButton onClick={handleClick} value={4}/>
              <CalcButton onClick={handleClick} value={5}/>
              <CalcButton onClick={handleClick} value={6}/>
            </div>

            <div className="row">
              <CalcButton onClick={handleClick} value={7}/>
              <CalcButton onClick={handleClick} value={8}/>
              <CalcButton onClick={handleClick} value={9}/>
            </div>

            <div className="row">
              <CalcButton onClick={handleOpChange} value={"+"}/>
              <CalcButton onClick={handleOpChange} value={"*"}/>
              <CalcButton onClick={handleOpChange} value={"-"}/>
            </div>

            <div className="row ce_button">
              <CalcButton onClick={handleClear} value={"CE"}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
