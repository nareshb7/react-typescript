import * as React from 'react';
import './style.css';
import Nav from './src/components/Nav';
import RoutesComp from './src/components/RoutesComp';

export default function App() {
  return (
    <div>
      <h1>Hello :)</h1>
      <h3>This is React + TypeScript Project</h3>
      <p></p>
      <Nav />
      <RoutesComp />
    </div>
  );
}
