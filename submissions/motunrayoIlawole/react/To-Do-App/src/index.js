import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const TASKS = [
	{ id: "task-0", name: "Eat", status: "active" },
	{ id: "task-1", name: "Sleep", status: "active" },
	{ id: "task-2", name: "Go Shopping", status: "active" },
	{ id: "task-3", name: "Study", status: "active" },
];

ReactDOM.render(
  <React.StrictMode>
    <App tasks = {TASKS} />
  </React.StrictMode>,
  document.getElementById('root')
);