import React, {Component} from 'react';
import './App.sass';

class App extends Component {

  constructor() {
    super();
    this.state = {
      count: 0
    }

    this.values = [5, -6]

    //this.onStatePlus = this.onStatePlus.bind(this) //common

  }

  onStateChange = (i) => {
    this.setState(({count}) => {
      return {
        count: count + i
      }
    })
  }

  render() {    
    const {count} = this.state;
    return (      
      <div className="App">
        <div className="uk-card uk-card-default uk-card-body">
          <h3 className="uk-card-title">Counter</h3>
          <div>{count}</div>
          <button 
            onClick={()=> this.onStateChange(
              +this.values.filter(item => item > 0)
            )} 
            className="uk-button uk-button-primary">
              +
          </button> 
          <button 
            onClick={()=> this.onStateChange(
              +this.values.filter(item => item < 0)
            )}
            className="uk-button uk-button-secondary">
              -
            </button>
        </div>
      </div>
    );

  }
}

export default App;
