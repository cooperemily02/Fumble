import React, { useState } from 'react'
import './App.css'
import Switch from 'react-ios-switch'

import Advanced from './examples/Advanced'
import Simple from './examples/Simple'



function App () {
  const [arrayofplaces, setplaces]  =  useState(true)
  const [showAdvanced, setShowAdvanced] = useState(true)

  return (
    <div className='app'>
        <Simple/>
      <div className='row'>
        {/* <p style={{ color: '#fff' }}>Show advanced example</p> <Switch checked={showAdvanced} onChange={setShowAdvanced} /> */}
            <div id="myModal" class="modal">
                <div class="modal-content">
                  <span class="close">&times;</span>
                  <p>NEED TO ADD THE DEAL HERE</p>
                </div>
            </div>
      </div>
    </div>
  )
}

export default App
