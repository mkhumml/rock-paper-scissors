import { useState } from 'react';
import Game from './components/Game/Game';
import Header from './components/Header/Header'
import Rules from './components/Rules/Rules';
import './App.css'

export interface Card {
  name: string;
  svg: string;
  radiant: string;
  color: string;
}

export interface Cards {
  Card: Card[]
}

function App() {
  const [score, setScore] = useState(12);
  const [playerDecision, setPlayerDecision] = useState<Card | undefined>(undefined)


  return (
    <div className="App">
      <div className='Layout'>
        <Header score={score} />
        <Game setScore={setScore} playerDecision={playerDecision} setPlayerDecision={setPlayerDecision} />
        <Rules />
      </div>
    </div>
  );
}

export default App;
