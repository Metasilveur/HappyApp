import React from 'react';
import { StyleSheet, Dimensions, Text, View, Button,Image,TouchableOpacity, Animated, PanResponder } from 'react-native';
import Search from './Components/Search'
import {StackNavigator} from 'react-navigation';

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
    this.position = new Animated.ValueXY()
    global.MyVar = 0;

    this.state = {
      currentIndex: 0
    }

    this.rotate = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: ['-10deg', '0deg', '10deg'],
      extrapolate: 'clamp'
    })

    this.rotateAndTranslate = {
      transform: [{
        rotate: this.rotate
      },
      ...this.position.getTranslateTransform()
      ]
    }

    this.likeOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [0, 0, 1],
      extrapolate: 'clamp'
    })
    this.dislikeOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1, 0, 0],
      extrapolate: 'clamp'
    })

    this.nextCardOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1, 0, 1],
      extrapolate: 'clamp'
    })
    this.nextCardScale = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1, 0.8, 1],
      extrapolate: 'clamp'
    })

  }

  componentWillMount() {
    this.PanResponder = PanResponder.create({

      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderMove: (evt, gestureState) => {

        this.position.setValue({ x: gestureState.dx, y: gestureState.dy })
      },
      onPanResponderRelease: (evt, gestureState) => {

        if (gestureState.dx > 120) {
          Animated.spring(this.position, {
            toValue: { x: SCREEN_WIDTH + 100, y: gestureState.dy }
          }).start(() => {
            this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
              this.position.setValue({ x: 0, y: 0 })
            })
          })
        }
        else if (gestureState.dx < -120) {
          Animated.spring(this.position, {
            toValue: { x: -SCREEN_WIDTH - 100, y: gestureState.dy }
          }).start(() => {
            this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
              this.position.setValue({ x: 0, y: 0 })
            })
          })
        }
        else {
          Animated.spring(this.position, {
            toValue: { x: 0, y: 0 },
            friction: 4
          }).start()
        }
      }
    })
  }

  onPress = () => {
    MyVar += 1
    if(MyVar > 6)
    {
      MyVar = 0
    }
    this.setState({
    })
  }

  renderUsers = () => {

    return Assets.map((item, i) => {


      if (i < this.state.currentIndex) {
        return null
      }
      else if (i == this.state.currentIndex) {

        return (
          <Animated.View
            {...this.PanResponder.panHandlers}
            key={item.id} style={[this.rotateAndTranslate, { height: SCREEN_HEIGHT - 120, width: SCREEN_WIDTH, padding: 10, position: 'absolute' }]}>
            <Animated.View style={{ opacity: this.likeOpacity, transform: [{ rotate: '-30deg' }], position: 'absolute', top: 50, left: 40, zIndex: 1000 }}>
              <Text style={{ borderWidth: 1, borderColor: 'green', color: 'green', fontSize: 32, fontWeight: '800', padding: 10 }}>LIKE</Text>

            </Animated.View>

            <Animated.View style={{ opacity: this.dislikeOpacity, transform: [{ rotate: '30deg' }], position: 'absolute', top: 50, right: 40, zIndex: 1000 }}>
              <Text style={{ borderWidth: 1, borderColor: 'red', color: 'red', fontSize: 32, fontWeight: '800', padding: 10 }}>NOPE</Text>

            </Animated.View>

            <Image
              style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 20 }}
              source={item.uri} />

          </Animated.View>
        )
      }
      else {
        return (
          <Animated.View

            key={item.id} style={[{
              opacity: this.nextCardOpacity,
              transform: [{ scale: this.nextCardScale }],
              height: SCREEN_HEIGHT - 120, width: SCREEN_WIDTH, padding: 10, position: 'absolute'
            }]}>
            <Animated.View style={{ opacity: 0, transform: [{ rotate: '-30deg' }], position: 'absolute', top: 50, left: 40, zIndex: 1000 }}>
              <Text style={{ borderWidth: 1, borderColor: 'green', color: 'green', fontSize: 32, fontWeight: '800', padding: 10 }}>LIKE</Text>

            </Animated.View>

            <Animated.View style={{ opacity: 0, transform: [{ rotate: '30deg' }], position: 'absolute', top: 50, right: 40, zIndex: 1000 }}>
              <Text style={{ borderWidth: 1, borderColor: 'red', color: 'red', fontSize: 32, fontWeight: '800', padding: 10 }}>NOPE</Text>

            </Animated.View>

            <Image
              style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 20 }}
              source={item.uri} />

          </Animated.View>
        )
      }
    }).reverse()
  }

  render() {
    return (
      <View style={{marginTop: 30, flex: 1}}>

        <View style={{ flex: 1, backgroundColor: 'blue', justifyContent: "center", alignItems: "center"}}>
          <Button title='Home' onPress={() => {}}/>
        </View>

        <View style={{ flex: 7, justifyContent: "center", alignItems: "center"}}>
          <Animated.View style={{ height: SCREEN_HEIGHT - 250, width: SCREEN_WIDTH, padding: 10}}>

          {this.renderUsers()}

          </Animated.View>  
        </View>
        <View style={{ flex: 2,flexDirection: "row",backgroundColor: 'black' }}>
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
