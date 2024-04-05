import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Transactions from './components/Transactions';


const App = () => {
  return(
    <Router>
    <Routes>
      <Route path="/" Component={Navbar}/>
      <Route path="/transactions" Component={Transactions}/>
    </Routes>
    </Router>
  )
}

export default App;