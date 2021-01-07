import React, { useState } from 'react'
// import TinderCard from '../react-tinder-card/index'
import TinderCard from 'react-tinder-card'

const db = [
  {
    name: 'Taco Bell',
    url: './img/richard.jpg',
    price: 1
  },
  {
    name: 'Olive Garden',
    url: './img/erlich.jpg',
    price: 2
  },
  {
    name: 'Chipotle',
    url: './img/monica.jpg',
    price: 3
  },
  {
    name: 'Dominoes',
    url: './img/jared.jpg',
    price: 4
  },
  {
    name: 'Wawa',
    url: './img/dinesh.jpg',
    price: 5
  }
]

var swipedRight = []
var swipes = 0
function Simple () {
  const characters = db

  const [lastDirection, setLastDirection] = useState()


  const swiped = (direction, nameToDelete) => {
      if(direction === 'right'){
        swipes++
        swipedRight.push(nameToDelete)
        var length = swipedRight.length
        console.log(swipedRight)
        console.log('Test')
        // give users a minimum number of swipes before giving them the best deal
        if(swipes === 2) {
          console.log('done')
        }
      }
      // const toBeRemoved = cardsLeft[cardsLeft.length - 1].name // Find the card object to be removed
      // const index = db.map(person => person.name).indexOf(toBeRemoved) // Find the index of which to make the reference to
      // alreadyRemoved.push(toBeRemoved) // Make sure the next card gets removed next time if this card do not have time to exit the screen
      // childRefs[index].current.swipe(dir) // Swipe the card!
    console.log('removing: ' + nameToDelete)
    setLastDirection(direction)
  }

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!')
  }

  return (
    <div className='readable'>
      <link href='https://fonts.googleapis.com/css?family=Damion&display=swap' rel='stylesheet' />
      <link href='https://fonts.googleapis.com/css?family=Alatsi&display=swap' rel='stylesheet' />
      <link href='https://fonts.googleapis.com/css2?family=Staatliches&display=swap' rel='stylesheet' />
      
      <h1>Swipe right on your fave deals!</h1>
      <div className='cardContainer'>
        {characters.map((character) =>
          <TinderCard className='swipe' key={character.name} onSwipe={(dir) => swiped(dir, character.name)} onCardLeftScreen={() => outOfFrame(character.name)}>
            <div style={{ backgroundImage: 'url(' + character.url + ')' }} className='card'>
              <h2>{character.name} {character.price}</h2>
            </div>
          </TinderCard>
        )}
      </div>
      {lastDirection ? <h2 className='infoText'>You swiped {lastDirection}</h2> : <h2 className='infoText' />}
    </div>
  ) 
}

export default Simple
