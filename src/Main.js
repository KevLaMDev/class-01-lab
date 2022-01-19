import React from 'react';
import HornedBeasts from './HornedBeasts.js';
import './Main.css'
import HornForm from './Form'

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beastsToShow: this.props.allBeasts
    }
  }

  // Event handler for the drop down form selection
    // parses input val, returns a new arr of objs with input val and updates state prop 'beastsToShow' which contains objs that will be rendered in beastsArray
  handleSelect = (numOfHorns) => {
    numOfHorns = parseInt(numOfHorns);
    let newSelection = this.props.allBeasts.filter(obj => obj.horns === numOfHorns);
    if (numOfHorns === 0) newSelection = this.props.allBeasts;
    
    this.setState({
      beastsToShow: newSelection
    })
  }

  render() {
    // beastsArray is an array of instantiated HornedBeasts components, passing in the beastsToShow array of objs
    let beastsArray = this.state.beastsToShow.map((beast, index) => (
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
        <HornForm handleSelect={this.handleSelect} />
        {beastsArray}
      </main>
    )
  }
}

export default Main; 
