
import './App.css';
import React, { Component } from 'react';


import { data } from './data.json';

class App  extends Component {
  constructor() {
    super();
    this.state = {
      data: data

    }
  }

  render() {
    const data = this.state.data.map((data,i) => {
     
      return(
        <div className="cardContainer col-md-4">
          <div className="card mt-4">
          <div className="card-title">
        
            <h1>{data.titulo}</h1>
            
            </div>
          <div className="card-info">
            <p>{data.texto}</p>

          </div>
          
        </div>

        </div>
        

      )
    })
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-drak">
          <a className="text-white">
            MI HOJA DE VIDA
          </a>
          <img></img>
        </nav>
        <div className="container">
          <div className="row mt-4">
            {data}

          </div>
        </div>
      
        
      </div>
         
  
    );

  }
 
}


export default App;
