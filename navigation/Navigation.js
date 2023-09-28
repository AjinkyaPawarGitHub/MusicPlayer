import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen'
import MoodScreen from '../screens/MoodScreen'
import PlayScreen from '../screens/PlayScreen'
import { StatusBar } from 'expo-status-bar'
const stack = createNativeStackNavigator()

const Navigation = () => {
    return (
        <NavigationContainer>
            <StatusBar
                backgroundColor="#FFffff"
                barStyle="light-content" />

            <stack.Navigator>

                <stack.Screen
                    name='Home'
                    component={HomeScreen}
                    options={{ headerShown: false }} />
                <stack.Screen
                    name='Mood'
                    component={MoodScreen}
                    options={{ headerShown: false }} />
                <stack.Screen
                    name='Play'
                    component={PlayScreen}
                    options={{ headerShown: false }} />


            </stack.Navigator>





        </NavigationContainer>
    )
}

export default Navigation

const styles = StyleSheet.create({})