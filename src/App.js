import React, { Component } from 'react';
import CharCard from "./components/CharCard";
import logo from './logo.svg';
import './App.css';
import friends from './friends.json';
import Header from "./components/Header";

let clickedFriends = [];

class App extends Component {
  state = {
    clickedFriends,
    friends,
    score : 0,
    highScore : 0
  };

  shuffle = array => {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

  clickedFriend = id => {
    let checkHighScore = 0;
    if(clickedFriends.indexOf(id) === -1){
      clickedFriends.push(id);
      this.shuffle(friends);
      checkHighScore = (this.state.score + 1  > this.state.highScore) ? this.state.score + 1 : this.state.highScore;
    }
    else{
      alert("you already clicked this");
      clickedFriends = [];
    }
    console.log(clickedFriends.toString());
   
    
    this.setState({ clickedFriends,
       friends,
       score: this.state.score + 1,
       highScore: checkHighScore
    });
  };


  render() {
    return (
      <div className="App">      
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro"/>      
        <Header
        score={this.state.score}
        highScore={this.state.highScore}
          />
          {this.state.friends.map(friend => (
            <CharCard
            clickedFriend={this.clickedFriend}
              id={friend.id}
              key={friend.id}
              name={friend.name}
              image={friend.image}
              occupation={friend.occupation}
              location={friend.location}
            />
          ))}
      </div>

    );
  }
}

export default App;
