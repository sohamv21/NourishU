import { Text, SafeAreaView } from 'react-native';
import { StyleSheet } from 'react-native';
import Colors from './Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.PrimaryGreenColor,
    alignItems:"center",
    justifyContent:"center"
  },
  textcontainer: {
    color:Colors.WhiteTextColor,
    fontSize:20
  }
});

const CalorieTracker = () => {
  return(
    <SafeAreaView style={styles.container}>
      <Text style={styles.textcontainer}>
        CalorieTracker
      </Text>
    </SafeAreaView>
  );
}

export default CalorieTracker;