import React from 'react';
import { Switch, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Footer from './components/Footer';
import SideBar from './components/SideBar';
import AddPage from './pages/AddPage';
import Dao from './pages/Dao';
import HomePage from './pages/HomePage';
import LearnPage from './pages/LearnPage';

const App = () => {
  return (
    <div className='container-fluid main-container'>
      <ToastContainer
        position='top-center'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className='row'>
        <div className='col-md-3 side-bar'>
          <SideBar />
        </div>
        <div className='col '>
          <div className='searchbox'>
            <input
              type='text'
              className='form-control searchbar'
              placeholder='Search Dao'
            />
          </div>
          <div className='row '>
            <div className='content-container'>
              <Switch>
                <Route exact path='/' component={HomePage} />
                <Route path='/dao/:id' component={Dao} />
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
