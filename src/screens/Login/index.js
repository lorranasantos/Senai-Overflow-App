import React from "react";
import {Container, ToolBar, TextToolBar} from "../../styles/stylesGlobal";
import {TextInput, TouchableOpacity, StatusBar} from "react-native"
import colors from "../../styles/colors";
import { Content, TextInputLogin, Label } from "./style";
import Button from "../../components/Butotn";

function Login(){
    StatusBar.setBackgroundColor(colors.primary);
    return(
    <Container>
        <ToolBar>
            <TextToolBar>Faça o Login</TextToolBar>
        </ToolBar>
        <Content>
            <Label>E-mail</Label>
            <TextInputLogin autoCompleteType="email" placeholderTextColor={colors.lightTransparent} placeholder="Digite o seu e-mail"/>
            
            <Label>Senha</Label>
            <TextInputLogin autoCompleteType="password" placeholderTextColor={colors.lightTransparent} placeholder="Digite a sua senha" secureTextEntry={true}/>
            <Button text="Entrar" style={{width:"96%"}}/>
        </Content>
    </Container>
    );
}

export default Login;