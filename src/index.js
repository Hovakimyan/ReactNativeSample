import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import Menu from 'containers/menu'

import { NativeRouter, Route, Link, Switch } from 'react-router-native'

import Main from 'containers/main'
import Speakers from 'containers/speakers'
import Schedule from 'containers/schedule'
import Location from 'containers/location'

const styles = StyleSheet.create({
    body: {
        paddingTop: 35,
        backgroundColor: 'green',
        display: 'flex',
        width: '100%',
        height: '100%'
    }
})

export default class HelloWorldApp extends Component {
    render() {
        return (
            <NativeRouter>
                <View style={styles.body}>
                    <Switch>
                        <Route exact path="/" component={Main} />
                        <Route path="/speakers" component={Speakers} />
                        <Route path="/schedule" component={Schedule} />
                        <Route path="/location" component={Location} />
                    </Switch>
                    <Menu />
                </View>
            </NativeRouter>
        )
    }
}
