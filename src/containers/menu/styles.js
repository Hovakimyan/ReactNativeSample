import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    menu: {
        height: 60,
        flexShrink: 0,
        overflow: 'hidden',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'blue'
    },
    item: {
        display: 'flex',
        flexGrow: 1,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default styles
