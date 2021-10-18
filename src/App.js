import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import GifImage from './gifimage';

function App() {

  const [name, setName] = useState("enter gif name")
  const [tempName, setTempName] = useState("enter gif name")
  const [randomFlag, setRandomFlag] = useState(true)
  const [favouriteName, setFavouriteName] = useState('')
  const [currentUrl, setCurrentUrl] = useState('')

  function handleSubmit() {
    console.log("handle submit")
    setName(tempName)
    console.log(tempName)
    if (tempName != '') {
      setRandomFlag(false)
    }
    else {
      console.log("trigger random")
      setRandomFlag(Math.random())
    }
  }

  function handleName(event) {
    setTempName(event.target.value)
  }

  function randomGif(event) {
    console.log("random gif")
    setRandomFlag(Math.random())
    setName(Math.random())
  }

  function randomSearch(event) {
    console.log("random gif related")
    setRandomFlag(Math.random())
    setName(tempName)
  }

  function favouriteGif() {
    setFavouriteName(currentUrl)
    console.log(favouriteName)
  }

  function loadFavourite(event) {
    console.log(favouriteName)
    if (favouriteName != '') {
      setRandomFlag(false)
      setName(favouriteName)
    }
    else {
      console.log("trigger random")
      setRandomFlag(Math.random())
    }
  }

  return (
    <div className="App">
      <input name="name" value={tempName} onChange={handleName} type='text' />
      <input type='submit' onClick={handleSubmit} />
      <button onClick={randomSearch}>generate random gif (but with related keyword)</button>
      <button onClick={randomGif}>generate random gif</button>
      <button onClick={favouriteGif}>favourite gif</button>
      <button onClick={loadFavourite}>load favourite</button>
      <GifImage randomFlag={randomFlag} name={name} randomFlag={randomFlag} setCurrentUrl={setCurrentUrl}/>
    </div>
  );
}

export default App;
