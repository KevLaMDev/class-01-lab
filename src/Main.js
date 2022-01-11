import React from 'react';
import HornedBeasts from './HornedBeasts.js';

class Main extends React.Component {
  render() {

    let beastsArray = this.props.data.map(beast => (
      <HornedBeasts 
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
