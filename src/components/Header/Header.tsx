import styles from './Header.module.css'

type Props = {
    score: number;
}

const Header = ({ score }: Props) => {
    return (
        <div className={styles.Header}>
            <div className={styles.HeadingsContainer}>
                <h1>ROCK</h1>
                <h1>PAPER</h1>
                <h1>SCISSORS</h1>
            </div>
            <div className={styles.ScoreContainer}>
                <p>Score</p>
                <h2>{score}</h2>
            </div>
        </div>
    )
}

export default Header