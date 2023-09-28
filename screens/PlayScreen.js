import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { Audio } from 'expo-av';

const PlayScreen = ({ navigation }) => {
    const goToMoodScreen = () => {
        navigation.navigate('Mood');
    };
    const goToHome = () => {
        navigation.navigate('Home')
    }

    const audioFiles = [
        {
            id: 1,
            picture: require('../assets/Images/music-icon.jpg'),
            source: require('../assets/Music/eco-technology-145636.mp3'),
        },
        {
            id: 2,
            picture: require('../assets/Images/music-icon.jpg'),
            source: require('../assets/Music/just-relax-11157.mp3'),
        },
        {
            id: 3,
            picture: require('../assets/Images/music-icon.jpg'),
            source: require('../assets/Music/lofi-chill-medium-version-159456.mp3'),
        },
        {
            id: 4,
            picture: require('../assets/Images/music-icon.jpg'),
            source: require('../assets/Music/lofi-study-112191.mp3'),
        },
        {
            id: 5,
            picture: require('../assets/Images/music-icon.jpg'),
            source: require('../assets/Music/please-calm-my-mind-125566.mp3'),
        },
    ];

    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [soundObjects, setSoundObjects] = useState([])

    useEffect(() => {
        const loadSounds = async () => {
            const loadedSounds = await Promise.all(
                audioFiles.map(async (file) => {
                    const sound = new Audio.Sound();
                    try {
                        await sound.loadAsync(file.source);
                        return sound;
                    } catch (error) {
                        console.error(`Error loading audio ${file.id}:`, error);
                        return null;
                    }
                })
            );

            setSoundObjects(loadedSounds);
        };

        loadSounds();

        return () => {
            soundObjects.forEach(async (soundObject) => {
                await soundObject.unloadAsync();
            });
        };
    }, []);

    const playSound = async (index) => {
        if (soundObjects[index]) {
            try {
                await soundObjects[index].playAsync();
                setIsPlaying(true);
                setCurrentTrackIndex(index);
            } catch (error) {
                console.error('Error playing audio:', error);
            }
        }
    };

    const pauseSound = async () => {
        if (soundObjects[currentTrackIndex]) {
            try {
                await soundObjects[currentTrackIndex].pauseAsync();
                setIsPlaying(false);
            } catch (error) {
                console.error('Error pausing audio:', error);
            }
        }
    };
    const stopSound = async () => {
        if (soundObjects[currentTrackIndex]) {
            try {
                await soundObjects[currentTrackIndex].stopAsync();
                setIsPlaying(false);
            } catch (error) {
                console.error('Error stopping audio:', error);
            }
        }
    };

    const playNextTrack = () => {
        if (currentTrackIndex < audioFiles.length - 1) {
            stopSound();
            playSound(currentTrackIndex + 1);
            setCurrentTrackIndex(currentTrackIndex + 1);
        } else {

            stopSound();
            playSound(0);
            setCurrentTrackIndex(0);
        }
    };

    const playPreviousTrack = () => {
        if (currentTrackIndex > 0) {
            stopSound();
            playSound(currentTrackIndex - 1);
        }
    };
    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <TouchableOpacity onPress={goToMoodScreen} style={styles.arrowButton}>
                    <Icon name="arrow-left" size={30} color="skyblue" />
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={goToHome}
                    style={styles.menuButton}>
                    <Icon name="menu" size={30} color="skyblue" />
                </TouchableOpacity>

                <View style={styles.whiteBox}>
                    <View>
                        <Image
                            style={{ width: 220, height: 220, marginBottom: 10 }}
                            source={require('../assets/Images/music-icon.jpg')} />
                    </View>
                    <View style={{ marginLeft: 15, marginBottom: 40 }}>
                        <Text style={{ fontSize: 24 }}>Breathing Practices</Text>
                        <Text style={{ fontSize: 20, color: 'gray', paddingLeft: 35, paddingTop: 20 }}>For relaxation</Text>
                    </View>
                    <View style={styles.musicControls}>
                        <TouchableOpacity style={styles.controlButton} onPress={playPreviousTrack}>
                            <Icon name="skip-back" size={30} color="black" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.controlButton} onPress={isPlaying ? pauseSound : playSound}>
                            <Icon name={isPlaying ? "pause" : "play"} size={30} color="black" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.controlButton} onPress={stopSound}>
                            <Icon name="stop-circle" size={30} color="black" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.controlButton} onPress={playNextTrack}>
                            <Icon name="skip-forward" size={30} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.bottomBox}>
                    <View style={styles.exploreBox}>
                        <Text style={styles.exploreText}>Explore Similar</Text>
                        <Icon name="arrow-right" size={30} color="#D8BFD8" />
                    </View>
                </View>
            </View>
        </View>
    );
};

export default PlayScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffb6c1',
        justifyContent: 'center',
        alignItems: 'center',
    },
    innerContainer: {
        backgroundColor: '#E6E6FA',
        height: '90%',
        width: '90%',
        borderRadius: 20,
        marginTop: '10%',
        position: 'relative',
    },
    arrowButton: {
        position: 'absolute',
        top: 20,
        left: 20,
    },
    menuButton: {
        position: 'absolute',
        top: 20,
        right: 20,
    },
    whiteBox: {
        height: '65%',
        width: '80%',
        backgroundColor: 'white',
        borderRadius: 30,
        marginTop: '30%',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    exploreBox: {
        marginTop: '8%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    exploreText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: '10%',
        marginRight: '20%',
    },
    bottomBox: {
        position: 'absolute',
        bottom: 20,
        left: 20,
        right: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 10,
        height: '13%',
    },
    musicControls: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
    },
    controlButton: {
        padding: 10,
    },
});
