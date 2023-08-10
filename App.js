import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react'
import * as Location from 'expo-location';
import { Loading } from './Loading';
import { Alert, StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
import { Weather } from './Weather';


export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  const API_KEY = '8c75d10b5efae0e4a662820965721362';

  const getWeather = async (latitude, longitude) => {
    try {
      const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
      setData(data);
      console.log(data);
    } catch (error) {
      Alert.alert('Opps', '🧷' )
    }   
  };

  const getLocation = async () => {
    try {
      setIsLoading(true);
      await Location.requestForegroundPermissionsAsync();
      const { coords: {latitude, longitude} } = await Location.getCurrentPositionAsync();

      setTimeout(async () => {
        await getWeather(latitude, longitude);
        setIsLoading(false);
      }, 3000);
    } catch (error) {
      Alert.alert('Не можу отримати данні про геолокацію', 'Дуже сумно 🥲')
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    (isLoading 
      ? <Loading /> 
      : <Weather data={data} />
    ) 
  );
}
