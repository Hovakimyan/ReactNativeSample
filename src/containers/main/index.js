import React, { Component } from 'react'
import { Text, View } from 'react-native'
import styles from './styles'

export default class HelloWorldApp extends Component {
    render() {
        return (
            <View style={styles.menu}>
                <Text>Hello from Main</Text>
            </View>
        )
    }
}
