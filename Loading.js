import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { StyleSheet, Text, View, StatusBar, Image, ImageBackground } from 'react-native';


export const Loading = () => {
  const [photo, setPhoto] = useState('https://images.unsplash.com/photo-1516912481808-3406841bd33c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80');
  const ACCESS_KEY = 'Wl9bVOJ65ft8z9KC2RR5sV67S_C6uowB7axUjlD1hWo';

  useEffect(() => {
    async function getRandomPhoto() {
      try {
        const response = await axios.get(`https://api.unsplash.com/photos/random?client_id=${ACCESS_KEY}`);
        console.log(response);
        const photoData = response.data;
        return photoData.urls.regular;
      } catch (error) {
        console.error('Error fetching random photo:', error);
        return null;
      }
    }

    getRandomPhoto().then(photoUrl => {
      if (photoUrl) {
        setPhoto()
        console.log('Random photo URL:', photoUrl);
      } else {
        console.log('Failed to fetch random photo.');
      }
    });
  }, []);
  

  return (
  <View style={styles.container}>
    <ImageBackground style={styles.image} source={{uri: photo}} resizeMode='cover'>
      <Text style={styles.text}>Завантаження погоди...</Text>

    </ImageBackground>
    <StatusBar barStyle={'dark-content'} />
  </View>
)};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    position: 'absolute',
    bottom: 40,
    width: '100%',
    color: 'white',
    fontSize: 30,
    lineHeight: 64,
    fontWeight: '500',
    textAlign: 'left',
    paddingLeft: 20,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  }
});