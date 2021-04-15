import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View,   } from 'react-native';

function GetThemGifs({search}){
  const [gifs, setGifs] = useState(null);

  useEffect(() => {
      async function getGiphys(search){
        const API_KEY = 'rWOK4M7qED2lP87FJ3tXWfXjrYPKML31';
        let url = "https://api.giphy.com/v1/gifs/search?api_key=rWOK4M7qED2lP87FJ3tXWfXjrYPKML31&q="+ search +"&limit=10&offset=0&rating=G&lang=en";
        const data = await fetch(url, {method: 'GET'})
      }
  }, []);

  return (
    <View>
      <Image source={{uri: gifs }} style={{width: 250, height: 250}} />
    </View>
  )
}


export default function App() {
    
  return (
    <View style={styles.container}>
      <Text>Open up App.js yeso start working on your app!</Text>
      <GetThemGifs search="cat"/>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

