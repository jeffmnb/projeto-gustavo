import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native'

export const SignUp = () => {

    const navigation = useNavigation()

    const handleGoBack = () => {
        navigation.goBack()
    }

    return (
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <TouchableOpacity onPress={handleGoBack}>
                <Text>VOLTAR</Text>
            </TouchableOpacity>
        </View>
    );
};