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
  textcontainer: {
    color:Colors.WhiteTextColor,
    fontSize:20
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  }
});

const HomeScreenPage = ({navigation}) => {
  return(
    <SafeAreaView style={styles.container}>
      <Text style={styles.textcontainer}>
        Welcome to NourishU,This is the Homescreen, that I am thinking of making a profile screen
      </Text>
      <TouchableOpacity style ={styles.button} title = "Go to BMR Tracker"
        onPress={() => navigation.navigate('BMRTracker')}>
          <View style={{ flexDirection: 'row' }}>
          <Text>Press here to go to BMR Tracker</Text>
          </View>
        </TouchableOpacity>
    </SafeAreaView>
  );
}

export default HomeScreenPage;
