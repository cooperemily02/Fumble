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
