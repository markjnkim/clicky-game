import React, { Component } from 'react'
import Container from '../Container'
import ClickItem from '../ClickItem'
import data from '../../data.json'
import Scoreboard from '../Scoreboard'

class Game extends Component {
  state = {
    score: 0,
    topScore: 0,
    data
  }

  componentDidMount() {
    this.setState({ data: this.shuffleData(this.state.data) });
  }

// checks whether card has been clicked previously, if true, guess is wrong(false)
  handleClick = id => {
    // sets condition to either handle correct or incorrect answer
    // Initially all items clicked:false
    // guessCorrect turns true only if the clicked:false.  if clicked:true - you guessed wrong!!

    let guessCorrect = false;
    const newData = this.state.data.map(item => {
      const newItem = {...item};
      if(id === newItem.id){
        // check if the clicked attribute value is false(has not yet been clicked)
        if(!newItem.clicked){
          guessCorrect = true;
          newItem.clicked = true;
        }
      } 
      console.log(newItem)
      console.log(guessCorrect)
      return newItem;
    })
    guessCorrect ? this.handleCorrect(newData) : this.handleWrong(newData)
  };
  // when wrong, the score is set to zero
  // the data object is reset to init key values
handleWrong = data => {
  this.setState({
    score: 0,
    data: this.resetData(data)
  });
};
// score iterates one, new top score?
// 
handleCorrect = data => {
  console.log("Right answer");
  const {score,topScore} = this.state
  const newScore = score + 1;
  const newTopScore = topScore > newScore ? topScore : newScore;
  this.setState({
    data: this.shuffleData(data),
    score: newScore,
    topScore: newTopScore
  })
}

resetData = data => {
  const resetData = data.map( item => ({
    ...item, clicked: false 
  }));
return this.shuffleData(resetData);
}

shuffleData = data => {
  let i = data.length - 1
  while(i > 0) {
    let j = Math.floor(Math.random() * ( i + 1));
    const temp = data[i];
    data[i] = data[j];
    data[j] = temp;
    i--
  }
  return data
};

 
  render () {
    return (
      <div>
        <Container>
          <Scoreboard
            score = {this.state.score}
            topScore = {this.state.topScore}
          />
          {this.state.data.map(item => (
            <ClickItem
              key={item.id}
              id={item.id}
              handleClick={this.handleClick}
              image={item.image}
              // shake = {item.shake}
            />
          ))}
        </Container>
      </div>
    )
  }
}

export default Game
