import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

interface BarProps {
    Title: string;
    Suffix: string;
}
const Bar: React.FC<BarProps> = ({Title, Suffix, children}) => {
    return (
        <View style={styles.bar}>
            <Text style={styles.bar_L}>{Title}</Text>
            <View style={styles.bar_C}>{children}</View>
            <Text style={styles.bar_R}>{Suffix}</Text>
        </View>
    );
};

export default Bar;
