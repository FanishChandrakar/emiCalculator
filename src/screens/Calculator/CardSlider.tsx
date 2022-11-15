import React from 'react';
import {View, Text} from 'react-native';
import {useDebounce} from '../../hooks';
import Bar from './Bar';
import Slider, {SliderProps} from './Slider';
import styles from './styles';

interface LabelProps {
    Value: string;
}
const Label: React.FC<LabelProps> = ({Value}) => {
    return <Text style={styles.cardSlider_Label}>{Value}</Text>;
};
interface CardSliderProps extends SliderProps {
    Title: string;
    Suffix: string;
    valueFormatter: (Value: number) => string;
}
const CardSlider: React.FC<CardSliderProps> = ({
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
}) => {
    const [Value, setValue] = React.useState(value);
    useDebounce(() => onValueChange(Value), 500, [Value]);

    return (
        <>
            <View style={styles.VerticalSpace} />
            <Bar {...{Title, Suffix}}>
                <Label Value={valueFormatter(value)} />
            </Bar>
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
            <View style={styles.lineSeperator} />
        </>
    );
};

export default CardSlider;
