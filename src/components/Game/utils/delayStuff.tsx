import { GAME_CARDS } from '../Game'
import { compareDecisions } from "./compareDecisions";
import { Card } from '../../../App';

function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
}

export async function delayAnouncement(decision: Card, houseDecision: Card, setScore: Function, setResult: Function) {
    setTimeout(() => {
        setResult(compareDecisions(decision, houseDecision, setScore));
    }, 1000)
}

export async function delayDecision(setHouseDecision: Function) {
    setTimeout(() => {
        setHouseDecision(GAME_CARDS[getRandomInt(3)]);
    }, 1000)
}