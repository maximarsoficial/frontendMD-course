import React, { Component } from 'react';
import './App.css';
import { Contador } from './components/Contador';

import { Saludo } from './components/Saludo'

class App extends Component {


  render() {
    return (
      <>

        <div className=''>
          <div >
            <Saludo nombre="MAXIMILIANO" />
            <Contador />
          </div>


        </div>


      </>
    )
  }

}

export default App;