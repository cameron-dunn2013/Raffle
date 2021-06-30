import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Template = () => {
    return (
        <View style={styles.container}>

        </View>
    );
}

export default Template;

const styles = StyleSheet.create({
    container: {
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        position: 'absolute'
    }
})