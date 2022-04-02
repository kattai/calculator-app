import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import NumberBtn from './components/NumberBtn';


export default function App() {

  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [operator, setOperator] = useState('');
  const [strCalc, setStrCalc] = useState('0');

  let numbers = [];
  for(let i = 0; i <= 9; i++){
    numbers.push(i);
  }

  const handleCalc = (param) => {
    if(operator == ''){
      setFirstNumber(parseInt(firstNumber.toString() + param.toString()));
      setStrCalc(parseInt(firstNumber.toString() + param.toString()))
    }
    if((param === '/' || param === '*' || param === '+' || param === '-') && secondNumber === 0){
      setStrCalc(firstNumber.toString() + param);
      setOperator(param);
    }
    if(operator != ''){
      setSecondNumber(parseInt(secondNumber.toString() + param.toString()));
      setStrCalc(firstNumber + operator + parseInt(secondNumber.toString() + param.toString()));
    }
    if(param === '='){

      let result = 0;

      if(operator === '+'){
        result = firstNumber + secondNumber;
      }
      if(operator === '-'){
        result = firstNumber - secondNumber;
      }
      if(operator === '/'){
        result = firstNumber / secondNumber;
      }
      if(operator === '*'){
        result = firstNumber * secondNumber;
      }
      setStrCalc(result);
      setOperator('');
      setFirstNumber(result);
      setSecondNumber(0);
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.header}>
        <Text style={{fontSize: 70, color:'white'}}>{strCalc}</Text>
      </View>
      <View style={styles.operatorContainer}>
        <TouchableOpacity onPress={() => handleCalc('+')} style={styles.operatorBtn}>
          <Text style={{fontSize:24, color: 'white'}}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleCalc('-')} style={styles.operatorBtn}>
          <Text style={{fontSize:24, color: 'white'}}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleCalc('/')} style={styles.operatorBtn}>
          <Text style={{fontSize:24, color: 'white'}}>/</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleCalc('*')} style={styles.operatorBtn}>
          <Text style={{fontSize:24, color: 'white'}}>*</Text>
        </TouchableOpacity>
      </View>
      <View  style={styles.numbersContainer}>
        {
          numbers.map(
            (number) => {
              return (
                <NumberBtn key={number} handleCalc={handleCalc} number={number}/>
              )
            }
          )
        }
      <View style={styles.equalOperatorBtnContainer}>
      <TouchableOpacity onPress={() => handleCalc('=')} style={styles.equalOperatorBtn}>
        <Text style={styles.equalOperatorBtnText}>
          =
        </Text>
        </TouchableOpacity>
       </View>
    </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111'
  },
  header: {
    height: '16.6%',
    marginTop: 50,
    padding: 15,
    flexDirection: 'row-reverse',

  },
  operatorContainer: {
    height: '12%',
    alignItems: 'center',
    flexDirection: 'row',
  },
  operatorBtn: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    width: '25%', 
    backgroundColor: '#fcac00', 
    borderColor: '#111', 
    borderWidth:3,
  },
  numbersContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderColor: '#111',
    borderWidth: 1
  },
  equalOperatorBtnContainer: {
    flex:1,
    width: '50%',
    height: '20%'
  },
  equalOperatorBtn: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%', 
    backgroundColor: '#aaa', 
    borderColor: '#111', 
    borderWidth:2,
  },
  equalOperatorBtnText: {
    textAlign: 'center',
    fontSize: 24,
    color: 'black'
  }
});
