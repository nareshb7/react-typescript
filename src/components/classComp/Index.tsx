import React, { Component } from 'react';
import GreetComp from './GreetComp';

interface AppProps {}
interface AppState {
  name: string;
}

class HelloIndex extends Component<AppProps, AppState> {
  constructor() {
super();
    this.state = {
      name: 'TypeScript',
    };
  }
  render() {
    return (
      <div>
        Hello Component
        <div>
          <GreetComp val={ this.state.name } />
        </div>
      </div>
    );
  }
}
export default HelloIndex;
