import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { ImageEditor, StyleSheet, Text, View,   } from 'react-native';

function GetThemGifs(search){
  const [gifs, setGifs] = useState([]);
   
  const API_KEY = 'rWOK4M7qED2lP87FJ3tXWfXjrYPKML31';
  let url = 'https://api.giphy.com/v1/gifs/search?api_key={' + API_KEY + '}&q=${'+ search + '}&limit=10&offset=0&rating=G&lang=en';
  fetch(url, {
    method: 'GET'

  })
  .then(response => response.json())
  .then(json => {
    let gifs = json.data
    setGifs(json.data.images.downsized_medium)
  })

  return <Image source={{uri: gifs }} style={{width: 250, height: 250}} />
}

export default function App() {
    // gifs: gifs.map(g => g.images), 
    // randomId: Math.floor(Math.random() * 10)
  return (
    <View style={styles.container}>
      <Text>Open up App.js yeso start working on your app!</Text>
      <GetThemGifs search="cat"/>
    </View>
  );
}

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

