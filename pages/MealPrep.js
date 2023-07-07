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

const MealPrep = () => {
  return(
    <SafeAreaView style={styles.container}>
      <Text style={styles.textcontainer}>
      This is the MealPrep screen, that will have recipe from Spoonacular API
      </Text>
    </SafeAreaView>
  );
}

export default MealPrep;