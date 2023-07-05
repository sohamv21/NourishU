//development for main app
//importing react,stylesheet,text and view
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Creating four screens - home screen(profile??),mealprep, calorie tracking, BMR calculator

function HomeScreen(){
  return(
    <SafeAreaView style={styles.container}>
      <Text style={styles.textcontainer}>
        Welcome to NourishU,This is the Homescreen, that I am thinking of making a profile screen
      </Text>
    </SafeAreaView>
  );
}

function MealPrep(){
  return(
    <SafeAreaView style={styles.container}>
      <Text style={styles.textcontainer}>
        This is the Mealprep screen, that will have recipe from Spoonacular API
      </Text>
    </SafeAreaView>
  );
}

function CalorieTracker(){
  return(
    <SafeAreaView style={styles.container}>
      <Text style={styles.textcontainer}>
        {/*This is the calorie tracker that will have inputs for foods at breakfast,lunch,dinner 
        and use Spoonacular to get calories for the food and add it to a total calorie count and show it as a progress of goal calories*/}
        Calorie Tracker
      </Text>
    </SafeAreaView>
  );
}

function BMRCalculator(){
  return(
    <SafeAreaView style={styles.container}>
      <Text style={styles.textcontainer}>
        {/*This is the BMR calculator which will give calorie goals for cutting,maintaining,bulking based on height,bodyweight and age*/}
        BMR Calculator
      </Text>
    </SafeAreaView>
  );
}

//creating a stack for navigating between these pages 
const Stack = createNativeStackNavigator();
//main app function
function App(){ 
  return (
    <NavigationContainer>
      {/* Initialroute name is set to Home so this will be the first screen that opens */}
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name = "Home" component={HomeScreen} options={{headerTitle:"Screen"}} />
        <Stack.Screen name = "MealPrep" component={MealPrep} />
        <Stack.Screen name = "CalorieTracker" component={CalorieTracker} />
        <Stack.Screen name = "BMR Calculator" component={BMRCalculator} />
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

