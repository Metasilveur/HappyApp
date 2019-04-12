// Components/Search.js

import React from 'react'
import { View, TextInput, Button } from 'react-native'

class Search extends React.Component {
  render() {
    return (
      <View style={{ marginTop: 20 , backgroundColor : 'red'}}>
        <TextInput style={styles.textinput} placeholder='Titre du film'/>
        <Button title='Rechercher' onPress={() => {}}/>
      </View>
    )
  }
}

const styles = {
	textinput: {
	    marginLeft: 5,
	    marginRight: 5,
	    height: 50,
	    borderColor: '#000000',
	    borderWidth: 1,
	    paddingLeft: 5	
	}
}

export default Search

