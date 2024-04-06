import React from 'react';
import {Button, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import MainLayout from '../layouts/MainLayout';

function AboutScreen() {

    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    const navigation = useNavigation();
    return (
        <MainLayout>
        {
            <View>
            <Text>Incredible todo list app</Text>
            <Text>{new Date().toDateString()}</Text>
            <Button title="Home Button" onPress={() => navigation.navigate('Home')}/>
            </View>
        }
        </MainLayout>
    );
}

export default AboutScreen;