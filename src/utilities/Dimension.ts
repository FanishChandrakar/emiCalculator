import {Dimensions, StatusBar} from 'react-native';

let {height, width} = Dimensions.get('window');
export const StatusBarHeight = StatusBar.currentHeight ?? 0;

// height = height - (StatusBarHeight ? StatusBarHeight : 0)
// width = width

// width = width / 2;
// height = height / 2;

export {height, width};
export const headerHeight = 56;

export const heightRatio = height / 640;
export const widthRatio = width / 360;
export const ratio = width / 360;
