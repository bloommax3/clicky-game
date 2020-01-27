import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Header from "./components/Header";
import friends from "./friends.json";

class App extends Component {
  // Setting initial this.state.friends to the friends json array
  constructor(props){
    super(props);
    this.state = {
      friends: friends,
      score: 0,
      highScore: 0
    };
  }
  

  clickAct =(event, id)=>{
    console.log(id)
    let updatedFriends = this.state.friends
    console.log(updatedFriends)
    updatedFriends.forEach(element => {
      if(id===element.id){this.removeFriend(element)}
    });
  }
  

  loss=(score)=>{
    this.restart(score)
  }

  //This function determines whether the current score is greater than the high score
  restart=(score)=>{
    let highScore = score>this.state.highScore?(score):(this.state.highScore)
    this.setState({
      score: 0,
      highScore: highScore,
      friends: friends
    })
  }

  win=(score)=>{
    this.restart(score)
  }


  removeFriend(friend){
    if(friend.clicked){
      this.loss(this.state.score)
    }

    else{
      let score = this.state.score
      score++
      score===this.state.friends.length?(this.win(score)):(this.continue(score))
    }
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render(){
    return (
      <Wrapper>
        <Header
          score={this.state.score}
          highScore={this.state.highScore}
        />
        <Title>Friends List</Title>
        {friends.map(friend => (
          <FriendCard
            clickAct={this.clickAct}
            id={friend.id}
            name={friend.name}
            key={friend.id}
            image={friend.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
