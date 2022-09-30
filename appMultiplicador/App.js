import React from 'react';
import { View, Text, StyleSheet, TextInput, Button} from 'react-native';
 
export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      input1: 0,
      input2: 0,
      resultado: 0,
    };
    
    this.multiplicar = this.multiplicar.bind(this);
  }
 
  multiplicar(){
    this.setState({resultado: this.state.input1 * this.state.input2});
  }
 
  render(){
    return(
      <View>
      <View style={styles.topo}>
		       <Text style={styles.txtTitulo}>Multiplicador de Numeros </Text>
	      </View>
        
        <TextInput style={styles.input} placeholder="Digite o primeiro número" onChangeText={input1 => {this.setState({ input1 });}} keyboardType="numeric" />

        <TextInput style={styles.input} placeholder="Digite o segundo número" onChangeText={input2 => {this.setState({ input2 });}} keyboardType="numeric" />

        <View>
          <Button title="Multiplicar" onPress={this.multiplicar} />
        </View>

        <Text style={{ textAlign: 'center',fontSize: 20, marginTop: 10,}}> Resultado: {this.state.resultado} </Text>
      </View>
    );
  }
}
 
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
  input:{
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    margin: 10,
    fontSize: 20,
    padding: 10,
  },
});