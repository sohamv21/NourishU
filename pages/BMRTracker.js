import { Text, SafeAreaView, Switch, View } from 'react-native';
import { StyleSheet } from 'react-native';
import Colors from './Colors';
import React, { useState } from 'react';
import { Slider } from '@react-native-assets/slider';

export const Genders = Object.freeze({
  Male: Symbol("Male"),
  Female: Symbol("Female")
});

export const ActivityLevels = Object.freeze({
  Sedentary: 1.2,
  LightActivity: 1.375,
  ModerateActivity: 1.55,
  HighActivity: 1.725,
  SuperActive: 1.9
});

export const ActivityDescriptions = Object.freeze({
  Sedentary: "Little or no exercise.",
  LightActivity: "Light exercise 1-3 days/week.",
  ModerateActivity: "Moderate exercise 3-5 days/week.",
  HighActivity: "Hard exercise 6-7 days/week.",
  SuperActive: "Very hard exercise and a physical job."
});

const warningColors = {
  Warning: '#ffcc00',
  WarningBorder: '#ffe680',
}

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
  noticeContainer: {
    backgroundColor: warningColors.WarningBorder,
    borderColor: warningColors.Warning,
    borderRadius: 10,
    borderWidth: 4,
    padding: 10,
    opacity: .75
  }
});

class BMRTracker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userDetails: {
        gender: Male,
        weightKg: 60,
        heightCm: 180,
        ageYr: 20
      },
      activityLevel: ActivityLevels.Sedentary
    }
  }

  render() {
    return(
      <SafeAreaView style={styles.container}>
        <View>
          <Slider 
            minimumValue={1}
            maximumValue={5}
            value={3}
            step={1}
          />
          <Text style={{...styles.textcontainer}}>
            Your BMR is:
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={{...styles.textBMR}}>
              {Math.round(BMR_Mifflin_St_Jeor(this.state.userDetails.gender, 62.5, 180, 20))}
            </Text>
            <Text style={{...styles.textBMR, fontSize: 40, paddingLeft: 20}}>
              Cal/day
            </Text>
          </View>
          <Warning></Warning>
        </View>
      </SafeAreaView>
    );
  }
}

export function CalculateBMR(userDetails, activityLevel) {
  baseBMR = BMR_Mifflin_St_Jeor(userDetails.gender, userDetails.weightKg, userDetails.heightCm, userDetails.ageYr);
  return Math.round(baseBMR * ActivityLevels[activityLevel]);
}

function BMR_Mifflin_St_Jeor(gender, weightKg, heightCm, ageYr) {
  intVal = 10 * weightKg + 6.25 * heightCm - 5 * ageYr;
  switch (gender) {
    case Genders.Male:
      return intVal + 5;
    case Genders.Female:
      return intVal - 161;
    default:
      throw new Error("Gender must be Male or Female.");
  }
}

const Warning = () => {
  return (
    <View style={{...styles.noticeContainer}}>
      <Text style={{fontSize: 10}}>⚠️ This figure is an estimate, and should be treated as such.</Text>
    </View>
  )
}

export default BMRTracker;