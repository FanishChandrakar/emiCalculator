import React from 'react';
import {View, Text} from 'react-native';
import {useDebounce} from '../../hooks';
import Slider, {SliderProps} from './Slider';
import styles from './styles';

interface CardSliderProps extends SliderProps {
    Title: string;
    Suffix: string;
    valueFormatter: (Value: number) => string;
}
const CardSlider = ({
    Title,
    Suffix,
    valueFormatter,
    value,
    step,
    minimumValue,
    maximumValue,
    minLable,
    maxLable,
    onValueChange,
}: CardSliderProps) => {
    const [Value, setValue] = React.useState(value);
    useDebounce(() => onValueChange(Value), 500, [Value]);
    return (
        <>
            <View style={{...styles.VerticalSpace}} />
            <View style={{...styles.cardSlider_Title_View}}>
                <Text style={{...styles.cardSlider_Title_Text}}>{Title}</Text>
                <Text
                    style={{
                        ...styles.cardSlider_Title_Text,
                        ...styles.cardSlider_Title_Value,
                    }}>
                    {valueFormatter(Value)}
                </Text>
                <Text style={{...styles.cardSlider_Title_Text}}>{Suffix}</Text>
            </View>
            <Slider
                {...{
                    value,
                    step,
                    minimumValue,
                    maximumValue,
                    minLable,
                    maxLable,
                    onValueChange,
                }}
                onValueChange={val => setValue(val)}
            />
            <View style={{...styles.lineSeperator}} />
        </>
    );
};

export default CardSlider;
