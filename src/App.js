import React from 'react'
import './App.css';
import Sidebar from './Sidebar'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import Feed from './Feed'
import Widgets from './Widgets'

function App() {
  return (
    <div className="app">
      <a href="https://github.com/94yifanwu/twitter-frontend">
          <ArrowBackIcon className="back-arrow-icon" />
      </a>

      <Sidebar/>
      <Feed />
      <Widgets />
      
    </div>
  );
}

export default App;
