import React from 'react';

class HornedBeasts extends React.Component {
  render() {
    return(
      <div>
        <h2>{this.props.title}</h2>
        <img
          src={this.props.imageURL}
          alt={this.props.description}
          title={this.props.title}
        />
      </div>
    )
  }
};

export default HornedBeasts;
