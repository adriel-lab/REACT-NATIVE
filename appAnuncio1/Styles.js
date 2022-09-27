import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container:{
    flex: 1
  },
  box:{
    height: 150,
  },
  textoTittle:{
    fontSize: 30,
    textAlign: 'center',
    color: 'blue',
    margin: 50,
  },
  imagem:{
    resizeMode: 'stretch',
    height: 400,
    width: 400,
    margin: 10,
    borderRadius: 5,
  },
  texto:{
    fontSize: 13,
    textAlign: 'center',
    margin: 10,
    color: 'black',
  },
  box0:{
    alignItems: 'center',
    height: 400,
    width: 400,
    margin: 10,
    borderColor: 'black',
  },
  box1:{
    alignItems: 'center',
    backgroundColor: '#eaeaea',
    height: 400,
    width: 400,
    marginRight: 10,
    marginLeft: 10,
  },
})
export {styles};