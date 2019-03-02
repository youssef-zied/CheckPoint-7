//ok
import React, { Component } from 'react';
import './App.css';
import UserForm from './components/UserForm'
import './bootstrap/css/bootstrap.css'
import './bootstrap/css/bootstrap.min.css'
import './bootstrap/css/bootstrap-grid.css'
import './bootstrap/css/bootstrap-grid.css.map'
import './bootstrap/css/bootstrap-grid.min.css.map'
import './bootstrap/css/bootstrap-reboot.css'
import './bootstrap/css/bootstrap-reboot.css.map'
import './bootstrap/css/bootstrap-reboot.min.css'
import './bootstrap/css/bootstrap-reboot.min.css.map'
import './bootstrap/css/bootstrap.css.map'
import './bootstrap/css/bootstrap.min.css'
import './bootstrap/css/bootstrap.min.css.map'



class App extends Component {
  

  render() {

 
    const HorizontalMenu = {
      display: 'inline-flex',
      width: 700,
      border: 'double solid white',
      margin:3,
    }
    const FirstPage={
      backgroundColor: 'white ',
      paddingLeft: '25%',
      color: 'black',
    }
    return (
      
      <div>
        <UserForm />
      </div>

    );
  }
}

export default App;
