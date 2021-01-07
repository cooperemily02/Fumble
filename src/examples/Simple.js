import React, { useState, useEffect } from "react";
// import TinderCard from '../react-tinder-card/index'
import TinderCard from "react-tinder-card";
import ReactDOM from "react-dom";

var queried = false;

// var citySearch =  document.getElementById("city").value
// var stateSearch =  document.getElementById("state").value
// var searchcombination = citySearch + ',' + stateSearch
// searchcombination = searchcombination.toLowerCase()

var count = 0;
var savedforlater = []
function Simple() {
  console.log("called");
  var temparray = [];
  const [arrayofplaces, setarray] = useState([
    {
      name: "Finding you deals...",
      imageurl: "",
      price_saved: 0,
      description: "",
      fineprint: "",
      url: "",
    },
  ]);
  useEffect(() => {
    if (!queried) {
      fetch(
        "https://api.discountapi.com/v2/deals?category_slugs=restaurants&location=${searchcombination}&api_key=KiyYblAt"
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
              imageurl: result.deals[i].deal.image_url,
              price_saved: result.deals[i].deal.discount_amount,
              description: result.deals[i].deal.description,
              fineprint: result.deals[i].deal.fineprint,
              url: result.deals[i].deal.url,
            });
          }
          setarray(temparray);
        });
    }
  });

  const [lastDirection, setLastDirection] = useState();
  var swipedRight = [];
  var price_saved_vals = [];
  var swipes = 0;
    
  const clicked = (
    title,
    description,
    fineprint
  ) => {
      var modal = document.getElementById("myModal");
      var modaltext = document.getElementById("deal");
      document.getElementById("banner").textContent = "More Information"
      document.getElementById("deal").textContent = title;
      document.getElementById("description").textContent = description;
      document.getElementById("finePrint").textContent = fineprint;
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
    if(arrayofplaces.length == count)
    {
      alert("You're all out of cards :(");
    }
    if(direction === "up" || direction === "down")
    {
        savedforlater.push({
                name: nameToDelete,
                description: descriptiona,
                fineprint: fineprinta,
                url: urla
        
        })
    }
    if (direction === "right") {
      swipes++;
      swipedRight.push({
        name: nameToDelete,
        savings: price_saved,
        description: descriptiona,
        fineprint: fineprinta,
        url: urla,
      });
      // price_saved_vals.push(price_saved)
      // var length = swipedRight.length
      console.log(swipedRight);
      // console.log(price_saved_vals)
      if (swipes === 4) {
        // var ans = findbestdeal(swipedRight)
        var highest = Number.MIN_VALUE;
        var ans = "test";

        for (var i = 0; i < swipedRight.length; i++) {
          // console.log("entering function")
          // console.log(swipedRight[i].savings)

          if (swipedRight[i].savings > highest) {
            // console.log("entering if")
            // console.log(swipedRight[i].savings)
            highest = swipedRight[i].savings;
            ans = swipedRight[i];
            // console.log("printing rest")
            // console.log(ans)
            // console.log("printing place")
            // console.log(swipedRight[i].name)
          }
        }
        // console.log(typeof(ans))
        // console.log(ans)
        var modal = document.getElementById("myModal");
        var modaltext = document.getElementById("deal");
        document.getElementById("banner").textContent = "HERE IS YOUR DEAL WOOOO"
        document.getElementById("deal").textContent = ans.name;
        document.getElementById("description").textContent = ans.description;
        document.getElementById("finePrint").textContent = ans.fineprint;
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
                place.fineprint,
                place.url
              )
            }
            onCardLeftScreen={() => outOfFrame(place.name)}
          >
            <div
              style={{ backgroundImage: "url(" + place.image_url + ")" }}
              className="card"
            >
              <h2>{place.name}</h2>
                    <button onClick=
                        {
                            () => clicked
                                (
                                    place.name,
                                    place.description,
                                    place.fineprint
                                )
                        }> Details </button>

            </div>
          </TinderCard>
        ))}
      </div>
      {lastDirection ? (
        <h2 className="infoText">You swiped {lastDirection}</h2>
      ) : (
        <h2 className="infoText" />
      )}
    </div>
  );
}

export default Simple;
