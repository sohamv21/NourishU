//development for main app
//importing react,stylesheet,text and view
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreenPage from "./pages/HomeScreen"
import MealPrep from './pages/MealPrep';
import CalorieTracker from './pages/CalorieTracker';
import BMRTracker from './pages/BMRTracker';

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
  //this is the main dark green background container 
  BackgroundContainer: {
    flex: 1,
    backgroundColor: '#0D2727',
    alignItems:"center",
    justifyContent:"center"
  },
  DarkGreenAccent:{
    flex: 1,
    backgroundColor: '#1D9D66',
    alignItems:"center",
    justifyContent:"center"
  },
  MedGreenAccent:{
    flex: 1,
    backgroundColor: '#30AC75',
    alignItems:"center",
    justifyContent:"center"
  },
  LightGreenAccent:{
    flex: 1,
    backgroundColor: '#5DD49F',
    alignItems:"center",
    justifyContent:"center"
  },
  textcontainer: {
    color:"#fff",
    fontSize:20
  }
});

export default App;

