import React, {useState} from 'react';
import './App.sass';

function App() {

  const values = [1, -1];
  const [count, onCountChange] = useState(0);

    return (      
      <div className="App">
        <div className="uk-card uk-card-default uk-card-body">
          <h3 className="uk-card-title">Counter</h3>
          <div>{count}</div>
          <button 
            onClick={()=> onCountChange(
              count + +values.filter(item => item > 0)
            )} 
            className="uk-button uk-button-primary">
              +
          </button> 
          <button 
            onClick={()=> onCountChange(
              count + +values.filter(item => item < 0)
            )}
            className="uk-button uk-button-secondary">
              -
            </button>
        </div>
      </div>
    );
}

export default App;
