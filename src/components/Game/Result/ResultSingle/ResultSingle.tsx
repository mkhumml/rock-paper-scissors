import React from 'react'
import { Card } from '../../../../App'
import GameCard from '../../GameCard/GameCard'
import styles from './ResultSingle.module.css'

type Props = {
    decision: Card | undefined;
    heading: string;
    style?: boolean;
}

const ResultSingle = ({ decision, heading, style }: Props) => {
    return (
        <div className={styles.ResultSingleContainer}>
            <p className={styles.ResultSingleHeading}>{heading}</p>
            {decision ?
                <GameCard style={style} name={decision.name} color={decision.color} radiant={decision.radiant} svg={decision.svg} />
                : <div className={styles.Preview}></div>}

        </div>
    )
}

export default ResultSingle