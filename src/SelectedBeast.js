import React from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

class SelectedBeast extends React.Component {
  render() {
    return (
    <Modal centered show={this.props.show} onHide={this.props.handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>{this.props.currentBeast.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img
          src={this.props.currentBeast.image_url}
          alt={this.props.currentBeast.description}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={this.props.handleCloseModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
    )
  }
}

export default SelectedBeast


