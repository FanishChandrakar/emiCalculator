import React from 'react';
import {View, SafeAreaView} from 'react-native';
import Card from './Card';
import {toCurrencyFormat} from './helper';
import styles from './styles';

interface ResultProps {
    EMI: number;
    Interest: number;
    Total: number;
}

const currencyConfig = {currencyPrefix: '₹'};
const toLocaleCurrency = (val: number) =>
    toCurrencyFormat.call(this, Math.round(val), currencyConfig);

const Result: React.FC<ResultProps> = ({EMI, Interest, Total}) => {
    return (
        <View style={styles.result}>
            <View style={styles.VerticalSpace} />
            <Card Tilte="Loan EMI" Value={`${toLocaleCurrency(EMI)}`} />
            <View style={styles.VerticalSpace} />
            <Card Tilte="Total Interest Payable" Value={`${toLocaleCurrency(Interest)}`} />
            <View style={styles.VerticalSpace} />
            <Card
                Tilte="Total Payment (Principal + Interest)"
                Value={`${toLocaleCurrency(Total)}`}
            />
            <View style={styles.VerticalSpace} />
            <SafeAreaView />
        </View>
    );
};

export default Result;
