import React from 'react';
import { Card } from 'react-bootstrap';
import './HornedBeasts.css'

class HornedBeasts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      votes: 0,
      instructions: ''
    }
  }

  handleClick = () => {
    this.setState({
      votes: this.state.votes + 1
    })
  }

 

  clickOnDesc = () => {
    this.setState({
      instructions: 'psssst click on the picture'
    })
  };

  render() {
    return (
      <div>
        <article>
          <Card style={{ width: '18rem' }}>
            <Card.Img
              variant="top"
              src={this.props.imageUrl}
              alt={this.props.description}
              onClick={() => this.props.handleShowModal(this.props.beast)}
            />
            <Card.Body onClick={this.clickOnDesc}>
              <Card.Title>
                {this.props.title}
                💖: {this.state.votes}
              </Card.Title>
              <Card.Text>
                {this.props.description} 
                <br></br> 
                {this.state.instructions}
              </Card.Text>
            </Card.Body>
          </Card>
        </article>
      </div>
    )
  }
};

export default HornedBeasts;
