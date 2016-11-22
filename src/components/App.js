import React, { Component } from 'react';
import NavLink from './NavLink';
import  { browserHistory } from 'react-router';

class App extends Component {

  handleSubmit(event) {
    event.preventDefault();
    let searchTopic = event.target.elements[0].value;
    let path = `searchResults/${searchTopic}`;
    browserHistory.push(path);
  }

  render() {
    return (
      <div className="container">
        <header>
          <span className="icn-logo"><NavLink to="/" >InStrive</NavLink></span>
          <div className="searchBarDiv">
            <form onSubmit={this.handleSubmit}>
              <input className="searchField" type="text" placeholder="Search"/>
              <button className="searchSubmit" type="submit">Search</button>
            </form>
          </div>
          <input className="navPts" type="text" placeholder="1000 pts"/>
          <ul className="main-nav">
            <li><NavLink to="/" >Questions</NavLink></li>
            <li><NavLink to="/profile">Profile</NavLink></li>
            <li><NavLink to="/courses">Courses</NavLink></li>
            <li><NavLink to="/rewards">Rewards</NavLink></li>
            <li><NavLink to="/settings">Settings</NavLink></li>
          </ul>
        </header>
        { this.props.children }
      </div>
    );
  }
}

export default App;
