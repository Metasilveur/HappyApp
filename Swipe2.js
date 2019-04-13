import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';

import CardStack, { Card } from 'react-native-card-stack-swiper';

const Assets = [
  { id: "1", uri: require('./assets/FakePicture/1.jpg')},
  { id: "2", uri: require('./assets/FakePicture/2.jpg')},
  { id: "3", uri: require('./assets/FakePicture/3.jpg')},        
  { id: "4", uri: require('./assets/FakePicture/4.jpg')},
  { id: "5", uri: require('./assets/FakePicture/5.jpg')},
  { id: "6", uri: require('./assets/FakePicture/6.jpg')},
  { id: "7", uri: require('./assets/FakePicture/7.jpg')},
]


export default class App extends Component<{}> {
  render() {

    return (
      <View style={{flex:1}}>


        <CardStack
          style={styles.content}

          renderNoMoreCards={() => <Text style={{fontWeight:'700', fontSize:18, color:'gray'}}>No more cards :(</Text>}
          ref={swiper => {
            this.swiper = swiper
          }}

          //onSwiped={() => console.log('onSwiped')}
          //onSwipedLeft={() => console.log('onSwipedLeft')}
        >
          <Card style={[styles.card, styles.card1]}><Image style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 20 }} source={Assets[0].uri} /></Card>
          <Card style={[styles.card, styles.card1]}><Image style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 20 }} source={Assets[1].uri} /></Card>
          <Card style={[styles.card, styles.card1]}><Image style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 20 }} source={Assets[2].uri} /></Card>
          <Card style={[styles.card, styles.card1]}><Image style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 20 }} source={Assets[3].uri} /></Card>
          <Card style={[styles.card, styles.card1]}><Image style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 20 }} source={Assets[4].uri} /></Card>
          <Card style={[styles.card, styles.card1]}><Image style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 20 }} source={Assets[5].uri} /></Card>
          <Card style={[styles.card, styles.card1]}><Image style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 20 }} source={Assets[6].uri} /></Card>


        </CardStack>


        <View style={styles.footer}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={[styles.button,styles.red]} onPress={()=>{
              this.swiper.swipeLeft();
            }}>
              <Image source={require('./assets/red.png')} resizeMode={'contain'} style={{ height: 62, width: 62 }} />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button,styles.orange]} onPress={() => {
              this.swiper.goBackFromLeft();
            }}>
              <Image source={require('./assets/back.png')} resizeMode={'contain'} style={{ height: 32, width: 32, borderRadius: 5 }} />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button,styles.green]} onPress={()=>{
              this.swiper.swipeRight();
            }}>
              <Image source={require('./assets/green.png')} resizeMode={'contain'} style={{ height: 62, width: 62 }} />
            </TouchableOpacity>
          </View>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#f2f2f2',
  },
  content:{
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card:{
    width: 320,
    height: 470,
    backgroundColor: '#FE474C',
    borderRadius: 5,
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity:0.5,
  },
  card1: {
    backgroundColor: '#FE474C',
  },
  card2: {
    backgroundColor: '#FEB12C',
  },
  label: {
    lineHeight: 400,
    textAlign: 'center',
    fontSize: 55,
    fontFamily: 'System',
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  footer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  buttonContainer:{
    width:220,
    flexDirection:'row',
    justifyContent: 'space-between',
  },
  button:{
    shadowColor: 'rgba(0,0,0,0.3)',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity:0.5,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center',
    zIndex: 0,
  },
  orange:{
    width:55,
    height:55,
    borderWidth:6,
    borderColor:'rgb(246,190,66)',
    borderWidth:4,
    borderRadius:55,
    marginTop:-15
  },
  green:{
    width:75,
    height:75,
    backgroundColor:'#fff',
    borderRadius:75,
    borderWidth:6,
    borderColor:'#01df8a',
  },
  red:{
    width:75,
    height:75,
    backgroundColor:'#fff',
    borderRadius:75,
    borderWidth:6,
    borderColor:'#fd267d',
  }
});
