import React from 'react';
import { Card } from 'react-bootstrap';
import './HornedBeasts.css'

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
        <article>
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
        </article>
      </div>
    )
  }
};

export default HornedBeasts;
