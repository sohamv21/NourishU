import { Text,View, SafeAreaView, TouchableOpacity,Image } from 'react-native';
import { StyleSheet } from 'react-native';
import Colors from './Colors';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:Colors.PrimaryGreenColor,
    alignItems:"center",
    justifyContent:"center"
  },
  textContainer1: {
    color:Colors.WhiteTextColor,
    fontSize:35,
    alignItems: 'center',
    justifyContent:"center"
  },
  textContainer2: {
    color:Colors.WhiteTextColor,
    fontSize:16,
    justifyContent:"center"
  },
  button1: {
    alignItems: 'center',
    backgroundColor: '#5DD49F',
    padding: 16,
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: 108,
    height: 60,
  },

  button2: {
    alignItems: 'center',
    backgroundColor: '#5DD49F',
    padding: 16,
    position: 'absolute', //fixed?
    bottom: 0,
    left: 80,
    width: 108,
    height: 60,
  },

  button3: {
    alignItems: 'center',
    backgroundColor: '#5DD49F',
    padding: 16,
    position: 'absolute',
    right: 80,
    bottom: 0,
    width: 108,
    height: 60,
  },

  button4: {
    alignItems: 'center',
    backgroundColor: '#5DD49F',
    padding: 16,
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: 108,
    height: 60,
  }
});

const HomeScreenPage = ({navigation}) => {
  return(
    <SafeAreaView style={{...styles.container, justifyContent: 'flex-start'}}>
      <TouchableOpacity style ={styles.button1} title = "Profile Button" // Profile Button
        onPress={() => navigation.navigate('HomeScreen')}>
              <Image
                source={require('../assets/ProfileImage.png')}
                style={{ width: 30, height: 30, marginRight: 5 }}
              />
          <View style={{ flexDirection: 'row' }}>
          </View>
        </TouchableOpacity>

      <Text style={{...styles.textContainer1, marginTop: 70}}>
        Welcome to NourishU User!
      </Text>
      <Text style={{...styles.textContainer2, marginTop: 30}}>
        Your wellness companion designed for success
      </Text>

      <TouchableOpacity style ={styles.button1} title = "HomeScreen Button" //Tab #1: Home
        onPress={() => navigation.navigate('HomeScreen')}>
              <Image
                source={require('../assets/HomeImage.png')}
                style={{ width: 30, height: 30, marginRight: 5 }}
              />
          <View style={{ flexDirection: 'row' }}>
          </View>
        </TouchableOpacity>

      <TouchableOpacity style ={styles.button2} title = "BMR Tracker Button" //Tab #2: BMR
        onPress={() => navigation.navigate('BMRTracker')}>
          <View style={{ flexDirection: 'row' }}>
              <Image
                source={require('../assets/BMRImage.png')}
                style={{ width: 30, height: 30, marginLeft: 20 }}
              />
          </View>
        </TouchableOpacity>

      <TouchableOpacity style ={styles.button3} title = "Meal Prep Button" //Tab #3: MealPrep
        onPress={() => navigation.navigate('MealPrep')}>
          <View style={{ flexDirection: 'row' }}>
              <Image
                source={require('../assets/MealPrepImage.png')}
                style={{ width: 30, height: 30, marginRight: 15 }}
              />
          </View>
        </TouchableOpacity>

      <TouchableOpacity style ={styles.button4} title = "Calorie Tracker Button" //Tab #4: Calorie
        onPress={() => navigation.navigate('CalorieTracker')}>
          <View style={{ flexDirection: 'row' }}>
              <Image
                source={require('../assets/CalorieImage.png')}
                style={{ width: 35, height: 30, marginRight: 5 }}
              />
          </View>
        </TouchableOpacity>
    </SafeAreaView>
  );
}

export default HomeScreenPage;

