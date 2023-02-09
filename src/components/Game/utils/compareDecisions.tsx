import { Card } from "../../../App";

export function compareDecisions(decision: Card, houseDecision: Card, setScore: Function) {
    switch (decision.name) {
        case "Rock":
            switch (houseDecision.name) {
                case "Rock":
                    return "A DRAW";
                case "Paper":
                    return "YOU LOSE"
                case "Scissors":
                    return "YOU WIN"
                default: break;
            }
            break;
        case "Paper":
            switch (houseDecision.name) {
                case "Rock":
                    return "YOU WIN";
                case "Paper":
                    return "A DRAW"
                case "Scissors":
                    return "YOU LOSE"
                default: break;
            }
            break;
        case "Scissors":
            switch (houseDecision.name) {
                case "Rock":
                    return "YOU LOSE";
                case "Paper":
                    return "YOU WIN"
                case "Scissors":
                    return "A DRAW"
                default: break;
            }
            break;
        default: break;
    }
}