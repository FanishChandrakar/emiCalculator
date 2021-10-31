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

const Result = ({EMI, Interest, Total}: ResultProps) => {
    return (
        <View style={{...styles.result}}>
            <View style={{...styles.VerticalSpace}} />
            <Card Tilte="Loan EMI" Value={`₹ ${toCurrencyFormat(Math.round(EMI))}`} />
            <View style={{...styles.VerticalSpace}} />
            <Card
                Tilte="Total Interest Payable"
                Value={`₹ ${toCurrencyFormat(Math.round(Interest))}`}
            />
            <View style={{...styles.VerticalSpace}} />
            <Card
                Tilte="Total Payment (Principal + Interest)"
                Value={`₹ ${toCurrencyFormat(Math.round(Total))}`}
            />
            <View style={{...styles.VerticalSpace}} />
            <SafeAreaView />
        </View>
    );
};

export default Result;
