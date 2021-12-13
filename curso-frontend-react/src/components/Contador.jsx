import React from 'react';
// import {useState} from 'react';

export class Contador extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          counter: 0,
      };

  }
  

    contar({ sumar, restar}) {
      if (sumar) {
          this.setState({
              counter: this.state.counter + 1,
          });
      }
      if (restar) {
          this.setState({
              counter: this.state.counter - 1,
          });
      }
      console.log(this.state.counter)
      

     

  }

  render() {
      return (
        <>
        
        <h1>
              {this.props.counter}
          </h1>

          <button onClick={() => this.contar({sumar: true})}>
              +
          </button>
          <button onClick={() => this.contar({restar: true})}>
              -
          </button>

        
        
        
        </>
         

          );
      }
    }