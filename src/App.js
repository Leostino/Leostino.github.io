import React from "react";

import Container from "./components/Container";

import Topdiv from "./components/Topdiv";

import ImageCard from "./components/ImageCard";

import images from "./images.json";


// the App class

class App extends React.Component {

  // variables in state obj
  
  state = {

    images: images,
    score: 0,
    topScore: 0,
    maxScore: 8,
    isCorrect: true,
    message:""
  }


// click method with id parameter

  clickImage = id => {

    console.log(id)

    const character = this.state.images;

    // store clicked image in an array clickedImage

    const clickedImage = character.filter(image => image.id === id);

    // if statement to check if clicked field is true or false

    if (!clickedImage[0].clicked) {

      // switch clicked to true

      clickedImage[0].clicked = true;

      console.log(clickedImage)

      // call correct click method to update state

      this.correctClick();

      // shuffle the images

      this.shuffleImages(images);

      // update state

      this.setState({images})

    }else{

      // incorrect click method if clicked field is already true

      this.incorrectClick()

    }  


  }


  // this method shuffles images if user clicked right

  shuffleImages = images => {

    images.sort((a, b) => {

      return 0.5 - Math.random();

    });

  }


  // when user clicks right this method is called

  correctClick = () => {

    // update isCorrect
    
    this.setState({isCorrect: true})

    

    // updating top score

    if (this.state.score + 1 > this.state.topScore) {

      this.setState({ topScore: this.state.topScore + 1 });

    }

    // update score and check if the game is won or lost

    if (this.state.score + 1 >= this.state.maxScore) {
      
      this.setState({

        score: this.state.score + 1,

        message: "CONGRATS! YOU WIN!!!",

        topScore: 0

      });

      this.reset()

    } else {

      this.setState({

        score: this.state.score + 1,

        message: "YOU CLICKED CORRECTLY!"
      });
    }
  }


  // when the user guesses wrong, this method is called

  incorrectClick = () => {

    this.setState({

      isCorrect: false,

      message: "WRONG! WRONG!! WRONG!!!"
    
    })

    this.reset();

  }


  // method that resets the game

  reset = () => {

    const images = this.state.images;

    for (let i = 0; i < images.length; i++) {

      images[i].clicked = false;

    }

    this.setState({ score: 0 });

  }



  // method that renders the components on the page

  render () {

    return (
      <Container>
        <Topdiv 
          message={this.state.message}
          topScore={this.state.topScore}
          score={this.state.score}
        />
        {this.state.images.map(image => (
        
          <ImageCard
            clickImage={this.clickImage}          
            key={image.id}
            id={image.id}
            name={image.name}      
            image={image.image}              
          />
        ))}
       
      </Container>
    )
  }

}



export default App;
