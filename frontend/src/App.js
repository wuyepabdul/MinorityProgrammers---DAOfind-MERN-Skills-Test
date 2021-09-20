import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';
import SideBar from './components/SideBar';
import AddPage from './pages/AddPage';
import HomePage from './pages/HomePage';
import LearnPage from './pages/LearnPage';

const App = () => {
  return (
    <div className='container-fluid main-container'>
      <div className='row'>
        <div className='col-md-3 side-bar'>
          <SideBar />
        </div>
        <div className='col '>
          <div className='searchbox'>
            <input type='text' className='form-control searchbar' placeholder='Search Dao' />
          </div>
          <div className='row '>
            <div className='content-container'>
              <Switch>
                <Route exact path='/' component={HomePage} />
                <Route path='/addDao' component={AddPage} />
                <Route path='/learn' component={LearnPage} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
