import { INTEREST_RATES } from "./data.js";
import loanFactory from "./loan-factory.js";

const carEMICalc = loanFactory(INTEREST_RATES.CAR);
const homeEMICalc = loanFactory(INTEREST_RATES.HOME);
const personalEMICalc = loanFactory(INTEREST_RATES.PERSONAL);