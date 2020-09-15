import React, {Component } from 'react';
import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component {
  constructor(props) {
    super(props);
      this.state = { apiResponse: [] };
    }

    callAPI() {
      fetch("/testAPI")
        .then(res => res.json())
        .then(res => this.setState({ apiResponse: res }))
        // .catch(err => err);
    }

    componentDidMount() {
      this.callAPI();
    }

    render() {
      return (
        <div className="App">
          <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {this.state.apiResponse.map((a)=>(
            <p key={a.id}>{a.name}</p>
          ))}
          {/* <h1 className="App-title">{this.state.apiResponse}</h1> */}
          </header>
        </div>
      );
    }
  }

export default App;
