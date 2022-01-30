import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

/*

{ createContext, useContext }

const TreesContext = createContext();

export const useTrees = () => {
  useContext(TreesContext);
}

const trees = [
  { id: '1', type: 'oak'},
  { id: '2', type: 'palm'},
  { id: '3', type: 'maple'},
  { id: '4', type: 'component'},
]
*/

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);