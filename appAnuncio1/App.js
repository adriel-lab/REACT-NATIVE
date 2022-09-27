import React, { Component } from 'react';
import { View, ScrollView, Text, Image } from 'react-native';
import {styles} from './Styles';
 
class App extends Component{
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.textoTittle}>Vagas de emprego: </Text>
        </View>
        <View style={styles.box0}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.box1}>
              <Image source={require('./emprego.png')} style={styles.imagem} />
              <Text style={styles.texto}>.</Text>
            </View>
            <View style={styles.box1}>
              <Image source={require('./emprego.png')} style={styles.imagem} />
              <Text style={styles.texto}></Text>
            </View>
            <View style={styles.box1}>
              <Image source={require('./emprego.png')} style={styles.imagem} />
              <Text style={styles.texto}></Text>
            </View>
            <View style={styles.box1}>
              <Image source={require('./emprego.png')} style={styles.imagem} />
              <Text style={styles.texto}></Text>
            </View>
            <View style={styles.box1}>
              <Image source={require('./emprego.png')} style={styles.imagem} />
              <Text style={styles.texto}></Text>
            </View>
            <View style={styles.box1}>
              <Image source={require('./emprego.png')} style={styles.imagem} />
              <Text style={styles.texto}></Text>
            </View>
            <View style={styles.box1}>
              <Image source={require('./emprego.png')} style={styles.imagem} />
              <Text style={styles.texto}></Text>
            </View>
            <View style={styles.box1}>
              <Image source={require('./emprego.png')} style={styles.imagem} />
              <Text style={styles.texto}></Text>
            
            </View>
             <View style={styles.box1}>
              <Image source={require('./emprego.png')} style={styles.imagem} />
              <Text style={styles.texto}>.</Text>
            </View>
             <View style={styles.box1}>
              <Image source={require('./emprego.png')} style={styles.imagem} />
              <Text style={styles.texto}>.</Text>
            </View>
            <View style={styles.box1}>
              <Image source={require('./emprego.png')} style={styles.imagem} />
              <Text style={styles.texto}></Text>
            </View>
            <View style={styles.box1}>
              <Image source={require('./emprego.png')} style={styles.imagem} />
              <Text style={styles.texto}></Text>
            </View>
            <View style={styles.box1}>
              <Image source={require('./emprego.png')} style={styles.imagem} />
              <Text style={styles.texto}></Text>
            </View>
            <View style={styles.box1}>
              <Image source={require('./emprego.png')} style={styles.imagem} />
              <Text style={styles.texto}></Text>
            </View>
            <View style={styles.box1}>
              <Image source={require('./emprego.png')} style={styles.imagem} />
              <Text style={styles.texto}></Text>
            </View>
            <View style={styles.box1}>
              <Image source={require('./emprego.png')} style={styles.imagem} />
              <Text style={styles.texto}></Text>
            </View>
            <View style={styles.box1}>
              <Image source={require('./emprego.png')} style={styles.imagem} />
              <Text style={styles.texto}></Text>
            
            </View>
             <View style={styles.box1}>
              <Image source={require('./emprego.png')} style={styles.imagem} />
              <Text style={styles.texto}>.</Text>
            </View>
          </ScrollView>
        </View>
      </View>
    )
  }
}
export default App;