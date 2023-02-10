import { Card } from '../../../App'
import styles from './Result.module.css'
import ResultSingle from './ResultSingle/ResultSingle'
import useDelays from '../../../hooks/useDelays'

type Props = {
    decision: Card
    setScore: Function
}

const Result = ({ decision, setScore }: Props) => {
    const { result, houseDecision } = useDelays({ decision, setScore });
    return (
        <div className={styles.ResultContainer}>
            <ResultSingle style={result === "YOU WIN" ? true : false} decision={decision} heading="YOU PICKED" />
            {result ?
                <div className={styles.ResultText}>
                    <p>{result}</p>
                    <button onClick={() => window.location.reload()}>Play Again</button>
                </div> : null}
            <ResultSingle style={result === "YOU LOSE" ? true : false} decision={houseDecision} heading="THE HOUSE PICKED" />
        </div>
    )
}

export default Result