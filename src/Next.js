import React, {Component} from 'react';
import './App.css';

class Next extends Component {
  constructor() {
    super();
    this.state = {
      count: 1,
      fizzBuzz: ''
    }
  }
  fizzBuzz(num) {
    if (num % 5 === 0 || num.toString().startsWith('5') || num.toString().endsWith('5')) {
      this.setState({fizzBuzz: 'Buzz'});
    } else if (num % 3 === 0 || num.toString().startsWith('3') || num.toString().endsWith('3')) {
      this.setState({fizzBuzz: 'Fizz'});
    } else {
      this.setState({fizzBuzz: ''});
    }
  }
  
  decrement() {
    if (this.state.count > 1) {
      // eslint-disable-next-line react/no-direct-mutation-state
      this.setState({count: --this.state.count});
      this.fizzBuzz(this.state.count);
    }
  }
  
  increment() {
    if (this.state.count < 100) {
      
      this.setState({

        // eslint-disable-next-line react/no-direct-mutation-state
        count: ++this.state.count
      });
      this.fizzBuzz(this.state.count);
    }
  }
  
  
  render(){
    return (
      <div className="App">
        <h1>FizzBuzz Stage 2</h1>
        <div className="btn-group">
        <h2> 
          {this.state.fizzBuzz || this.state.count}
        </h2>
            <button
              onClick={this.decrement.bind(this)}
              className="button-1">
               <i className="fa fa-minus"></i>
            </button>
            
            <button
              onClick={this.increment.bind(this)}
              className="button-1">
              <i className="fa fa-plus"></i>
            </button>
          </div>
      </div>
    );
  }
  
}
export default Next;