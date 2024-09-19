import { useState } from 'react'
import Cards from './components/cards';
import Header from './components/header';
import './App.css'


function App() {
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  return (
    <div className='app'>
      <Header bestScore={bestScore} score={score}></Header>
      <Cards bestScore={bestScore} score={score} setScore={setScore} setBestScore={setBestScore}></Cards>
    </div>
  );
}


export default App

