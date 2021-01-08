import React, { useState, useEffect } from "react";
// import TinderCard from '../react-tinder-card/index'
import TinderCard from "react-tinder-card";
import ReactDOM from "react-dom";
import ConfettiGenerator from "confetti-js";

var queried = false
// var searchcombination = 'richmond,va'

var count = 0;
var savedforlater = [] // contains the saved deals
// var url_pics = ''
// // --- random number for images
// const food = [
//   {
//           img: 'Richard Hendricks',
//           url: "/docs/img/dinesh.jpg",
//           num: 0
//         },
//         {
//           img: 'Erlich Bachman',
//           url: "/docs/img/erlich.jpg",
//           num: 1
    
//         }
// ]
// function getRandomNumberBetween(min,max){
//   var num = Math.floor(Math.random()*(max-min+1)+min)
//   url_pics = food[num].url
//   console.log(url_pics)
// }
// getRandomNumberBetween(0,1);

// ---

function Simple() {
  console.log(temparray)
  //console.log("searchcombination: " + searchcombination)
  var temparray = []
  const [arrayofplaces, setarray] = useState([
    {
      name: "Finding you deals...",
      price_saved: 0,
      description: "",
      fine_print: "",
    },
  ]);
    
  var [searchcombination, setlocation] = useState('mclean,va')

  useEffect(() => {
    console.log("in useEffect")
    if (!queried) {

      fetch(
        "https://api.discountapi.com/v2/deals?category_slugs=restaurants&location=" + searchcombination + "&api_key=KiyYblAt"
      )
        .then(function (response) {
          return response.json();
        })
        .then(function (result) {
          console.log(result);
          queried = true;
          for (var i = 0; i < result.deals.length; i++) {
            temparray.push({
              name: result.deals[i].deal.title,
              price_saved: result.deals[i].deal.discount_amount,
              description: result.deals[i].deal.description,
              fine_print: result.deals[i].deal.fine_print,
              url: result.deals[i].deal.url,
            });
          }
          setarray(temparray);
        });
      }
  }, [searchcombination])

  const [lastDirection, setLastDirection] = useState();
  var swipedRight = []; // tracks the deals that the user liked
  var swipes = 0; // tracks the number of swipes used

  // connected to the search button - updates the location chosen by the user
  const changelocation = () => {

    console.log("in the search")

    var city = document.getElementById("citySearch").value
    var state = document.getElementById("stateSearch").value
    searchcombination = city + ',' + state
    searchcombination = searchcombination.toLowerCase()
    console.log(searchcombination)
    queried = false
    setlocation(searchcombination)
  }

  const savedclick = (
    arrayofsaved
  )  => {
  var modal = document.getElementById("savedModal");
  var span = document.getElementById("secondmodal");
  modal.style.display = "block";
  span.onclick = function () {
    modal.style.display = "none";
    };
  }

  // called every time the details button is clicked - displays a modal containing a
  // more detailed description of the deal
  const clicked = (
    title,
    description,
    fine_print
  ) => {
      var modal = document.getElementById("myModal");
      var modaltext = document.getElementById("deal");
      document.getElementById("banner").textContent = "More Information"
      document.getElementById("deal").textContent = title;
      document.getElementById("description").textContent = description;
      document.getElementById("finePrint").textContent = fine_print;
      // Get the <span> element that closes the modal
      var span = document.getElementsByClassName("close")[0];
      modal.style.display = "block";
      // When the user clicks on <span> (x), close the modal
      span.onclick = function () {
          modal.style.display = "none";
      };
  };
    
  const swiped = (
    direction,
    nameToDelete,
    price_saved,
    descriptiona,
    fineprinta,
    urla
  ) => {
        if  (direction === "up" || direction === "down"){
              if  (savedforlater.length  <  5){
                    savedforlater.push({
                    name: nameToDelete,
                    description: descriptiona,
                    fine_print: fineprinta,
                    })
                    var i = savedforlater.length
                  var elemid = "slide " + savedforlater.length;
                  var slide = document.getElementById(elemid);
                  slide.style.display = "block"
                  var banner = document.getElementById("banner2");
                  banner.innerHTML = "Your Saved Deals"
                  var name = document.getElementById("name " + i);
                  var desc = document.getElementById("desc " + i);
                  var finepr = document.getElementById("finepr " + i);
                  var url = document.getElementById("url " + i);

                  name.innerHTML = nameToDelete
                  desc.innerHTML = descriptiona;
                  finepr.innerHTML = fineprinta;
                  url.innerHTML = "Link"
                  url.setAttribute("href", urla)
                  url.setAttribute("target", "_blank");
            }
            else{
                  alert("Too many deals!")
              }
      }
    
    if (direction === "right") {
      swipes++;
      swipedRight.push({
        name: nameToDelete,
        savings: price_saved,
        description: descriptiona,
        fine_print: fineprinta,
        url: urla,
      });
      console.log(swipedRight);
      if (swipes === 4) {
        var highest = Number.MIN_VALUE;
        var ans = "test";

        for (var i = 0; i < swipedRight.length; i++) {
          if (swipedRight[i].savings > highest) {
            highest = swipedRight[i].savings;
            ans = swipedRight[i];
          }
        }
        var modal = document.getElementById("myModal");
        var modaltext = document.getElementById("deal");
        document.getElementById("banner").textContent = "HERE IS YOUR DEAL WOOOO"
        document.getElementById("deal").textContent = ans.name;
        document.getElementById("savings").textContent = "We Saved You: $" + ans.savings + " 🤑";
        document.getElementById("description").textContent = ans.description;
        document.getElementById("finePrint").textContent = ans.fine_print;
        document.getElementById("url").style.display = "block"
        document.getElementById("url").textContent = "Click here for link to deal";
        document.getElementById("url").setAttribute("href", ans.url);
        document.getElementById("url").setAttribute("target", "_blank");
        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];
        modal.style.display = "block";
        // When the user clicks on <span> (x), close the modal
        span.onclick = function () {
          document.getElementById("url").style.display = "none"
          modal.style.display = "none";
              swipes = 0;
              swipedRight = []
        };
      }
    }
    console.log("removing: " + nameToDelete);
    setLastDirection(direction);
    count++;
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
  };

  return (
    <div className="readable">
      <link
        href="https://fonts.googleapis.com/css?family=Damion&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Alatsi&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Staatliches&display=swap"
        rel="stylesheet"
          />
      <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300&display=swap" 
        rel="stylesheet"></link>
          
    <div className="text">
        <input className="form-entry" type="text" placeholder="Enter your city..." id="citySearch" />
        <input type="text" placeholder="Enter your state.." id="stateSearch" />
        <button type="button" onClick={() => changelocation()}>Search</button>
    </div>

      <h1>Swipe right on your fave deals!</h1>
      <div className="cardContainer">
        {arrayofplaces.map((place) => (

          <TinderCard
            className="swipe"
            key={place.name}
            onSwipe=
            {
              (dir) =>
              swiped
              (
                dir,
                place.name,
                place.price_saved,
                place.description,
                place.fine_print,
                place.url
              )
            }
            onCardLeftScreen={() => outOfFrame(place.name)}
            
          >
            
            <div
              // style={{ backgroundImage: "url(" + "http://clipart-library.com/img1/1439306.png" + ")" }}
              className="card"
            >
            
              <h2>{place.name}</h2>
                    <button onClick=
                        {
                            () => clicked
                                (
                                    place.name,
                                    place.description,
                                    place.fine_print
                                )
                        }> Details </button>
              
              <div className="imagecontainer">
                </div> 

            </div>
            
          </TinderCard>
        ))}
        <h3> You're Out Of Cards :(</h3>
        <h3> Thank You For Saving With Us! </h3>
      </div>
      {lastDirection ? (
        <h2 className="infoText">You swiped {lastDirection}</h2>
      ) : (
        <h2 className="infoText" />
      )}
      <button id = "savedcards" onClick = 
      {
        () => savedclick (savedforlater)
      }
      > See Your Saved Cards </button>
    </div>
  );
}

export default Simple;
