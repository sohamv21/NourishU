import { Text, View, StyleSheet } from "react-native";

const warningColors = {
  Warning: '#ffcc00',
  WarningBorder: '#ffe680',
}

const styles = StyleSheet.create({
  noticeContainer: {
    backgroundColor: warningColors.WarningBorder,
    borderColor: warningColors.Warning,
    borderRadius: 10,
    borderWidth: 4,
    padding: 10,
    opacity: .75
  }
});

const Warning = () => {
    return (
      <View style={{...styles.noticeContainer}}>
        <Text style={{fontSize: 10}}>⚠️ This figure is an estimate, and should be treated as such.</Text>
      </View>
    )
}

export default Warning;