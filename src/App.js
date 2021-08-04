import {Component} from 'react'
import './App.css';
import DisplayRandomNumber from './components/DisplayRandomNumber';

class App extends Component{

  state = {
    toggle: false
  }

  executeToggle = () => {
    this.setState({toggle: !this.state.toggle})
  }

  render() {


    return (
      <div className="App">
        <h1>Main App</h1>
        <input onClick={this.executeToggle} type="submit" value="Toggle Random Number"/>
        {this.state.toggle && <DisplayRandomNumber />}
        {/* {this.state.toggle ? <DisplayRandomNumber something={"toggle true"}/>: <DisplayRandomNumber something={"toggle false"} />} */}
          
      </div>
    );

  }
  
}

export default App;
