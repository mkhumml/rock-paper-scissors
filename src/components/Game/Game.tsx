import React from 'react'
import GameCard from './GameCard/GameCard';
import styles from './Game.module.css'
import rockSvg from '../../images/icon-rock.svg'
import paperSvg from '../../images/icon-paper.svg'
import scissorsSvg from '../../images/icon-scissors.svg'
import { Card } from '../../App';
import Result from './Result/Result';

type Props = {
    setPlayerDecision: Function;
    playerDecision: Card | undefined;
    setScore: Function;
}

const Game = ({ setPlayerDecision, playerDecision, setScore }: Props) => {

    return (
        <div>
            <div className={styles.GameContainer} style={{ backgroundImage: (!playerDecision ? "url('../../images/bg-triangle.svg')" : "") }}>
                {!playerDecision && GAME_CARDS.map(e => <GameCard setPlayerDecision={setPlayerDecision} name={e.name} svg={e.svg} color={e.color} radiant={e.radiant} />)}
            </div>
            {playerDecision && <Result setScore={setScore} decision={playerDecision} />}
        </div>
    )
}

export default Game


export const GAME_CARDS = [
    { name: 'Scissors', svg: scissorsSvg, radiant: 'hsl(39, 89%, 49%), hsl(40, 84%, 53%)', color: 'hsl(39, 89%, 49%)' },
    { name: 'Rock', svg: rockSvg, radiant: 'hsl(349, 71%, 52%) , hsl(349, 70%, 56%)', color: 'hsl(349, 71%, 52%)' },
    { name: 'Paper', svg: paperSvg, radiant: 'hsl(230, 89%, 62%) , hsl(230, 89%, 65%)', color: 'hsl(230, 89%, 62%)' }
]