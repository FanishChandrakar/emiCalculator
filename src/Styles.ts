import {StyleSheet} from 'react-native';
import {Colors, Dimension} from './utilities';

const {ratio, height, width} = Dimension;
const fontScale = 0.9;

type FontSize = (size: number) => number;
const _getFontSize: FontSize = size => size * ratio * fontScale;

export default StyleSheet.create({
    Container: {
        height,
        width,
        flex: 1,
        zIndex: 0,
    },

    H1: {
        color: Colors.textColor,
        fontSize: _getFontSize(10),
        fontWeight: 'bold',
    },
    H2: {
        color: Colors.textColor,
        fontSize: _getFontSize(12),
        fontWeight: 'bold',
    },
    H3: {
        color: Colors.textColor,
        fontSize: _getFontSize(14),
        fontWeight: 'bold',
    },
    H4: {
        color: Colors.textColor,
        fontSize: _getFontSize(16),
        fontWeight: 'bold',
    },
    H5: {
        color: Colors.textColor,
        fontSize: _getFontSize(18),
        fontWeight: 'bold',
    },
    H6: {
        color: Colors.textColor,
        fontSize: _getFontSize(20),
        fontWeight: 'bold',
    },
    H7: {
        color: Colors.textColor,
        fontSize: _getFontSize(22),
        fontWeight: 'bold',
    },
    H8: {
        color: Colors.textColor,
        fontSize: _getFontSize(24),
        fontWeight: 'bold',
    },
    H9: {
        color: Colors.textColor,
        fontSize: _getFontSize(26),
        fontWeight: 'bold',
    },
    H10: {
        color: Colors.textColor,
        fontSize: _getFontSize(28),
        fontWeight: 'bold',
    },
    H11: {
        color: Colors.textColor,
        fontSize: _getFontSize(30),
        fontWeight: 'bold',
    },
    H12: {
        color: Colors.textColor,
        fontSize: _getFontSize(32),
        fontWeight: 'bold',
    },

    T0: {color: Colors.textColor, fontSize: _getFontSize(8)},
    T1: {color: Colors.textColor, fontSize: _getFontSize(10)},
    T2: {color: Colors.textColor, fontSize: _getFontSize(12)},
    T3: {color: Colors.textColor, fontSize: _getFontSize(14)},
    T4: {color: Colors.textColor, fontSize: _getFontSize(16)},
    T5: {color: Colors.textColor, fontSize: _getFontSize(18)},
    T6: {color: Colors.textColor, fontSize: _getFontSize(20)},
    T7: {color: Colors.textColor, fontSize: _getFontSize(22)},
    T8: {color: Colors.textColor, fontSize: _getFontSize(24)},
    T9: {color: Colors.textColor, fontSize: _getFontSize(26)},
    T10: {color: Colors.textColor, fontSize: _getFontSize(28)},
    T11: {color: Colors.textColor, fontSize: _getFontSize(30)},
    T12: {color: Colors.textColor, fontSize: _getFontSize(32)},

    B1: {color: Colors.textColor, fontWeight: '100'},
    B2: {color: Colors.textColor, fontWeight: '200'},
    B3: {color: Colors.textColor, fontWeight: '300'},
    B4: {color: Colors.textColor, fontWeight: '400'},
    B5: {color: Colors.textColor, fontWeight: '500'},
    B6: {color: Colors.textColor, fontWeight: '600'},
    B7: {color: Colors.textColor, fontWeight: '700'},
    B8: {color: Colors.textColor, fontWeight: '800'},
    B9: {color: Colors.textColor, fontWeight: '900'},

    TextInput: {
        color: Colors.textPlaceColor,
        fontSize: _getFontSize(14),
        margin: 0,
        padding: 0,
    },

    ApplyShadow1: {
        shadowOffset: {height: 0, width: 0},
        shadowOpacity: 0.5,
        elevation: 1,
        zIndex: 10,
    },
    ApplyShadow2: {
        shadowOffset: {height: 1, width: 1},
        shadowOpacity: 0.5,
        elevation: 2,
        zIndex: 10,
    },
    ApplyShadow3: {
        shadowOffset: {height: 2, width: 0},
        shadowOpacity: 0.5,
        elevation: 4,
        zIndex: 10,
    },
    ApplyShadow4: {
        shadowOffset: {height: 4, width: 2},
        shadowOpacity: 0.5,
        elevation: 6,
        zIndex: 10,
    },
    ApplyShadow5: {
        shadowOffset: {height: 6, width: 3},
        shadowOpacity: 0.5,
        elevation: 8,
        zIndex: 10,
    },
    ApplyShadow6: {
        shadowOffset: {height: 8, width: 4},
        shadowOpacity: 0.5,
        elevation: 10,
        zIndex: 10,
    },
});
