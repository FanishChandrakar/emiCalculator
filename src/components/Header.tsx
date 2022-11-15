import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Styles from '../Styles';
import {Dimension, Colors} from '../utilities';

interface HeaderProps {
    Title: string;
}
const Header: React.FC<HeaderProps> = ({Title}) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>{Title}</Text>
            </View>
        </SafeAreaView>
    );
};

export default Header;

const styles = StyleSheet.create({
    container: {
        ...Styles.ApplyShadow3,
        backgroundColor: Colors.appColor,
    },
    header: {
        height: Dimension.headerHeight,
        justifyContent: 'center',
    },
    title: {
        ...Styles.H5,
        color: Colors.catskillWhite,
        textAlign: 'center',
    },
});
