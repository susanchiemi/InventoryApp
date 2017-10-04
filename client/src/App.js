import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="root">
  <div className="container">
  <div className="header clearfix">
        <nav>
          <ul className="nav nav-pills pull-right">
            <li role="presentation" className="active"><a href="#">Home</a></li>
            <li role="presentation"><a href="#">About</a></li>
            <li role="presentation"><a href="#">Contact</a></li>
          </ul>
        </nav>
      </div>
      <br/>
      
    <div className="jumbotron">
    <h3>Login To Download Custom Report</h3>
    <br/>
       <form>
       <div className="form-group">
         <label for="emailInput">Email address</label>
         <input type="email" className="form-control" id="emailInput" placeholder="Email"/>
       </div>
       <div className="form-group">
       <label for="passwordInput">Password</label>
       <input type="password" className="form-control" id="passwordInput" placeholder="Password"/>
       </div>
      <button type="submit" className="btn btn-lg btn-warning">Submit</button>
       </form>
        </div>
     </div>

</div> /* end container */


    );
  }
}

export default App;
