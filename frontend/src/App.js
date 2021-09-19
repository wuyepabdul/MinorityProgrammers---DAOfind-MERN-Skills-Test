import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import SideBar from './components/SideBar';
import AddPage from './pages/AddPage';
import HomePage from './pages/HomePage';
import LearnPage from './pages/LearnPage';

const App = () => {
  return (
    <div className='container-fluid row'>
      <div className='col-md-2 side-bar'>
        <SideBar />
      </div>
      <div className='col-md-10'>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/addDao' component={AddPage} />
          <Route path='/learn' component={LearnPage} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
};

export default App;
