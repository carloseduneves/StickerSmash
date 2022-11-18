import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Button from './components/Button';
import CircleButton from './components/CircleButton';
import IconButton from './components/IconButton';
import ImageViwer from './components/ImageViwer';
import * as ImagePicker from 'expo-image-picker';
import {useState} from 'react';
import EmojiPicker from './components/EmojiPicker';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import EmojiSticker from './components/EmojiSticker';

const PlaceholderImage = require('./assets/image1.jpg');


export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const onReset = () => {
    setShowAppOptions(false);
  };
  const onAddSticker = () => {
    setIsModalVisible(true);
  };
  const onModalClose = () => {
    setIsModalVisible(false);
  }
  const onSaveImageAsync = async () => {

  };
  const [showAppOptions, setShowAppOptions] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });
    if(!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
    } else {
      alert('Você não escolheu nenhuma imagem.')
    }
  }
  return (
   
    <GestureHandlerRootView style={styles.container}>
     

      <View style={styles.imageContainer}>
       
       <ImageViwer placeholderImage={PlaceholderImage} selectedImage={selectedImage} style={styles.image}/>
      </View>
       {showAppOptions ? (
       <View style={styles.optionsContainer}>
        <View style={styles.optionsRow}>
          <IconButton icon="refresh" label="Reset" onPress={onReset}/>
          <CircleButton onPress={onAddSticker}/>
          <IconButton icon="save-alt" label="save" onPress={onSaveImageAsync}/>
        </View>
       </View>
      ) :
      (<View style={styles.footerContainer}>
        <Button theme="primary" label='Escolha a foto' onPress={pickImageAsync}/>
        <Button label={'Usar foto'} onPress={() => setShowAppOptions(true)}/>
      </View>)}
      <EmojiPicker isVisible={isModalVisible} onClose={onModalClose} style={styles.modal}>
       
      </EmojiPicker>
      <StatusBar style="auto" />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  image: {
    width: 350,
    height: 540,
    borderRadius: 18,
  },
  fonts:{
    color: '#fff'
  },
  footerContainer:{
    flex: 1/4,
    alignItems: 'center',
  },
  optionsContainer: {
   flex: 1/3
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  modal:{
    flex: 1/4,
  },
  
});
