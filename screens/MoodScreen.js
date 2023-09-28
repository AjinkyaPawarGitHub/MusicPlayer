import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, KeyboardAvoidingView, ScrollView } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Feather';

const MoodScreen = ({ navigation }) => {
    const goToHome = () => {
        navigation.navigate('Home')
    }

    const brainImage = require('../assets/Images/brain.png');
    const moonImage = require('../assets/Images/moon.png');
    const juiceImage = require('../assets/Images/orange-juice.png');
    const targetImage = require('../assets/Images/target.png');

    const goToPlayScreen = () => {
        navigation.navigate('Play')


    }
    return (
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <View style={styles.container}>
                <View style={styles.innerContainer}>
                    <View style={styles.header}>
                        <View style={styles.box}>
                            <Image
                                source={require('../assets/Images/music-player-profile.jpg')}
                                style={styles.profileImage} />
                        </View>
                        <View style={styles.profileView}>
                            <Text style={styles.profileText}>
                                Hello Mark
                            </Text>
                        </View>
                        <TouchableOpacity
                            onPress={goToHome}
                            style={styles.menuIcon}>
                            <Icon
                                name="menu"
                                size={50}
                                color="lightblue"
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.textInputContainer}>
                        <TextInput
                            placeholder="What's your mood today?"
                            style={styles.textInput}
                        />
                    </View>

                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionHeaderText}>Latest Practices</Text>
                        <Text style={styles.viewAll}>View All</Text>
                    </View>


                    <View style={styles.boxContainer}>
                        <TouchableOpacity
                            onPress={goToPlayScreen}
                            style={styles.boxItem}>
                            <Image source={brainImage} style={styles.icon} />
                            <View style={styles.boxContent}>
                                <Text style={styles.boxHeaderText}>Mind</Text>
                                <Text style={styles.boxSubText}>Let's train it</Text>
                            </View>
                        </TouchableOpacity>


                        <TouchableOpacity
                            onPress={goToPlayScreen}
                            style={styles.boxItem}>
                            <Image source={moonImage} style={styles.icon} />
                            <View style={styles.boxContent}>
                                <Text style={styles.boxHeaderText}>Sleep</Text>
                                <Text style={styles.boxSubText}>Restful sleep</Text>
                            </View>
                        </TouchableOpacity>

                    </View>

                    <View style={styles.boxContainer}>
                        <TouchableOpacity
                            onPress={goToPlayScreen}
                            style={styles.boxItem}>
                            <Image source={juiceImage} style={styles.icon} />
                            <View style={styles.boxContent}>
                                <Text style={styles.boxHeaderText}>Relax</Text>
                                <Text style={styles.boxSubText}>Reframe stress</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={goToPlayScreen}
                            style={styles.boxItem}>
                            <Image source={targetImage} style={styles.icon} />
                            <View style={styles.boxContent}>
                                <Text style={styles.boxHeaderText}>Focus</Text>
                                <Text style={styles.boxSubText}>Focus on work</Text>
                            </View>
                        </TouchableOpacity>

                    </View>

                    <View style={styles.bottomBox}>
                        <View style={styles.bottomBoxContent}>
                            <View style={styles.bottomBoxTextContainer}>
                                <Text style={styles.bottomBoxText1}>Continue</Text>
                                <Text style={styles.bottomBoxText2}>Breathing Practices</Text>
                            </View>
                            <TouchableOpacity onPress={goToPlayScreen}>
                                <Image
                                    source={require('../assets/Images/play.png')}
                                    style={{ height: 70, width: 70, borderRadius: 25, marginTop: 10 }} />
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>
            </View>
        </ScrollView>
    )
}

export default MoodScreen

const styles = StyleSheet.create({
    scrollViewContent: {
        flexGrow: 1,
    },
    container: {
        marginTop: 12,
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
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        marginTop: 20,
        marginHorizontal: 20,
    },
    box: {
        height: 60,
        width: 60,
        backgroundColor: 'white',
        borderRadius: 10,
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 10,
        margin: 10
    },
    profileView: {
        marginLeft: 10,
        flex: 1,
    },
    profileText: {
        fontSize: 22,
        color: 'gray'
    },
    menuIcon: {
        marginLeft: 'auto',
    },
    textInputContainer: {
        marginTop: 20,
    },
    textInput: {
        height: 60,
        backgroundColor: '#E6E6FA',
        fontSize: 25,
        borderRadius: 10,
        padding: 10,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginTop: 20,
    },
    sectionHeaderText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    viewAll: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    boxContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginTop: 20,
    },
    boxItem: {
        height: 130,
        width: '48%',
        backgroundColor: 'white',
        borderRadius: 20,
        position: 'relative',
    },
    icon: {
        position: 'absolute',
        top: 10,
        right: 10,
        height: 40,
        width: 40
    },
    boxContent: {
        position: 'absolute',
        bottom: 10,
        left: 10,
        right: 10,
    },
    boxHeaderText: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 5,
    },
    boxSubText: {
        color: 'gray',
        fontSize: 14,
    },
    bottomBox: {
        marginTop: '7%',
        height: '21%',
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 30,
    },
    bottomBoxContent: {
        position: 'absolute',
        top: 20,
        left: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    bottomBoxText1: {
        color: 'gray',
        fontSize: 16,
        marginBottom: 5,
    },
    bottomBoxText2: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    bottomBoxTextContainer: {
        marginRight: 40,
        marginTop: 20
    },
});