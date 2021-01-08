import React, { useState } from 'react'
import './App.css'
import Switch from 'react-ios-switch'
import Carousel from 'react-bootstrap/Carousel'
import Advanced from './examples/Advanced'
import Simple from './examples/Simple'



function App () {
  return (
    <div className='app'>
        <Simple/>
      <div className='row'>
            {/* <div id="locationModal" class="modal">
                <div id = "locModal" class="modal-content">
                  <span class="close">&times;</span>
                  <label for="exampleFormControlSelect1"> Enter your city: &nbsp;</label>
                  <input type="Search" class="form-control" required="true" id="city" placeholder="arlington"></input>
                  <label for="exampleFormControlSelect1"> Enter your state: &nbsp;</label>
                  <input type="Search" class="form-control" required="true" id="state" placeholder="va"></input>
                </div> */}
                
                
            {/* </div> */}
            <div id="myModal" class="modal">
                <div id = "modalcontent" class="modal-content2">
                  <span class="close">&times;</span>
                      <h1 id = "banner"> "" </h1>
                      <h2 id="deal" >NEED TO ADD THE DEAL HERE</h2>
                      <h2 id = "savings"> </h2>
                      <h3 id="description"></h3>
                      <p id="finePrint"></p>
                      <a id="url" href=""></a>
                </div>
            </div>
            <div id="savedModal" class="modal">
                <div id = "savedModalContent" class="modal-content">
                  <span class="close" id = "secondmodal">&times;</span>
                      <h1 id = "banner2"> You Have No Saved Deals </h1>
                      <div class="slider">
                          <div class="slides">
                            <div id="slide 1">
                                <h2 id = "name 1"></h2>
                                <h3 id = "desc 1"></h3>
                                <p id = "finepr 1"></p>
                                <a id = "url 1" href = ""></a>
                            </div>
                            <div id="slide 2">
                                  <h2 id = "name 2"></h2>
                                  <h3 id = "desc 2"></h3>
                                  <p id = "finepr 2"></p>
                                  <a id = "url 2" href = ""></a>
                            </div>
                            <div id="slide 3">
                                  <h2 id = "name 3"></h2>
                                  <h3 id = "desc 3"></h3>
                                  <p id = "finepr 3"></p>
                                  <a id = "url 3" href=""></a>
                            </div>
                            <div id="slide 4">
                                  <h2 id = "name 4"></h2>
                                  <h3 id = "desc 4"></h3>
                                  <p id = "finepr 4"></p>
                                  <a id = "url 4" href=""></a>
                            </div>
                            <div id="slide 5">
                                     <h2 id = "name 5"></h2>
                                     <h3 id = "desc 5"></h3>
                                     <p id = "finepr 5"></p>
                                     <a id = "url 5" href=""></a>
                            </div>
                          </div>
                        </div>
                </div>
            </div>
      </div>
      <div>
        
      </div>

    </div>
   

  )
}

export default App
