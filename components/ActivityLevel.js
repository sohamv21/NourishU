import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Slider } from '@miblanchard/react-native-slider';
import Colors from '../pages/Colors';

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

const styles = StyleSheet.create({
    header: {
        color: Colors.WhiteTextColor,
        fontSize: 30
    },
    description: {
        color: Colors.WhiteTextColor,
        fontSize: 14
    }
})

class ActivityLevel extends React.Component {
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
          <Text style={{...styles.header}}>Select your activity level:</Text>
          <Slider 
            minimumValue={1}
            maximumValue={5}
            step={1}
            value={this.state.value}
            onValueChange={this.handleChange}
          />
          <Text style={{...styles.description, fontSize: 14}}>{ActivityDescriptions[this.state.value]}</Text>
        </View>
      )
    }
  
    handleChange(value) {
      this.setState({value: value})
      if (this.props.onValueChange != null) {
        this.props.onValueChange(value)
      }
    }
  
}

export default ActivityLevel;