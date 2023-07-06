import { Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';

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

const HomeScreenPage = ({navigation}) => {
  return(
    <SafeAreaView style={styles.container}>
      <Text style={styles.textcontainer}>
        Welcome to NourishU,This is the Homescreen, that I am thinking of making a profile screen
      </Text>
      <TouchableOpacity title="Go to BMR Tracker"
        onPress={() => navigation.navigate('BMRTracker')}>
          <Text>Press here to go to details</Text>
        </TouchableOpacity>
    </SafeAreaView>
  );
}

export default HomeScreenPage;
