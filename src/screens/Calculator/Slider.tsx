import React from 'react';
import {View, Text} from 'react-native';
import Slider from '@react-native-community/slider';
import {Colors, Dimension} from '../../utilities';
import styles from './styles';

export interface SliderProps {
    value: number;
    step: number;
    minimumValue: number;
    maximumValue: number;
    minLable: string;
    maxLable: string;
    onValueChange: (value: number) => void;
}

export default ({minLable, maxLable, ...props}: SliderProps) => {
    const width = Dimension.width * 0.7;
    const height = 50;
    return (
        <View style={{...styles.slider_View}}>
            <Text style={{...styles.slider_Text}}>{minLable}</Text>
            <Slider
                {...props}
                style={{width, height}}
                minimumTrackTintColor={Colors.catskillWhite}
                maximumTrackTintColor={`${Colors.catskillWhite}55`}
                thumbTintColor={Colors.catskillWhite}
            />
            <Text style={{...styles.slider_Text}}>{maxLable}</Text>
        </View>
    );
};
