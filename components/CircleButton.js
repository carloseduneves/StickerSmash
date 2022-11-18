import { MaterialIcons } from "@expo/vector-icons";
import { Pressable, View, StyleSheet } from "react-native";



export default function CircleButton({onPress}) {
  return (
    <View style={styles.circleBtnContainer}>
        <Pressable style={styles.circleBtn} onPress={onPress}>
            <MaterialIcons name="add" size={38} color="#25292e"/>
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    circleBtnContainer: {
        width: 84,
        height: 84,
        marginHorizontal: 60,
        borderWidth: 4,
        borderColor: '#ffd33d',
        borderRadius: 42,
        padding:3,
    },
    circleBtn: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 42,
        backgroundColor: '#fff'
    },
});