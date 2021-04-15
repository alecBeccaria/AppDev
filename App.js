import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Image, Button  } from 'react-native';

function GetThemGifs({search}){
  const [gifs, setGifs] = useState(null);
  let rand = Math.floor(Math.random() * 10);
  useEffect(() => {
      async function getGiphys(search){
        const API_KEY = 'rWOK4M7qED2lP87FJ3tXWfXjrYPKML31';
        let url = "https://api.giphy.com/v1/gifs/search"+
        "?api_key=rWOK4M7qED2lP87FJ3tXWfXjrYPKML31&q="+ search +"&limit=10&offset=0&rating=R&lang=en";
        const data = await fetch(url, {method: 'GET'})
        const json = await data.json();
        console.log(json);
        setGifs(json.data[0].images.downsized_medium.url)
      }
      getGiphys(search);

      
  }, [rand]);

  return (
    <View>
      <Image source={{uri: gifs }} style={{width: 250, height: 250}} />
    </View>
  )
}


export default function App() {
    const [refresh, setRefresh] = useState(false);

  return (
    <View style={styles.container}>
      <Text>Open up App.js yeso start working on your app!</Text>
      <GetThemGifs search="sad"/>
      <GetThemGifs search="cat"/>
      <GetThemGifs search="sdog"/>
      <Button
      onPress={() => setRefresh(!refresh)} title ="Refresh"></Button>
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

