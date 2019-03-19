import React, { Component } from 'react';
import { Route } from 'react-router';
import { Users } from './containers';


class App extends Component {
  render() {
    return (
      <div className="App">
				<Route path='/users/page-:pageNumber' component={Users}/>
				<Route path='/users' component={Users}/>
      </div>
    );
  }
}

export default App;
