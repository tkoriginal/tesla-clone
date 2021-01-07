import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        position: 'absolute',
        top: 50,
        width: '100%',
        zIndex: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20
        
    },
    logo: {
        width: 100,
        height:20,
        resizeMode: 'contain'
    },
    menu: {
        width: 25,
        height: 25
    }
})