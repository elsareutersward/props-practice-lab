import React, { useState } from 'react'
import './index.css';
import './Card1.css';
import './Card2.css';
import './Card3.css';
import { CardFirst } from './CardFirst';
import { CardSecond } from './CardSecond';

export const App = () => {
  const [lemonState, setLemonState] = useState(true)
  const [rocketState, setRocketState] = useState(true)
  const [doggyState, setDoggyState] = useState(true)

  return (
    <div className="App">
      <div className="cardContainer">
        {lemonState === true &&
          <CardFirst
            cardTop="cardTop1"
            title="title1"
            titleText="Lemon"
            emoji="🍋"
            cardBottom="cardBottom1"
            subtitleText="This is a really tasty fruit."
            button="button1"
            changeState={() => setLemonState(false)}
            buttonText="ORDER NOW" 
          />
        }
        {
          lemonState === false &&
          <CardSecond 
            cardTop="cardTop1"
            title="title1"
            titleText="Lemon"
            emoji="🍋"
            cardBottom="cardBottom1"
          />
        }
        {rocketState === true &&
          <CardFirst
            cardTop="cardTop2"
            title="title2"
            titleText="Rocket"
            emoji="🚀"
            cardBottom="cardBottom2"
            subtitleText="Join us into the outer space!"
            button="button2"
            changeState={() => setRocketState(false)}
            buttonText="BOOK SEAT"
          />
        }
        {
          rocketState === false &&
          <CardSecond 
            cardTop="cardTop2"
            title="title2"
            titleText="Rocket"
            emoji="🚀"
            cardBottom="cardBottom2"
          />
        }
        {doggyState === true &&
          <CardFirst
            cardTop="cardTop3"
            title="title3"
            titleText="Doggy"
            emoji="🐶"
            cardBottom="cardBottom3"
            subtitleText="This is a really cute puppy!"
            button="button3"
            changeState={() => setDoggyState(false)}
            buttonText="ADOPT ME" 
          />
        }
        {
          doggyState === false &&
          <CardSecond 
            cardTop="cardTop3"
            title="title3"
            titleText="Doggy"
            emoji="🐶"
            cardBottom="cardBottom3"
          />
        }
      </div>

    </div>
  )
}
