import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Data from './data301.json';
import SelectedBeast from './SelectedBeast'
import Form from './Form'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentBeast: '',
      show: false,
      searchResult: ''
    }
  }

  handleShowModal = (beast) => {
    this.setState({
      show: true,
      currentBeast: beast
    })
  };

  handleCloseModal = () => {
    this.setState({
      show: false
    })
  }

  saveSearchResult = (searchResult) => {
    this.setState({
      searchResult: searchResult
    })
  }

  render() {
    console.log(this.state.currentBeast)
    return (
      <>
        <Header />
        <Form saveSearchResult={this.saveSearchResult}/>
        <SelectedBeast 
          handleShowModal={this.handleShowModal}
          handleCloseModal={this.handleCloseModal}
          currentBeast={this.state.currentBeast}
          show={this.state.show}
        />
        <Main data={Data} handleShowModal={this.handleShowModal}/>
        <Footer />
      </>
    )
  }
}

export default App;
