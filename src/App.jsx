//import { useState } from 'react'

import './App.css'
import Header from './Components/Header' //here I am importing the header object/component. Note that I don't need the file type in the path
//if i want to import one class at a time; the line below offers less control
//import Button from 'react-bootstrap/Button'

function App() {

  return (
    <>
      {/* Here I am adding my 'Header' component; note adding components is like adding regular html elements. I can also use <Header></Header> or self closing syntax <Header .>*/}
      <div>
        <Header></Header>
      </div>
    </>
  )
}

export default App;