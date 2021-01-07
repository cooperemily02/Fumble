import React, { useState, useEffect } from 'react'
// import TinderCard from '../react-tinder-card/index'
import TinderCard from 'react-tinder-card'
import ReactDOM from 'react-dom';
const MongoClient = require('mongodb').MongoClient
//MongoClient.connect('mongodb+srv://shambhavir:Success2021!!@cluster0.xrzxq.mongodb.net/fumble?retryWrites=true&w=majority'
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
  },
  {
    name: 'comfort food',
    type: 'category'
  }
]

// function callAPI () {
//   if (true) {
//     fetch('https://api.geoapify.com/v2/places?categories=commercial.food_and_drink&filter=circle:-72.519867,42.375801,5000&limit=20&apiKey=1af6a8fa67c94cba9c73377e2866a995').then(function (response) {
//       return response.json();
//     }).then(function (result) {
//       for(var i = 0; i<result.features.length; i++){
//         arrayofplaces.push({name: result.features[i].properties.name, url: './img/richard.jpg', price: 1})
//       }
//     });
//   }
// }

// var swipedRight = []
// var currentChoices = [0, 0, 0, 0] 
// var swipes = 0
function Simple () {
  var temparray = []
  const [arrayofplaces, setarray] = useState([{name: 'No Name', url: '', price_saved: 0}])
  useEffect(() => {
    fetch('https://api.discountapi.com/v2/deals?category_slugs=restaurants&location=longmeadow&api_key=KiyYblAt').then(function (response) {
      return response.json();
    }).then(function (result) {
      console.log(result)
      for(var i = 0; i<result.deals.length; i++){
        temparray.push({name: result.deals[i].deal.short_title, url: result.deals[i].deal.image_url, price_saved: result.deals[i].deal.discount_amount})
      }
      console.log(temparray)
      setarray(temparray)
    });
  });
  
    
  // const arrayofplaces = useState([])
  // callAPI(() =>{
  //   fetch('https://api.geoapify.com/v2/places?categories=commercial.food_and_drink&filter=circle:-72.519867,42.375801,5000&limit=20&apiKey=1af6a8fa67c94cba9c73377e2866a995').then(function (response) {
  //     return response.json();
  //   }).then(function (result) {
  //     for(var i = 0; i<result.features.length; i++){
  //       arrayofplaces.push({name: result.features[i].properties.name, url: './img/richard.jpg', price: 1})
  //     }
  //   });
  // }, []);
  // console.log(arrayofplaces)
 // const characters = db
  const [lastDirection, setLastDirection] = useState()
  // var characters = []
  // characters = arrayofplaces

  var swipedRight = []
  var price_saved_vals = []
  var swipes = 0
  const swiped = (direction, nameToDelete, price_saved) => {
      if(direction === 'right'){
        swipes++
        swipedRight.push({name: nameToDelete, savings:price_saved})
        price_saved_vals.push(price_saved)
        // var length = swipedRight.length
        console.log(swipedRight)
        // console.log('Test')
        // give users a minimum number of swipes before giving them the best deal
        // var i = 0
        // while(i < 4)
        // {
        //   swipes++
        //   swipedRight.push(nameToDelete)
        //   var length = swipedRight.length
        //   //console.log(swipedRight)
        //   //console.log('Test')
        //   currentChoices[i] = db.price 
        //   i++; 
        // }
        
        // for(i = 0; i < currentChoices.length; i++)
        //   console.log(currentChoices[i]); 
        if(swipes === 4) {
          console.log('done')
          var modal = document.getElementById("myModal");
          // Get the <span> element that closes the modal
          var span = document.getElementsByClassName("close")[0];
          modal.style.display = "block";
          // When the user clicks on <span> (x), close the modal
          span.onclick = function() {
              modal.style.display = "none";
          }
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
        {arrayofplaces.map((place) =>
          <TinderCard className='swipe' key={place.name} onSwipe={(dir) => swiped(dir, place.name, place.price)} onCardLeftScreen={() => outOfFrame(place.name)}>
            <div style={{ backgroundImage: 'url(' + place.url + ')' }} className='card'>
              <h2>{place.name}</h2>
            </div>
          </TinderCard>
        )}
      </div>
      {lastDirection ? <h2 className='infoText'>You swiped {lastDirection}</h2> : <h2 className='infoText' />}
    </div>
  )
  
  // return (
  //   <div className='readable'>
  //     <link href='https://fonts.googleapis.com/css?family=Damion&display=swap' rel='stylesheet' />
  //     <link href='https://fonts.googleapis.com/css?family=Alatsi&display=swap' rel='stylesheet' />
  //     <link href='https://fonts.googleapis.com/css2?family=Staatliches&display=swap' rel='stylesheet' />
      
  //     <h1>Swipe right on your fave deals!</h1>
  //     <div className='cardContainer'>
  //       {characters.map((charact) =>
  //         <TinderCard className='swipe' key={place.name} onSwipe={(dir) => swiped(dir, place.name)} onCardLeftScreen={() => outOfFrame(place.name)}>
  //           <div style={{ backgroundImage: 'url(' + place.url + ')' }} className='card'>
  //             <h2>{place.name} {place.sprice}</h2>
  //           </div>
  //         </TinderCard>
  //       )}
  //     </div>
  //     {lastDirection ? <h2 className='infoText'>You swiped {lastDirection}</h2> : <h2 className='infoText' />}
  //   </div>
  // ) 
}

export default Simple
