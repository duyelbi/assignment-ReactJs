/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Link } from "react-router-dom";
import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
import Route from './components/Router';
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Cart from "./components/layout/Cart";
import BackToTop from "./components/layout/BackToTop";

// ReactDOM.render(
//   <HomePage />,
//   document.getElementById('root')
// );
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Cart />
        <Route />
        <BackToTop />
        <Footer />
      </div>
    </Router>
  );
}

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);