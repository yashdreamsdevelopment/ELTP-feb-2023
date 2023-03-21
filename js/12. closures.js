const counterFactory = (initialValue) => {
    return () => ++initialValue;
}

const fromZero = counterFactory(0);
const fromTwenty = counterFactory(20);

fromZero();

const loanFactory = (rate) => {
    return [
        (principle, numberOfInstallments) => {
            return rate * principle * numberOfInstallments / 100
        },
        newRate => rate = newRate
    ];
}

const [carEmiCalc, updateCarRate] = loanFactory(8);
const [homeEmiCalc, updateHomeRate] = loanFactory(9);
const [personalEmiCalc, updatePersonalRate] = loanFactory(16);

carEmiCalc(10000, 12);

updateCarRate(12);

carEmiCalc(10000, 12);
