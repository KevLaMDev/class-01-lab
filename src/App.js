import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Data from './data301.json';

class App extends React.Component {
  render(){
    return(
      <>
        <Header />;
        <Main data={Data}/>;
        <Footer />;
      </>
    )
  }
}

export default App;
