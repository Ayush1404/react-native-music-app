import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
} from 'react-native';
import { addTrack, setUpPlayer } from '../musicPlayerService';



function App(): React.JSX.Element {
  const [isPlayerReady,setIsPlayerReady] = useState(false)
  
  async function setUp(){
    let isSetUp = await setUpPlayer()
    if(isSetUp){
      await addTrack()
    }
    setIsPlayerReady(isSetUp)
  }

  useEffect(()=>{
    setUp()
  },[])

  if(!isPlayerReady)return(
    <SafeAreaView>
      <ActivityIndicator />
    </SafeAreaView>
  )

  return (
    <SafeAreaView>
      <StatusBar />
      <Text>
        Hello
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1
  }
});

export default App;
