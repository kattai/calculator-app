import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function NumberBtn({number, handleCalc}){
  return (
    <View style={styles.numberBtnContainer}>
      <TouchableOpacity onPress={()=> handleCalc(number)} style={styles.numberBtn}>
       <Text  style={styles.numberBtnText}>{number}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  numberBtnContainer: {
    width: '33.3%',
    height: '20%'
  },
  numberBtn: {
    backgroundColor: '#333', 
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#111', 
    borderWidth:2,
  },
  numberBtnText: {
    textAlign: 'center',
    fontSize: 24,
    color: 'white'
  },
});