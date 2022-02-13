import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Next from './Next';
  

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 1,
      fizzBuzz: ''
    }
  }

  fizzBuzz(num) {
    if (num % 15 === 0) {
      this.setState({fizzBuzz: 'FizzBuzz'});
    } else if (num % 5 === 0) {
      this.setState({fizzBuzz: 'Buzz'});
    } else if (num % 3 === 0) {
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
      <Router>
      <div className="App" data-testid='app'>
        <h1>FizzBuzz Player</h1>
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
          <div>
            <br></br>
            <a href='/next'>Go to Stage 2</a>
          </div>
         
      </div>
      <Switch>
        <Route exact path='/next' component={Next}/>
      </Switch>
      </Router>
    );
  }
  
}

//ReactDOM.render(<App />, document.getElementById('app'));
export default App;