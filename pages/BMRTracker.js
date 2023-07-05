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

const BMRTracker = () => {
  return(
    <SafeAreaView style={styles.container}>
      <Text style={styles.textcontainer}>
        BMRTracker screen
      </Text>
    </SafeAreaView>
  );
}

export default BMRTracker;