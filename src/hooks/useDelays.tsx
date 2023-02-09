import React, { useState, useEffect } from 'react'
import { delayDecision, delayAnouncement } from '../components/Game/utils/delayStuff'
import { Card } from '../App'

type Props = {
    decision: Card;
    setScore: Function;
}

const useDelays = ({ decision, setScore }: Props) => {
    const [houseDecision, setHouseDecision] = useState<Card | undefined>(undefined)
    const [result, setResult] = useState<string | undefined>(undefined);

    useEffect(() => {
        delayDecision(setHouseDecision);
    }, [])

    useEffect(() => {
        if (houseDecision && decision) {
            delayAnouncement(decision, houseDecision, setScore, setResult);
        }
    }, [houseDecision, decision, setScore])

    return { houseDecision, result }
}

export default useDelays