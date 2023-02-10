import styles from './GameCard.module.css'

type Props = {
    name: string;
    svg: string;
    color: string;
    radiant: string;
    setPlayerDecision?: Function;
    style?: boolean;
}

const winnerShadow = ",0px 0px 0px 30px rgba(255,255,255,.033), 0px 0px 0px 60px rgba(255,255,255,.033), 0px 0px 0px 90px rgba(255,255,255,.033)"

const GameCard = ({ name, svg, color, radiant, setPlayerDecision, style }: Props) => {
    return (
        <div
            className={styles.GameCardContainer}
            style={
                {
                    background: "linear-gradient(" + radiant + ")",
                    boxShadow: "0 6px 0px 2px " + color + ", 0 6px 0px 2px black " + (style ? winnerShadow : "")
                }
            }
            aria-pulsate={style ? true : false}
            onClick={setPlayerDecision ? () => setPlayerDecision({
                name: name,
                color: color,
                svg: svg,
                radiant: radiant
            }) : undefined}
        >
            <div className={styles.ImgContainer}>
                <img className={styles.Img} src={svg} alt={name} />
            </div>
        </div>

    )
}

export default GameCard


/*<div className={styles.GameCardContainer} style={{ border: "1em solid " + " yellow" }}>
        <div className={styles.ImgContainer}>
            <img style={{ width: "100%", height: "100%" }} src={svg} alt="scissors" />
        </div>
</div>*/