import React from 'react';
import { ActivityLevels } from './ActivityLevel';
import { Text,View, StyleSheet } from 'react-native';
import Warning from './Warning';
import Colors from '../pages/Colors';

const styles = StyleSheet.create({
	header: {
		color: Colors.WhiteTextColor,
		fontSize: 40,
	},
	figure: {
		color: Colors.MedGreenAccent,
		fontSize: 60,
		verticalAlign: 'middle',
	},
	unit: {
		color: Colors.LightGreenAccent,
		fontSize: 40,
		verticalAlign: 'middle',
	}
});

class BMR extends React.Component {
    constructor(props) {
        super(props);
    }

	bmr() {
		activityLevel = this.props.activityLevel();
		details = this.props.userDetails();

		return CalculateBMR(details.gender, details.weightKg, details.heightCm, details.ageYr, activityLevel);
	}
	
    render() {
        return (
            <View>
				<Text style={{ ...styles.header }}>Your BMR is</Text>
				<View style={{ flexDirection: 'row' }}>
					<Text style={{ ...styles.figure }}>{ this.bmr() }</Text>
					<Text style={{ ...styles.unit }}>Cal/day</Text>
				</View>
				<Warning/>
			</View>
        );
    }
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

export const Genders = Object.freeze({
    Male: Symbol("Male"),
    Female: Symbol("Female")
});

export function CalculateBMR(gender, weightKg, heightCm, ageYr, activityLevel) {
    baseBMR = BMR_Mifflin_St_Jeor(gender, weightKg, heightCm, ageYr);
    return Math.round(baseBMR * ActivityLevels[activityLevel]);
}

export default BMR;