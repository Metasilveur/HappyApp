import React, { Component } from 'react'; 
import {StyleSheet,Dimensions,Button, Text,Animated, View, TouchableOpacity, Image} from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import CardStack, { Card } from 'react-native-card-stack-swiper';

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}


class HomeScreen extends Component<{}> {

  constructor() {

      super()

      this.state = {
        Picture: [
            { id: "1", uri: require('./assets/FakePicture/1.jpg')},
            { id: "2", uri: require('./assets/FakePicture/2.jpg')},
            { id: "3", uri: require('./assets/FakePicture/3.jpg')},        
            { id: "4", uri: require('./assets/FakePicture/4.jpg')},
            { id: "5", uri: require('./assets/FakePicture/5.jpg')},
            { id: "6", uri: require('./assets/FakePicture/6.jpg')},
            { id: "7", uri: require('./assets/FakePicture/7.jpg')},
         ]
      }
   }
  

  render() {

    return (

      <View style={{flex:1, marginTop:50}}>

        <View style={{ flex: 0.3, justifyContent: "center", alignItems: "center"}}>
          <Button title="Go :)" onPress={() => this.props.navigation.navigate('Details')}/>
         </View>

        <CardStack
          style={styles.content}
          loop={true}
          renderNoMoreCards={() => <Text style={{fontWeight:'700', fontSize:18, color:'gray'}}>No more cards :(</Text>}
          ref={swiper => {this.swiper = swiper}}>       
         
            {this.state.Picture.map(item => (
               <Card key={item.id} style={[styles.card, styles.card1]}>
                  <Image style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 20 }} source={item.uri} />
               </Card>
            ))}
        </CardStack>


        <View style={styles.footer}>

          <View style={styles.buttonContainer}>

               <TouchableOpacity style={[styles.button,styles.red]} onPress={()=>{this.swiper.swipeLeft(); }}>
                  <Image source={require('./assets/red.png')} resizeMode={'contain'} style={{ height: 42, width: 42 }} />
               </TouchableOpacity>

               <TouchableOpacity style={[styles.button,styles.orange]} onPress={() => {this.swiper.goBackFromLeft(); }}>
                 <Image source={require('./assets/back.png')} resizeMode={'contain'} style={{ height: 32, width: 32, borderRadius: 5 }} />
               </TouchableOpacity>

               <TouchableOpacity style={[styles.button,styles.green]} onPress={()=>{this.swiper.swipeRight();}}>
                 <Image source={require('./assets/green.png')} resizeMode={'contain'} style={{ height: 42, width: 42 }} />
               </TouchableOpacity>
            </View>
         </View>
      </View>
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

    Home:{

        screen: HomeScreen, 
        navigationOptions: { 
            header: null,
           
            //title: 'Happy App :)',
            /*headerStyle: {
              backgroundColor: '#F7FA25',
            },

             headerRight: (
                <Button
                  onPress={() => alert('This is a button!')}
                  title="Info"
                  color="#FA5C25"/>
              )*/
          
        },
      },

    Details: DetailsScreen
  },
  {
    initialRouteName: "Home"
  }
);

const AppContainer = createAppContainer(AppNavigator);


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
    borderRadius: 5,
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity:0.5,
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
