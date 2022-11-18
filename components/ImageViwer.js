import { StyleSheet, Image } from "react-native";

export default  function ImageViwer({placeholderImage, selectedImage}) {
    const imageSource = selectedImage !== null ? {uri: selectedImage} : placeholderImage;
  return (
        <Image source={imageSource} style={styles.image}/>
  );
}

const styles = StyleSheet.create({
    image:{
        width: 320,
        height: 440,
        borderRadius: 18,
      }
});