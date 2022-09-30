import React from 'react';
import { View, Text, StyleSheet, TextInput, Button, Image} from 'react-native';

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      n1: 0,
      n2: 0,
      resultado: "",
      calc: 0,
    };
    
    this.calcular = this.calcular.bind(this);
  }
 
  calcular(){
    calc = this.state.n1 / this.state.n2;
    if(this.state.n1 == this.state.n2){
      this.setState({resultado: "Tanto faz!"});
    } else if(calc < 0.7) {
      this.setState({resultado: "Alcool"});
    } else {
      this.setState({resultado: "Gasolina"});
    }
  }
 
  render(){
    let img = 'http://minaspetro.com.br/blog/wp-content/uploads/2019/01/afinal-o-que-um-dono-de-posto-de-combustivel-deve-fazer-para-ter-sucesso-770x400.jpeg';
    return(
      <View>
          <View style={styles.topo}>
		       <Text style={styles.txtTitulo}>Alcool ou Gasolina</Text>
	        </View>

          <View>
            <Image
             source={{ uri: img }}
             style={{ width: 330, height: 200, alignItems: 'center', marginTop: 20}}
            />
          </View>      
      
        <TextInput style={styles.input} placeholder="Preço do Alcool" 
        onChangeText={n1 => {this.setState({ n1 });}} keyboardType="numeric" />

        <TextInput style={styles.input} placeholder="Preço da Gasolina" 
        onChangeText={n2 => {this.setState({ n2 });}} keyboardType="numeric" />

        <View>
          <Button title="Verificar" onPress={this.calcular} />
        </View>

        <Text style={styles.resul}> Resultado {this.state.resultado} </Text>
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
    margin: 10,
    fontSize: 20,
    padding: 10,
    flexDirection: 'row',
		justifyContent: 'space-between'
  },
  resul:{
    textAlign: 'center',
    fontSize: 25,
    color: '#f00',
  }
});
