import React, { useState } from 'react'
import styles from './Rules.module.css'

type Props = {}

const Rules = (props: Props) => {
    const [showRules, setShowRules] = useState(false);

    return (
        <div className={styles.RulesContainer}>
            <button className={styles.RulesButton}>Rules</button>
        </div>
    )
}

export default Rules