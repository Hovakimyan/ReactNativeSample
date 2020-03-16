import React, { Component } from 'react'
import { Text, View } from 'react-native'
import styles from './styles'
import { Link } from 'react-router-native'

export default class HelloWorldApp extends Component {
    render() {
        return (
            <View style={styles.menu}>
                <Link style={styles.item} to="/">
                    <Text>About</Text>
                </Link>
                <Link style={styles.item} to="/schedule">
                    <Text>Schedule</Text>
                </Link>
                <Link style={styles.item} to="/speakers">
                    <Text>Speakers</Text>
                </Link>
                <Link style={styles.item} to="/location">
                    <Text>Location</Text>
                </Link>
            </View>
        )
    }
}
