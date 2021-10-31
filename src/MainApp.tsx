/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {StatusBar} from 'react-native';
import {Colors} from './utilities';

import {Calculator} from './screens';

const App = () => {
    const barStyle = Colors.statusBar;

    return (
        <>
            <StatusBar {...{barStyle}} />
            <Calculator />
        </>
    );
};

export default App;
