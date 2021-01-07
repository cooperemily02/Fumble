import React, { useState } from 'react'
import './App.css'
import Switch from 'react-ios-switch'

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
                <div id = "modalcontent" class="modal-content">
                  <span class="close">&times;</span>
                      <h1 id = "banner"> "" </h1>
                      <p id="deal" >NEED TO ADD THE DEAL HERE</p>
                      <p id="description"></p>
                      <p id="finePrint"></p>
                      <a id="url" href=""></a>
                </div>
            </div>
      </div>
    </div>
  )
}

export default App
