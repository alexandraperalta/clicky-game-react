import React, { Component } from 'react';
import CharCard from "./components/CharCard";
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
    let checkHighScore = this.state.highScore;
    let newScore = this.state.scorel
    if(clickedFriends.indexOf(id) === -1){
      clickedFriends.push(id);
      this.shuffle(friends);
      newScore = this.state.score + 1;
      checkHighScore = (newScore  > checkHighScore) ? newScore : checkHighScore;
    }
    else{
      alert("you already clicked this");
      clickedFriends = [];
      newScore = 0
    }
    console.log(clickedFriends.toString());
   
    
    this.setState({ clickedFriends,
       friends,
       score: newScore,
       highScore: checkHighScore
    });
  };


  render() {
    return (
      <div className="App">    
        <Header
        score={this.state.score}
        highScore={this.state.highScore}
          />
          <div className="container">
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
      </div>

    );
  }
}

export default App;
