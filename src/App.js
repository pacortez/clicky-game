import React, { Component } from 'react';

import Nav from "./components/Nav";
// import TitleJumbotron from "./components/TitleJumbotron";
import Wrapper from "./components/Wrapper"
import DogCard from "./components/DogCard";
import Counter from "./components/Counter"

import dogs from "./dogs.json"
import './App.css';


class App extends Component {
  //Sets this.state.dogs to the dogs json array
  state = {
    dogs,
    current: 0,
    high: 0,
    dogsClicked: []
  };


  handleIncrement = () => {
    this.setState({ current: this.state.current + 1 });
    
};

  handleHigh = () => {
    if (this.state.current >= this.state.high)
    this.setState({ high: this.state.current + 1 });
  }

  randomizeFunction = (array) => {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }
  

  userChoice = (id) => {
    
    if (this.state.dogsClicked.includes(id)){
      alert("You lost")
      this.setState({ current: 0 });
      this.setState({ dogsClicked: [] });
    } else {
      this.state.dogsClicked.push(id);
      this.handleIncrement();
      this.handleHigh();
      this.randomizeFunction(dogs);
      
    }
    
  }

  render() {
    return (
      <div>
        <Nav />
        
        <Counter 
          current={this.state.current}
          high={this.state.high}
        />
        <Wrapper>
          {/* <div className="image"> */}

            {dogs.map(dog => (
              <DogCard key={dog.id} 
              id={dog.id}
              image={dog.image}
              userChoice={this.userChoice}
              />
            ))}
          {/* </div> */}
        </Wrapper>
      </div>
    );
  } 
}

export default App;
