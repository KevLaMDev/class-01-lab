import React from 'react';
import { Card } from 'react-bootstrap';

class HornedBeasts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      votes: 0
    }
  }

  handleClick = () => {
    this.setState({
      votes: this.state.votes + 1
    })
  }

  render() {
    return (
      <div>
        <Card style={{ width: '18rem' }}>
          <Card.Img 
            variant="top" 
            src={this.props.imageUrl} 
            alt={this.props.description} 
            onClick={this.handleClick} 
          />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
              {this.props.description}
              💖: {this.state.votes}
            </Card.Text>
            {/* <Button variant="primary">Go somewhere</Button> */}
          </Card.Body>
        </Card>

        {/* <h2>{this.props.title}</h2>
        <img
          src={this.props.imageUrl}
          alt={this.props.description}
          title={this.props.title}
          onClick={this.handleClick}
        />
        <p>💖: {this.state.votes}</p> */}
      </div>
    )
  }
};

export default HornedBeasts;
