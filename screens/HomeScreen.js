import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Feather';



const HomeScreen = ({ navigation }) => {
    const goToMoodScreen = () => {
        navigation.navigate('Mood')
    }
    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <View>
                    <Image
                        source={require('../assets/Images/Meditation.jpg')}
                        style={styles.image} />
                </View>
                <View style={styles.headline}>
                    <View style={styles.headline1}>
                        <Text style={styles.text1}>Time to meditate</Text>
                    </View>
                    <View style={styles.headline2}>
                        <Text style={styles.text2}>
                            Take a breath,
                        </Text>
                        <Text style={styles.text2}>
                            And ease your mind
                        </Text>
                    </View>
                </View>
                <TouchableOpacity
                    onPress={goToMoodScreen}
                    style={styles.square}>
                    <Text style={styles.text3}>
                        Let's get started
                        <View style={styles.icon}>
                            <Icon name="arrow-right" size={30} color="#D8BFD8" />
                        </View>
                    </Text>

                </TouchableOpacity>
            </View>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create
    ({
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
            borderRadius: 30,
            marginTop: '10%',

        },
        image: {

            height: '70%',
            width: '100%',
            borderRadius: 20,
            backgroundColor: 'lightblue',

        },
        headline:
        {
            marginVertical: -50

        },
        headline1:
        {

            justifyContent: 'center',
            alignItems: 'center',
        },
        headline2:
        {
            marginTop: 20,
            justifyContent: 'center',
            alignItems: 'center',
        },
        text1:
        {
            fontWeight: 'bold',
            fontSize: 30,


        },
        text2:
        {
            color: 'gray',
            fontSize: 20,
        },
        square: {
            marginTop: '30%',
            marginLeft: '8.5%',
            backgroundColor: '#FFFFFF',
            width: 270,
            height: 80,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 20,
        },
        text3: {
            fontSize: 20,
            marginBottom: 10

        },
        icon: {

            paddingLeft: 30,
            marginTop: 10

        },


    });