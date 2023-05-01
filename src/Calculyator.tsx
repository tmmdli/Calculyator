import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { create } from "react-test-renderer";





 const Calculyator=()=>{
   const [result, setResult] = useState(''); 
  const [firstnumber, setFirstnumber] = useState('0');
  const [operator, setoperator] = useState(null); 

  const setNumber =(number) => { 
    if (result === 0) { 
      setResult(number); 
    } else { 
      setResult(result + number); 
    } 
  };

  
  
  const operand = (arq:String) => { 
    setoperator(arq); 
    setFirstnumber(parseInt(result)); 
    setResult(''); 
  }; 


  useEffect( () =>{
    if(result === Infinity){
        setResult(parseInt('eror'))
    } }, [result]);



  const equal=()=>{
  switch (operator) { 
    case '+': 
      setResult(parseInt(firstnumber) + parseInt(result)); 
      break; 
    case '-': 
      setResult(parseInt(firstnumber) - parseInt(result)); 
      break; 
    case '*': 
      setResult(parseInt(firstnumber) * parseInt(result)); 
      break; 
    case '/': 
      setResult(parseInt(firstnumber) / parseInt(result)); 
      break;
      case '%': 
      setResult(parseInt(firstnumber) % parseInt(result)); 
      break; 
    default: 
      setResult(0); 
      break; }
  }


    return ( 
        <View style={styles.container}> 
            <View style={styles.resultContainer}> 
                <Text style={styles.text}>{result}</Text> 
            </View> 
            <View style={styles.buttonContainer}> 
                <TouchableOpacity 
                    style={styles.buttonoperator} 
                    onPress={() => operand('C')}> 
                    <Text style={styles.operatortext}>C</Text> 
                </TouchableOpacity> 
                <TouchableOpacity 
                    style={styles.buttonoperator} 
                    onPress={() => setoperand('DEL')}> 
                    <Text style={styles.operatortext}>DEL</Text> 
                </TouchableOpacity> 
                <TouchableOpacity 
                    style={styles.buttonoperator} 
                    onPress={() => operand('%')}> 
                    <Text style={styles.operatortext}>%</Text> 
                </TouchableOpacity> 
                <TouchableOpacity 
                    style={styles.buttonoperator} 
                    onPress={() => operand('/')}> 
                    <Text style={styles.operatortext}>/</Text> 
                </TouchableOpacity> 
                <TouchableOpacity 
                    style={styles.button} 
                    onPress={() => setNumber('7')}> 
                    <Text style={styles.buttonText}>7</Text> 
                </TouchableOpacity> 
                <TouchableOpacity 
                    style={styles.button} 
                    onPress={() => setNumber('8')}> 
                    <Text style={styles.buttonText}>8</Text> 
                </TouchableOpacity> 
                <TouchableOpacity 
                    style={styles.button} 
                    onPress={() => setNumber('9')}> 
                    <Text style={styles.buttonText}>9</Text> 
                </TouchableOpacity> 
                <TouchableOpacity 
                    style={styles.buttonoperator} 
                    onPress={() => operand('*')}> 
                    <Text style={styles.operatortext}>*</Text> 
                </TouchableOpacity> 
                <TouchableOpacity 
                    style={styles.button} 
                    onPress={() => setNumber('4')}> 
                    <Text style={styles.buttonText}>4</Text> 
                </TouchableOpacity> 
                <TouchableOpacity 
                    style={styles.button} 
                    onPress={() => setNumber('5')}> 
                    <Text style={styles.buttonText}>5</Text> 
                </TouchableOpacity> 
                <TouchableOpacity 
                    style={styles.button} 
                    onPress={() => setNumber('6')}> 
                    <Text style={styles.buttonText}>6</Text> 
                </TouchableOpacity> 
                <TouchableOpacity 
                    style={styles.buttonoperator} 
                    onPress={() => operand('-')}> 
                    <Text style={styles.operatortext}>-</Text> 
                </TouchableOpacity> 
                <TouchableOpacity 
                    style={styles.button} 
                    onPress={() => setNumber('1')}> 
                    <Text style={styles.buttonText}>1</Text> 
                </TouchableOpacity> 
                <TouchableOpacity 
                    style={styles.button} 
                    onPress={() => setNumber('2')}> 
                    <Text style={styles.buttonText}>2</Text> 
                </TouchableOpacity> 
                <TouchableOpacity 
                    style={styles.button} 
                    onPress={() => setNumber('3')}> 
                    <Text style={styles.buttonText}>3</Text> 
                </TouchableOpacity> 
                <TouchableOpacity 
                    style={styles.buttonoperator} 
                    onPress={() => operand('+')}> 
                    <Text style={styles.operatortext}>+</Text> 
                </TouchableOpacity> 
                <TouchableOpacity 
                    style={styles.buttonoperator} 
                    onPress={() => setNumber('3')}> 
                    <Text style={styles.operatortext}>Pi</Text> 
                </TouchableOpacity> 
                <TouchableOpacity 
                    style={styles.button} 
                    onPress={() => setNumber('0')}> 
                    <Text style={styles.buttonText}>0</Text> 
                </TouchableOpacity> 
                <TouchableOpacity 
                    style={styles.button} 
                    onPress={() => operand(',')}> 
                    <Text style={styles.buttonText}>,</Text> 
                </TouchableOpacity> 
                <TouchableOpacity 
                    style={styles.buttonoperator} 
                    onPress={() => equal('=')}> 
                    <Text style={styles.operatortext}>=</Text> 
                </TouchableOpacity> 
            </View> 
        </View> 
    ); 
};

    export default Calculyator;
 
  
 
const styles = StyleSheet.create({ 
    container: { 
        flex: 1 
    }, 
 
    text: { 
        fontSize: 50, 
        color: 'black', 
        fontWeight: 'bold', 
 
 
    }, resultContainer: { 
        flex: 1, 
        justifyContent: 'flex-end', 
        alignItems: 'flex-end' 
 
    }, 
 
    button: { 
        width: '24%', 
        height: 110, 
        backgroundColor: '#8b8989', 
        borderRadius: 25, 
        justifyContent: 'center', 
        alignItems: 'center', 
 
 
    }, 
    buttonText: { 
        fontSize: 40, 
        color: 'black', 
        fontWeight: '700' 
    }, 
    buttonoperator: { 
        width: '24%', 
        height: 110, 
        backgroundColor: 'orange', 
        borderRadius: 25, 
        justifyContent: 'center', 
        alignItems: 'center', 
 
    }, 
    operatortext: { 
 
        fontSize: 40, 
        color: 'black', 
        fontWeight: '700' 
 
    }, 
 
 
    buttonContainer: { 
        flexDirection: 'row', 
        flexWrap: 'wrap', 
        gap: 4, 
        justifyContent: 'center', 
        alignItems: 'center', 
 
 
    },
 
})
