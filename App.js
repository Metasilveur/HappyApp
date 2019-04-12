import React from 'react';
import { StyleSheet, Dimensions, ScrollView, Text, View, Button,Image,TouchableOpacity, Animated} from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

//import Search from './Components/Search'

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
class HomeScreen extends React.Component {

  constructor() {
    super();
    global.MyVar = 0;
    
  }

  onPress = () => {
    var str1 = 'Test'
    var cpt = 5
    MyVar += 1
    if(MyVar > 6) //boucler sur les images
    {
      MyVar = 0
    }
    this.setState({
      
    })
  }

  render() {
    return (

      
      <ScrollView>

        <View style={{marginTop: 0, flex: 1}}>

          <View style={{ flex: 1, justifyContent: "center", alignItems: "center"}}>
          <Button
            title="Go :)"
            onPress={() => this.props.navigation.navigate('Details')}
          />
          </View>

          <View style={{ flex: 7, justifyContent: "center", alignItems: "center"}}>
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

      </ScrollView>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Ceci est le détail !</Text>
        
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen
  },
  {
    initialRouteName: "Home"
  }
);

const AppContainer = createAppContainer(AppNavigator);


const styles = StyleSheet.create({
  container: {
    textAlign: 'center',
    fontSize: 21,
    fontWeight: 'bold',
  },
});
