const counterFactory = (initialValue) => {
    return () => ++initialValue;
}

const fromZero = counterFactory(0);
const fromTwenty = counterFactory(20);

fromZero();

const loanFactory = (rate) => {
    return (principle, numberOfInstallments) => {
        return rate * principle * numberOfInstallments / 100
    }
}

const carEmiCalc = loanFactory(8);
const homeEmiCalc = loanFactory(9);
const personalEmiCalc = loanFactory(16);

carEmiCalc(10000, 12);