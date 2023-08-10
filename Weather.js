import React from 'react'
import { Alert, Image, StyleSheet, Text, View, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export const Weather = ({data}) => {
  const weatherOptions = {
    Clouds: {
      iconName: 'cloud',
      gradient: ['#304352', '#d7d2cc'],
    },
    Snow: {
      iconName: 'snow',
      gradient: ['#00B4DB', '#0083B0']
    },
    Rain: {
      iconName: 'rainy',
      gradient: ['#1488CC', '#2B32B2'],
    },
    Thunderstorm: {
      iconName:'thunderstorm-outline',
      gradient: ['#2980b9', '#2c3e50'],
    },
    Drizzle: {
      iconName: 'rainy',
      gradient: ['#373B44', '#4286f4'],
    },
    Clear: {
      iconName: 'sunny-outline',
      gradient: ['#2980B9', '#6DD5FA', '#FFFFFF'],
    } 
  };

  return (
    <LinearGradient colors={weatherOptions[data.weather[0].main].gradient} style={styles.container}>
      <StatusBar barStyle={'light-content'}/>

      <View style={styles.halfView}>
        <Ionicons name={weatherOptions[data.weather[0].main].iconName} size={120} color="white"/>
        <Text style={styles.temp}>{Math.round(data.main.temp)}°</Text>
      </View>

      <View style={{...styles.halfView, ...styles.texContainer}}>
        <Text style={styles.title}>
          {`Your current possition is ${data.name}`}
        </Text>
        <Text style={styles.subtitle}>
          {`${data.weather[0].description}`}
        </Text>
      </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  halfView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 10,
  },
  texContainer: {
    paddingHorizontal: 20,
    alignItems: 'flex-start',
  },
  temp: {
    paddingTop: 20,
    fontSize: 36,
    color: 'white',
  },
  title: {
    color: 'white',
    fontSize: 22,
    fontWeight: 300,
    marginBottom: 10
  },
  subtitle: {
    color: 'white',
    fontWeight: 600,
    fontSize: 18,
  },
})