import React from 'react';
import './Header.css';

class Header extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: 'Horned Beasts'
    };
  };

handleClick = () => {
  this.setState({
    title: 'Horned Besties'
  });
};

  render() {
    return (
      <header onClick={this.handleClick}>
        <h1>{this.state.title}</h1>
      </header>
    )
  }
}
export default Header;
