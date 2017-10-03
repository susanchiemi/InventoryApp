import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="root">
  <div class="container">
  <div class="header clearfix">
        <nav>
          <ul class="nav nav-pills pull-right">
            <li role="presentation" class="active"><a href="#">Home</a></li>
            <li role="presentation"><a href="#">About</a></li>
            <li role="presentation"><a href="#">Contact</a></li>
          </ul>
        </nav>
      </div>
      <br/>
      
    <div class="jumbotron">
    <h3>Login To Download Custom Report</h3>
    <br/>
       <form>
       <div class="form-group">
         <label for="emailInput">Email address</label>
         <input type="email" class="form-control" id="emailInput" placeholder="Email"/>
       </div>
       <div class="form-group">
       <label for="passwordInput">Password</label>
       <input type="password" class="form-control" id="passwordInput" placeholder="Password"/>
       </div>
      <button type="submit" class="btn btn-lg btn-warning">Submit</button>
       </form>
        </div>
     </div>

</div> /* end container */


    );
  }
}

export default App;
