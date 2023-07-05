//development for main app
//importing react,stylesheet,text and view
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import three screens
import HomeScreenPage from './pages/HomeScreen.js'; 
import MealPrep from './pages/MealPrep.js';
import CalorieTracker from './pages/CalorieTracker.js';
import BMRTracker from './pages/BMRTracker.js';

// Creating a stack for navigating between these pages 
const Stack = createNativeStackNavigator();
// Main app function
function App(){ 
  return (
    <NavigationContainer>
      {/* Initialroute name is set to Home so this will be the first screen that opens */}
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name = "Home" component={HomeScreenPage} options={{headerTitle:"Screen"}} />
        <Stack.Screen name = "MealPrep" component={MealPrep} />
        <Stack.Screen name = "CalorieTracker" component={CalorieTracker} />
        <Stack.Screen name = "BMRTracker" component={BMRTracker} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems:"center",
    justifyContent:"center"
  },
  textcontainer: {
    color:"#fff",
    fontSize:20
  }
});

export default App;

