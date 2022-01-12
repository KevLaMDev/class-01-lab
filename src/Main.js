import React from 'react';
import HornedBeasts from './HornedBeasts.js';
import './Main.css'

class Main extends React.Component {
  render() {

    let beastsArray = this.props.data.map((beast, index) => (
      <HornedBeasts
        key={index}
        title={beast.title}
        imageUrl={beast.image_url}
        description={beast.description}
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
