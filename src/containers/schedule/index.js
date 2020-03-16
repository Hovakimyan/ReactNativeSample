import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import styles from './styles'

export default class HelloWorldApp extends Component {
    render() {
        return (
            <View style={styles.menu}>
                <Text>Hello from schedule</Text>
            </View>
        )
    }
}
