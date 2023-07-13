import { Text, SafeAreaView, Switch, View, ScrollView } from 'react-native';
import { StyleSheet } from 'react-native';
import Colors from './Colors';
import React, { useState } from 'react';
import { Slider } from '@miblanchard/react-native-slider';

export const Genders = Object.freeze({
  Male: Symbol("Male"),
  Female: Symbol("Female")
});

export const ActivityLevels = Object.freeze({
  1: 1.2,
  2: 1.375,
  3: 1.55,
  4: 1.725,
  5: 1.9
});

export const ActivityDescriptions = Object.freeze({
  1: "Little or no exercise.",
  2: "Light exercise 1-3 days/week.",
  3: "Moderate exercise 3-5 days/week.",
  4: "Hard exercise 6-7 days/week.",
  5: "Very hard exercise and a physical job."
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
    bmr = CalculateBMR(this.state.userDetails, this.state.activityLevel)

    return(
      <SafeAreaView style={styles.container}>
        <View>
          <ActivitySlider
            value={3}
          />
          <Text style={{...styles.textcontainer}}>
            Your BMR is:
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={{...styles.textBMR}}>{bmr}</Text>
            <Text style={{...styles.textBMR, fontSize: 40, paddingLeft: 20}}>
              Cal/day
            </Text>
          </View>
          <Warning/>
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

class ActivitySlider extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      value: props.value
    }
  }

  render() {
    return (
      <View>
        <Text style={{...styles.textcontainer}}>Select your activity level:</Text>
        <Slider 
          minimumValue={1}
          maximumValue={5}
          step={1}
          value={this.state.value}
          onValueChange={this.handleChange}
        />
        <Text style={{...styles.textcontainer, fontSize: 14}}>{ActivityDescriptions[this.state.value]}</Text>
      </View>
    )
  }

  handleChange(value) {
    this.setState({value: value})
  }

}

export default BMRTracker;