import React, { Component } from 'react';
import { View, Text, Image} from 'react-native';
 
class App extends Component{
  render(){
 
    let nome = 'APP 01';
    let img = 'https://scontent-gru1-1.xx.fbcdn.net/v/t39.30808-6/300443439_2054051114984358_3005833119311329864_n.jpg?stp=dst-jpg_s640x640&_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeGlPhAHngKoZlCk6la2qw4HKB38wy_WMIYoHfzDL9YwhljNIanW3E8S5ZTc3LuVDQpJF0SbdBkHrwBQzLSwO6Hc&_nc_ohc=inY2--hQI0UAX8l8PPY&tn=uN7EO57l4zoSSegv&_nc_ht=scontent-gru1-1.xx&oh=00_AT8aai6nhIlq-WqhfhuSeY8ATzCYqGGNapzZLq4RmcrKQA&oe=6316BEB8';
    let tel ="Telefone: 13 99645-3169";
    let ra ="1290482022014"
    let form = "Análise e Desenvolvimento de sistemas";
   
    let proj = "";
    return(
      <View>
        
        <Text>Adriel Dias</Text>
        <Text style={{color: '#FF0000', fontSize: 25, margin: 15}}>
          React Native
        </Text>
 
        <Image
          source={{ uri: img }}
          style={{ width: 300, height: 300}}
        />
 
        <Text style={{ fontSize: 30 }}>{nome}</Text>
        <Text style={{ fontSize: 30 }}>Adriel Dias</Text>
        <Text style={{ fontSize: 30 }}>DADOS PESSOAIAS</Text>
        <Text>Telefone: 13 99645-3169</Text>
        <Text>RA: 1290482022014 </Text>
        <Text style={{ fontSize: 30 }}>EXPERIENCIA</Text>
        <Text> Adriel Dias, Estudante de Analise e Desenvolvimento de Sistemas
Procuro sempre por desafios e expandir os meus conhecimentos
e que também possibilite o meu desenvolvimento intelectual e
profissional.
Com conhecimentos avançados em manutenção de computadores,
configuração e instalação de
software, grande capacidade em lidar com desafios e excelente
comunicação oral e escrita, conciliando
conhecimentos técnicos nos seguintes topicos: Office – Photoshop
– Java – JavaScript - Node - Inglês intermediário - SQL - ORACLE -
PhP
• Desenvolvimento de aplicações web com Java, Mysql, JavaScript,
Ajax.JS, PHP, Jquery.
• Monitorias e aulas de Engenharia de Software e Programação
Orientada a Objetos.
• Nivel avançado em manipulação de imagens com Adobe
photoshop.
</Text>

      </View>
      
    )

  
  }

  
}
 
export default App;


