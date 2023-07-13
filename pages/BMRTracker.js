import { Text, SafeAreaView, Switch, View, ScrollView } from 'react-native';
import { StyleSheet } from 'react-native';
import Colors from './Colors';
import React, { useState } from 'react';
import ActivityLevel from '../components/ActivityLevel';
import BMR, { Genders } from '../components/BMR';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.PrimaryGreenColor,
    alignItems:"center",
    justifyContent:"center"
  },
  textcontainer: {
    color:Colors.WhiteTextColor,
    fontSize:40
  },
  textBMR: {
    color:Colors.MedGreenAccent,
    fontSize: 60,
    alignSelf: "baseline",
    verticalAlign: 'bottom'
  },
  slidercontainer: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center'
  }
});

class BMRTracker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userDetails: {
        gender: Genders.Male,
        weightKg: 60,
        heightCm: 180,
        ageYr: 20
      },
      activityLevel: 3
    }
  }

  render() {
    return(
      <SafeAreaView style={styles.container}>
        <ActivityLevel
          value={this.state.activityLevel}
          onValueChange={value => {
            this.setState({
              activityLevel: value,
              userDetails: this.state.userDetails
            })
          }}
        />
        <BMR activityLevel={ () => this.state.activityLevel } userDetails={ () => this.state.userDetails }/>
      </SafeAreaView>
    );
  }
}






export default BMRTracker;