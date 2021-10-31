import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

interface CardProps {
    Tilte: string;
    Value: string;
}

const Card = ({Tilte, Value}: CardProps) => {
    return (
        <View style={{...styles.card_View}}>
            <Text style={{...styles.card_Value}}>{Value}</Text>
            <View style={{...styles.lineSeperator}} />
            <Text style={{...styles.card_Title}}>{Tilte}</Text>
        </View>
    );
};

export default Card;
