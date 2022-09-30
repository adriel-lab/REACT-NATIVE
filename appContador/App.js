import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View,} from 'react-native';

const App = () => {
  const [count, setCount] = useState(0);
  const onPress = () => setCount((prevCount) => prevCount + 1);
  const onPress1 = () => setCount((prevCount) => prevCount - 1);
 
  return (

    <View>
     <View style={styles.topo}>
		    <Text style={styles.txtTitulo}>Contador de Pessoas</Text>
	    </View>
      <View style={styles.countContainer}>
    <Text style={{ textAlign: 'center',fontSize: 50, marginTop: 10,}}>{count}</Text>
        
      </View>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={{color:'red', fontSize: 30, margin: 20}}>
        +
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button2} onPress={onPress1}>
        <Text style={{color:'blue', fontSize: 30, margin: 20}}>
        -
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
 topo: {
		backgroundColor: '#2196F3',
		padding: 10,
		alignItems: 'center'
	},
	txtTitulo: {
		fontSize: 25,
		color: '#FFF'
	},
  button: {
    alignItems: 'center',
    backgroundColor: '#00f',
    padding: 10,
  },
  button2: {
    alignItems: 'center',
    backgroundColor: '#f00',
    padding: 10,
  },
  countContainer: {
    alignItems: 'center',
    padding: 10,
  },
  
});

export default App;