import { brain } from "./storage";

// service
// processing / business logic
export const processClosureExplanation = (nameOfCaller: string) => {
    const data = brain.closure;

    if(nameOfCaller === "Dipali") {
        return "kjadshkjhdk ;alskd;las explain explain explain " + data;
    } else if (nameOfCaller === "Shubham") {
        return data + "some other explanation";
    } else {
        return "huh?"
    }
}

export const processMusicExplanation = () => {
    return "circle of fifths";
}