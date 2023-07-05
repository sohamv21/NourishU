import { Text, SafeAreaView } from 'react-native';
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