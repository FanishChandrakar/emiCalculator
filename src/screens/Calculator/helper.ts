type CurrencyConfigType = {
    locale?: string;
    decimalSeparator?: string;
    currencyPrefix?: string;
};
type toCurrencyFormatType = (value: number, config?: CurrencyConfigType) => string;
export const toCurrencyFormat: toCurrencyFormatType = (
    value,
    {locale = 'en-IN', decimalSeparator = '.', currencyPrefix = ''} = {},
) => {
    // const IntlNumberFormat = new Intl.NumberFormat(locale);
    // type bigIntToCurrencyType = (val: string) => string;
    // const bigIntToCurrency: bigIntToCurrencyType = val => IntlNumberFormat.format(bigInt(val));
    type toCurrencyType = (val: string) => string;
    const toCurrency: toCurrencyType = val => Number(val).toLocaleString(locale);

    const valueStr = `${value}`.replace(/[^0-9.]/g, '');

    const [integer, fraction] = valueStr.split('.');
    let currency = toCurrency(integer);

    if (typeof fraction === 'string')
        return `${currencyPrefix} ${currency}${decimalSeparator}${fraction}`.trim();

    return `${currencyPrefix} ${currency}`.trim();
};

type RateType = (percent: number) => number;
const Rate: RateType = percent => percent / 12 / 100;

type EMIType = (amount: number, percent: number, years: number) => number;
export const EMI: EMIType = (amount, percent, years) => {
    const period = years * 12;
    const rate = Rate(percent);
    return (amount * rate * Math.pow(1 + rate, period)) / (Math.pow(1 + rate, period) - 1);
};
