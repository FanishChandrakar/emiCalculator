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
    cardSlider_Title_View: {
        flexDirection: 'row',
        paddingVertical: Spacing / 4,
        paddingHorizontal: Spacing,
        borderRadius: Spacing / 4,
        backgroundColor: Colors.appColor,
    },
    cardSlider_Title_Text: {
        ...Styles.T5,
        paddingVertical: Spacing / 2,
    },
    cardSlider_Title_Value: {
        flex: 1,
        ...Styles.B6,
        backgroundColor: Colors.appBackColor,
        borderRadius: Spacing / 4,
        color: Colors.catskillWhite,
        overflow: 'hidden',
        marginHorizontal: Spacing,
        textAlign: 'center',
    },
    lineSeperator: {
        height: 2,
        backgroundColor: Colors.catskillWhite,
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
