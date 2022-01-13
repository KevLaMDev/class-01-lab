import React from 'react';
import HornedBeasts from './HornedBeasts.js';
import './Main.css'

class Main extends React.Component {
  render() {
    console.log(this.props)
    let beastsArray = this.props.data.map((beast, index) => (
      <HornedBeasts
        beast={beast}
        key={index}
        title={beast.title}
        imageUrl={beast.image_url}
        description={beast.description}
        handleShowModal={this.props.handleShowModal}
      />
    ));

    return (
      <main>
        {beastsArray}
      </main>
    )
  }
}

export default Main; 
