//development for main app
//importing react,stylesheet,text and view
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {Image,StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreenPage from "./pages/HomeScreen"
import MealPrep from './pages/MealPrep';
import CalorieTracker from './pages/CalorieTracker';
import BMRTracker from './pages/BMRTracker';
import Colors from './pages/Colors';
// Creating a stack for navigating between these pages 
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


function MyTabs(){



}
// Main app function
function App(){
  
  
  return (
    <NavigationContainer>
      {/* Initialroute name is set to Home so this will be the first screen that opens */}
      {/* <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name = "Home" component={HomeScreenPage} options={{headerTitle:"Screen"}} />
        <Stack.Screen name = "MealPrep" component={MealPrep} />
        <Stack.Screen name = "CalorieTracker" component={CalorieTracker} />
        <Stack.Screen name = "BMRTracker" component={BMRTracker} />
      </Stack.Navigator> */}
      <Tab.Navigator initialRouteName='Home'screenOptions={({ route }) => ({
          headerShown: true,
          headerBackground: Colors.DarkGreenAccent,
          tabBarStyle: {
            height: 90,
            paddingHorizontal: 5,
            paddingTop: 0,
            backgroundColor: Colors.LightGreenAccent,
            position: 'absolute',
            borderTopWidth: 0,
            
        },
      })}>
        <Tab.Screen name= "Home"
                    component={HomeScreenPage}
                    options={{title: "My Profile",
                    tabBarIcon:({size,focused,color}) => {
                      return(
                        <Image
                        source={require('./assets/ProfileImage.png')}
                        style={{ width: 30, height: 30, marginRight: 5 }}
                      />
                      );}
                    }}>
        </Tab.Screen>
        
        <Tab.Screen name= "MealPrep"
                    component={MealPrep}
                    options={{title: "Meal Prep",
                    tabBarIcon:({size,focused,color}) => {
                      return(
                        <Image
                        source={require('./assets/MealPrepImage.png')}
                        style={{ width: 30, height: 30, marginRight: 5 }}
                      />
                      );}
                    }}>
        </Tab.Screen>
        <Tab.Screen name= "CalorieTracker"
                    component={CalorieTracker}
                    options={{title: "Calorie Tracker",
                    tabBarIcon:({size,focused,color}) => {
                      return(
                        <Image
                        source={require('./assets/CalorieTracker.png')}
                        style={{ width: 30, height: 30, marginRight: 5 }}
                      />
                      );}
                    }}>
        </Tab.Screen>
        <Tab.Screen name= "BMRTracker"
                    component={BMRTracker}
                    options={{title: "BMR Calculator",
                    tabBarIcon:({size,focused,color}) => {
                      return(
                        <Image
                        source={require('./assets/ScaleImage.png')}
                        style={{ width: 30, height: 30, marginRight: 5 }}
                      />
                      );}
                    }}>
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  // Colors are in a new page Colors.js, have to look at shifting these styles
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