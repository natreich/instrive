import React, {Component} from 'react';


class Settings extends Component {
  render(){
    return (
      <div className="main-content">
        <h2>{ this.props.route.title }</h2>
        <p>Settings Page</p>
      </div>
    );
  }
}

export default Settings;
