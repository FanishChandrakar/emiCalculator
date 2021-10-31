type toCurrencyFormatType = (value: number) => string;
export const toCurrencyFormat: toCurrencyFormatType = value =>
    `${value}`.replace(/\B(?=(?:(\d\d)+(\d)(?!\d))+(?!\d))/g, ',');

type RateType = (percent: number) => number;
const Rate: RateType = percent => percent / 12 / 100;

type EMIType = (amount: number, percent: number, years: number) => number;
export const EMI: EMIType = (amount, percent, years) => {
    const period = years * 12;
    const rate = Rate(percent);
    return (amount * rate * Math.pow(1 + rate, period)) / (Math.pow(1 + rate, period) - 1);
};
