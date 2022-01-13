import React from 'react';
import Button from 'react-bootstrap/Button'
import Data from './data301.json'


class Form extends React.Component {

  handleSubmit = (event) => {
    event.preventDefault();
    let searchVal = event.target.search.value;
    let searchResult = Data.map(obj => {
      if (searchVal === obj.keyword) return obj;
    })
    this.props.saveSearchResult(searchResult)
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <label for="search" name="search">Search for image by animal:</label>
        <input type="text" name="search" id="search"/>
        <Button variant="primary" type="submit">Search</Button> 
      </form>
    )
  }
}

export default Form;
