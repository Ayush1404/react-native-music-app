import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import TrackPlayer, { State, usePlaybackState } from 'react-native-track-player'



const ControlCenter = () => {
    const playBackState = usePlaybackState()

    const skipToNext = async () =>{
        await TrackPlayer.skipToNext()
    }

    const skipToPrevious = async () =>{
        await TrackPlayer.skipToPrevious()
    }

    const togglePlayback = async (playback:State) => {
        const currentTrack = await TrackPlayer.getProgress().then((progress) => progress.duration)
        if(currentTrack !==null){
            if(playback === State.Paused || playback ===State.Ready)
                await TrackPlayer.play()
            else 
                await TrackPlayer.pause()
        } 
    }

    return (
        <View style={styles.container}>
            <Pressable onPress={()=>skipToPrevious()}>
                <Icon style={styles.icon} size={40} name='skip-previous'/>
            </Pressable>
            <Pressable onPress={()=>togglePlayback(playBackState.state!)}>
                <Icon 
                    style={styles.icon} 
                    size={75}
                    name={playBackState.state === State.Playing ? "pause":"play-arrow"}
                />
            </Pressable>
            <Pressable onPress={()=>skipToNext()}>
                <Icon style={styles.icon} size={40} name='skip-next'/>
            </Pressable>
        </View>
    )
}

export default ControlCenter
const styles = StyleSheet.create({
    container: {
        marginBottom: 56,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        color: '#FFFFFF',
    },
    playButton: {
        marginHorizontal: 24,
    },
});