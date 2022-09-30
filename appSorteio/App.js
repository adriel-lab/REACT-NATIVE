import React from 'react';
import { View, Text, StyleSheet, Button, Image} from 'react-native';

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      resultado: 0,
    };

    this.sorteio = this.sorteio.bind(this);
  }

  sorteio(){
    resultado = Math.floor(Math.random() * 10);
    this.setState({resultado});
  }

  render(){
    let img = 'https://play-lh.googleusercontent.com/Uri3O5FHC1bKNp65qn41rFOr6p1SPJwhh_coUauiRC8eiGdgPWNCjNecDIAM4S1BmA4';
    return(
      <View>
        <View style={styles.topo}>
		       <Text style={styles.txtTitulo}>Jogo do Nº Aleatório</Text>
	      </View>
        <View>
            <Image
             source={{ uri: img }}
             style={{ width: 332, height: 270, alignItems: 'center', marginTop: 10}}
            />
          </View>  
        <Text style={{ textAlign: 'center',fontSize: 20, marginTop: 10,}}>Pense em um  Nº de 0 a 10 </Text>
        <Text style={{ textAlign: 'center',fontSize: 20, marginTop: 10,}}> {this.state.resultado} </Text>
        <View>
          <Button title="Descobrir" onPress={this.sorteio} />
        </View>
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
	}
});
