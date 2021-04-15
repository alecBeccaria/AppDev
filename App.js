import { StatusBar } from 'expo-status-bar';
import React, {useCallback, useEffect, useState} from 'react';
import { StyleSheet, Text, View, Image, Button  } from 'react-native';

function GetThemGifs({search}){
  const [gifs, setGifs] = useState(null);
  let rand = Math.floor(Math.random() * 10);
  useEffect(() => {
      async function getGiphys(search){
        const API_KEY = 'rWOK4M7qED2lP87FJ3tXWfXjrYPKML31';
        let url = "https://api.giphy.com/v1/gifs/search"+
        "?api_key=rWOK4M7qED2lP87FJ3tXWfXjrYPKML31&q="+ search +"&limit=10&offset=0&rating=G&lang=en";
        const data = await fetch(url, {method: 'GET'})
        const json = await data.json();
        console.log(json);
        setGifs(json.data[rand].images.downsized_medium.url)
      }
      getGiphys(search);

      
  }, []);

  return (
    <View>
      <Image source={{uri: gifs }} style={{width: 250, height: 250}} />
    </View>
  )
}



export default function App() {
    const [refreshing, setRefreshing] = useState(false);
    const onRefresh = useCallback(() => {
      setRefreshing(true);
      wait(2000).then(() => setRefreshing(false));
    })
  return (
    <View style={styles.container}>
      <GetThemGifs search="coding"/>
      <GetThemGifs search="fun"/>
      <GetThemGifs search="puppy"/>
      <Text>Powered by Giphy</Text>
      <Button onPress={() => {history.go(0)}} title ="Refresh"/>
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

