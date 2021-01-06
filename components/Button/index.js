import React from 'react'
import { View, Pressable, Text } from 'react-native'

import styles from './style'

const Button = props => {
    const { type, text, onPress } = props

    const backgroundColor = type === 'primary' ? '#171A20CC' : '#FFFFFFA6'
    const color = type === 'primary' ? '#FFFFFF' : '#171A20'

    return (
        <View style={styles.container}>
            <Pressable style={[styles.button, { backgroundColor }]} onPress={onPress}>
                <Text style={[styles.text, { color }]}>{text}</Text>
            </Pressable>
        </View>
    )
}

export default Button