import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Button from './components/Button';
import ImageViwer from './components/ImageViwer';
import * as ImagePicker from 'expo-image-picker';
import {useState} from 'react';

const PlaceholderImage = require('./assets/image1.jpg')
export default function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });
    if(!result.canceled) {
      setSelectedImage(result.assets[0].uri)
    } else {
      alert('Você não escolheu nenhuma imagem.')
    }
  }
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.container}>
       <ImageViwer placeholderImage={PlaceholderImage} selectedImage={selectedImage}/>
      </View>
      <View style={styles.footerContainer}>
        <Button theme="primary" label='Escolha a foto' onPress={pickImageAsync}/>
        <Button label={'Usar foto'}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fonts:{
    color: '#fff'
  },
  footerContainer:{
    flex: 1/3,
    alignItems: 'center',
  }
});
