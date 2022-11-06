import React from 'react'
import { useState } from 'react';
import '../styles/App.css';
const App = () => {

  const [innerelement, setInnerelement] = useState("Marco");
  const [innerelement2, setInnerelement2] = useState("Polo");

  function setter() {
    let temp = innerelement;
    setInnerelement(innerelement2);
    setInnerelement2(temp);
  }

  return (
    <div id="main">
      <h1 id='marco-polo'>{innerelement}</h1>
      <button id='marco-polo-toggler' onClick={setter} >{innerelement2}</button>
    </div>
  )
}


export default App;
