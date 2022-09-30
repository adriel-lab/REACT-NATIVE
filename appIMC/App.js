import React from "react";
import { StyleSheet, Text, TextInput, View, Button, Alert, Image } from "react-native";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      altura: 0,
      peso: 0,
      resultado: 0,
      texto: "", 
      
    };
    this.calcular = this.calcular.bind(this);
  }

  calcular() {
    this.state.resultado =
    this.state.peso / (this.state.altura * this.state.altura);

      if (this.state.resultado < 18.5) {
      this.state.texto = "Abaixo do peso!";
    } else if (this.state.resultado > 18.5 && this.state.resultado < 24.9) {
      this.state.texto = "Saudável!";
    } else if (this.state.resultado > 25.0 && this.state.resultado < 29.9) {
      this.state.texto = "Sobrepeso!";
    } else if (this.state.resultado > 30.0 && this.state.resultado < 34.9) {
      this.state.texto = "Obesidade Grau 1°!";
    } else if (this.state.resultado > 35.0 && this.state.resultado < 39.9) {
      this.state.texto = "Obesidade Grau 2°!";
    } else if (this.state.resultado == 40.0 || this.state.resultado > 40)  {
      this.setState.texto = "Obesidade Grau 3°";
    }
    this.setState(this.state);
  }
  
  render() {
    let img = 'https://www.canalspatz.com.br/wp-content/uploads/2019/11/IMAGEM-DESTAQUE-BLOG-INFOGRAFICO-SPATZ.png';
    return (
      
      <View>
        <View style={styles.topo}>
		       <Text style={styles.txtTitulo}>Cálculo do IMC</Text>
	      </View>

      <View>
            <Image
             source={{ uri: img }}
             style={{ width: 370, height: 200, alignItems: 'center', marginTop: 20}}
            />
          </View>  
       
        <View style={{ justifyContent: "center", alignItems: "center"}}>
          <TextInput
            autoCapitalize="none"
            placeholder="Informe seu peso:"
            keyboardType="numeric"
            style={styles.input}
            onChangeText={peso => {
              this.setState({ peso });
            }}
          />

          <TextInput
            autoCapitalize="none"
            placeholder="Informe sua altura:"
            keyboardType="numeric"
            style={styles.input}
            onChangeText={altura => {
              this.setState({ altura });
            }}
          />
        </View>
        <View>
          <Button onPress={this.calcular} title="Calcular" />
        </View>
        <Text style={styles.resultado}>{this.state.resultado.toFixed(2)}</Text>
        <Text style={styles.resultado}>{this.state.texto}</Text>
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
  input: {
    height: 45,
    borderWidth: 1,
    margin: 10,
    fontSize: 20,
    padding: 10,
    flexDirection: 'row',
		justifyContent: 'space-between'
  },
  resultado: {
    alignSelf: "center",
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    padding: 0
  }
});














