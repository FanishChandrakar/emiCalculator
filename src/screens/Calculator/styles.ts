import {StyleSheet} from 'react-native';
import Styles from '../../Styles';
import {Colors, Dimension} from '../../utilities';

const Spacing = 15 * Dimension.ratio;
export default StyleSheet.create({
    HorizontaSpace: {
        width: Spacing,
    },
    VerticalSpace: {
        height: Spacing,
    },
    cover: {
        ...Styles.Container,
        paddingHorizontal: Spacing / 2,
        backgroundColor: Colors.appBackColor,
    },
    row: {
        flexDirection: 'row',
    },
    text: {
        ...Styles.T3,
    },
    slider_View: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    slider_Text: {
        ...Styles.T2,
        flex: 1,
        textAlign: 'center',
    },
    bar: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: Spacing / 4,
        paddingHorizontal: Spacing,
        borderRadius: Spacing / 4,
        backgroundColor: Colors.appColor,
    },
    cardSlider_Label: {
        ...Styles.T5,
        ...Styles.B6,
        color: Colors.catskillWhite,
        textAlign: 'center',
    },
    bar_Value: {
        backgroundColor: Colors.appBackColor,
        borderRadius: Spacing / 4,
        paddingVertical: Spacing / 2,
    },
    get bar_L() {
        return {
            ...this.cardSlider_Label,
            flex: 4,
        };
    },
    get bar_C() {
        return {
            ...this.bar_Value,
            flex: 5,
        };
    },
    get bar_R() {
        return {
            ...this.cardSlider_Label,
            flex: 1,
        };
    },
    lineSeperator: {
        height: 2,
        backgroundColor: `${Colors.catskillWhite}44`,
    },
    result: {
        // flex: 1,
    },
    card_View: {
        ...Styles.ApplyShadow1,
        // flex: 1,
        backgroundColor: Colors.appColor,
        borderRadius: Spacing / 4,
        marginHorizontal: Spacing / 2,
        padding: Spacing / 2,
    },
    card_Title: {
        ...Styles.T4,
        textAlign: 'center',
        marginVertical: Spacing / 2,
    },
    card_Value: {
        ...Styles.H10,
        textAlign: 'center',
        marginVertical: Spacing,
    },
});
