import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    useAnimatedGestureHandler,
    withSpring,
} from 'react-native-reanimated';
import { TapGestureHandler } from 'react-native-gesture-handler/lib/typescript/handlers/TapGestureHandler';


const AnimatedImage = Animated.createAnimatedComponent(Image)

export default function 
({imageSize, stickerSource}) {
    const scaleImage = useSharedValue(imageSize);
    const onDoubleTap = useAnimatedGestureHandler({onActive: () => {
        if(scaleImage.value) {
            scaleImage.value = scaleImage.value * 2
        }
    },
    });
    const imageStyle = useAnimatedStyle (() => {
        return {
             widht: withSpring(scaleImage.value),
            height: withSpring(scaleImage.value),
        };
    }
    );
  return (
    <View style={{top: -350}}>
        <TapGestureHandler onGestureEvent={onDoubleTap} numberOfTaps={2}>
            <AnimatedImage
                source={stickerSource}
                resizedMode="contain"
                style={{widht: imageSize, height: imageSize}}
            />
        </TapGestureHandler> 
    </View>
  )
}

const styles = StyleSheet.create({})