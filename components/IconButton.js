import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'

export default function IconButton({icon, label, onPress}) {
  return (
    <View>
     <Pressable style={styles.iconBtn} onPress={onPress}>
        <MaterialIcons name={icon} size={24} color='#fff'/>
        <Text style={styles.iconBtnLabel}>{label}</Text>
     </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    iconBtn: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconBtnLabel: {
        color: '#fff',
        marginTop: 12,
    },
});