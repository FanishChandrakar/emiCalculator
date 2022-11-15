import React from 'react';
import {ScrollView, View} from 'react-native';
import {Header} from '../../components';
import CardSlider from './CardSlider';
import styles from './styles';
import {EMI, toCurrencyFormat} from './helper';
import Result from './Result';

const BASE_AMOUNT = 100000;

const Calculator: React.FC = () => {
    const [LoanAmount, setLoanAmount] = React.useState(0);
    const [InterestRate, setInterestRate] = React.useState(5);
    const [LoanTenure, setLoanTenure] = React.useState(1);

    const emi = EMI(LoanAmount, InterestRate, LoanTenure);
    const total = emi * LoanTenure * 12;
    const interest = total - LoanAmount;
    return (
        <>
            <Header Title="EMI Calculator" />
            <View style={styles.cover}>
                <ScrollView bounces={false}>
                    <CardSlider
                        Title="Loan Amount"
                        Suffix="₹"
                        valueFormatter={Value => toCurrencyFormat(Value * BASE_AMOUNT)}
                        value={LoanAmount / BASE_AMOUNT}
                        step={1}
                        minimumValue={0}
                        maximumValue={200}
                        minLable="0"
                        maxLable="200L"
                        onValueChange={Value => setLoanAmount(Math.round(Value) * BASE_AMOUNT)}
                    />
                    <CardSlider
                        Title="Interest Rate"
                        Suffix="%"
                        valueFormatter={Value => `${Value}`}
                        value={InterestRate}
                        step={0.25}
                        minimumValue={5}
                        maximumValue={20}
                        minLable="5%"
                        maxLable="20%"
                        onValueChange={Value => setInterestRate(Value)}
                    />
                    <CardSlider
                        Title="Loan Tenure"
                        Suffix="Yr"
                        valueFormatter={Value => `${Value}`}
                        value={LoanTenure}
                        step={0.5}
                        minimumValue={1}
                        maximumValue={30}
                        minLable="1 Yr"
                        maxLable="30 Yrs"
                        onValueChange={Value => setLoanTenure(Value)}
                    />
                    <Result EMI={emi} Interest={interest} Total={total} />
                </ScrollView>
            </View>
        </>
    );
};

export default Calculator;
