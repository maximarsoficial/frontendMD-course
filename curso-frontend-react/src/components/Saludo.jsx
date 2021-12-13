import React from 'react';

export class Saludo extends React.Component {
  

  render() {
    return (
      <>
      <div className=''>
      <h1>Bienvenido {this.props.nombre} !!!</h1>
      </div>
        
      </>
    )

  }


}

