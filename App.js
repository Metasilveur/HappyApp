import React from 'react';
import { StyleSheet, Dimensions, Text, View, Button,Image,TouchableOpacity, Animated} from 'react-native';
import Search from './Components/Search'

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

const Assets = [
  { id: "1", uri: require('./assets/FakePicture/1.jpg')},
  { id: "2", uri: require('./assets/FakePicture/2.jpg')},
  { id: "3", uri: require('./assets/FakePicture/3.jpg')},        
  { id: "4", uri: require('./assets/FakePicture/4.jpg')},
  { id: "5", uri: require('./assets/FakePicture/5.jpg')},
  { id: "6", uri: require('./assets/FakePicture/6.jpg')},
  { id: "7", uri: require('./assets/FakePicture/7.jpg')},
]

export default class App extends React.Component {

  constructor() {
    super();
    global.MyVar = 0;
    this.state = {
    textValue : 'Text1'
  }
  }

  onPress = () => {
    var str1 = 'Test'
    var cpt = 5
    MyVar += 1
    if(MyVar > 6)
    {
      MyVar = 0
    }
    this.setState({
      textValue : str1+" "+MyVar
    })
  }

  render() {
    return (
      <View style={{marginTop: 30, flex: 1}}>

        <View style={{ flex: 4, justifyContent: "center", alignItems: "center"}}>
          <Animated.View style={{ height: SCREEN_HEIGHT - 120, width: SCREEN_WIDTH, padding: 10}}>

          <Image style={{ flex: 1, width: null, height: null, resizeMode: 'cover', borderRadius: 20}} source={Assets[MyVar].uri} />

          </Animated.View>  
        </View>
        <View style={{ flex: 1,flexDirection: "row",backgroundColor: 'black' }}>
          <View style={{ flex: 1, backgroundColor: 'red', justifyContent: "center", alignItems: "center" }}>
            <TouchableOpacity activeOpacity = { .5 } onPress={ this.onPress }>
              <Image style={{width: 100, height: 100}} source={require('./assets/unhappy.png')} />
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1, backgroundColor: 'blue', justifyContent: "center", alignItems: "center" }}>
            <TouchableOpacity activeOpacity = { .5 } onPress={ this.onPress }>
              <Image style={{width: 100, height: 100}} source={require('./assets/happy.png')} />
            </TouchableOpacity>
          </View>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    textAlign: 'center',
    fontSize: 21,
    fontWeight: 'bold',
  },
});
