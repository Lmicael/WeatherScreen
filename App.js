import React from 'react';
import { View } from 'react-native';
import WeatherScreen from './src/screens/WeatherScreen';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <WeatherScreen />
    </View>
  );
};

export default App;
