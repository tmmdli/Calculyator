import React from "react"; 
import { SafeAreaView,StyleSheet } from "react-native"; 
import Calculyator from  './Calculyator'; 
 
const App = () =>{ 
  return( 
    <SafeAreaView style={styles.container}> 
      <Calculyator/> 
    </SafeAreaView> 
  ); 
}; 
 
const styles=StyleSheet.create({ 
container:{ 
  flex:1, 
  backgroundColor:'#eee9e9' 
}, 
 
}); 
export default App;
