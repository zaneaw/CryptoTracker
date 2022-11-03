import { View, StyleSheet } from 'react-native';
import React from 'react';
import { useTheme } from '../theme/ThemeProvider';

import Toggle from './Toggle';
import Header from './Header';
import Body from './Body';

export default function Main() {
    const { colors } = useTheme();

    return (
        <View style={styles.container}>
            <Header />
            <View style={[styles.body, {backgroundColor: colors.secondary}]}>
                <Body />
            </View>
            <Toggle />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'stretch',
        position: 'relative',
    },
    body: {
        flex: 1,
        alignItems: 'center',
        alignSelf: 'stretch',
    },
    sideNav: {
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 1,
        width: '75%',
        height: '100%',
        borderRightWidth: 2,
    },
});
