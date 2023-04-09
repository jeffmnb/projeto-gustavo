import React, { useState } from "react";
import {
    AreaInput,
    AreaLogin, AreaTitle,
    Container,
    Header,
    Title,
    LabelEmail, 
    InputEmail,
    LabelSenha,
    InputSenha,
    ContentFooterArea,
    LabelRemindPass,
    LabelForgetPass,
    AreaCheckBox,
    ButtonCheckBox,
    CheckPoint,
    ButtonForm,
    LabelButtonForm,
    ContainerButtons,
    LogoApp
} from "./styles";
import { Image, Text, TouchableOpacity, View } from "react-native";
import {useNavigation} from '@react-navigation/native'

import SignInImage from '../../assets/SignInImage.png'

export const SignIn = () => {

    const [checked, setChecked] = useState(false);

    const navigation = useNavigation()

    const handleCheckRemindPass = () => {
        setChecked(!checked);
    };

    const handleGetSignUpPage = () => {
        navigation.navigate('SignUp')
    }
    
    return (
        <Container>

            <Header />

            <LogoApp source={SignInImage} />

            <AreaLogin>
                
                <AreaTitle>
                 <Title>ACESSE</Title>
                </AreaTitle>

                <AreaInput>
                    <LabelEmail>Email</LabelEmail>
                    <InputEmail placeholder="Email" />

                    <LabelSenha>Senha</LabelSenha>
                    <InputSenha placeholder="Senha" />

                    <ContentFooterArea>
                        <AreaCheckBox>
                            <ButtonCheckBox onPress={handleCheckRemindPass}>
                                <CheckPoint style={{ backgroundColor: checked ? '#288ad3' : '#FFFF' }}  />
                            </ButtonCheckBox>
                            <LabelRemindPass>Lembrar senha</LabelRemindPass>
                        </AreaCheckBox>
                 
                        <LabelForgetPass>Esqueceu sua senha?</LabelForgetPass>
                    </ContentFooterArea>

                    <ContainerButtons>
                        <ButtonForm>
                            <LabelButtonForm>Log In</LabelButtonForm>
                        </ButtonForm>

                        <ButtonForm onPress={()=> handleGetSignUpPage()} >
                            <LabelButtonForm>Cadastrar</LabelButtonForm>
                        </ButtonForm>
                    </ContainerButtons>
                    
                </AreaInput>

            </AreaLogin>

            <View style={{flexDirection:'row', marginTop:25, width:'93%', justifyContent:'space-between', alignItems:'center'}}>
                <View style={{ borderBottomWidth: 0.3, width: 115, height:1 }} />
                <Text style={{color:'gray'}}>Ou acesse com </Text>
                <View style={{borderBottomWidth: 0.3, width: 115, height:1 }} />
            </View>

            <View style={{flexDirection:'row', justifyContent:'space-around', width:120}}>
                <TouchableOpacity style={{ width: 40, height: 40, backgroundColor: '#d3d3d368', borderRadius: 7, marginTop: 20, justifyContent:'center', alignItems:'center' }}>
                    <Image style={{ width: 35, height: 35 }} source={{ uri: 'https://www.gstatic.com/images/branding/product/2x/googleg_48dp.png' }} />
                </TouchableOpacity> 

                <TouchableOpacity style={{ width: 40, height: 40, backgroundColor: '#d3d3d368', borderRadius: 7, marginTop: 20, justifyContent:'center', alignItems:'center' }}>
                    <Image style={{ width: 35, height: 35 }} source={{ uri: 'https://www.facebook.com/images/fb_icon_325x325.png' }} />
                </TouchableOpacity> 
            </View>
           

       </Container>
    )
}