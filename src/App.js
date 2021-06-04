import React from 'react'
import './App.css';
import Sidebar from './sidebar/Sidebar'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import Feed from './feed/Feed'
import Widgets from './widgets/Widgets'

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
