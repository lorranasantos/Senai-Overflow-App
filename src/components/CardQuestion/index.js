import React from "react";
import { Container, CardHeader, ImageProfile, HeaderContent, TextPoster, TextDate, CardBody, TextTitle, TextDescription, ImageQuestion, ContainerInputAnswer, InputAnswer, CardFooter, SendIcon, ContainerAnswer } from "./style";
import fotoPerfil from "../../../assets/foto_perfil.png";
import colors from "../../styles/colors";

function CardAnswer (){
    return(
        <ContainerAnswer>
            <CardHeader>
                <ImageProfile source={fotoPerfil}/>
                <HeaderContent>
                    <TextPoster>Por Fulano</TextPoster>
                    <TextDate>em 10/10/2010 às 10:10</TextDate>
                </HeaderContent>
            </CardHeader>
            <CardBody>
                <TextDescription>
                    Essa é a descrição da resposta
                </TextDescription>
            </CardBody>
        </ContainerAnswer>
    );
}

function CardQuestion (){

    return(
        <Container>
            <CardHeader>
                <ImageProfile source={fotoPerfil}/>
                <HeaderContent>
                    <TextPoster>Por Fulano</TextPoster>
                    <TextDate>em 10/10/2010 às 10:10</TextDate>
                </HeaderContent>
            </CardHeader>
            <CardBody>
                <TextTitle>Título da Questão</TextTitle>
                <TextDescription>Isso é uma descrição</TextDescription>
                <ImageQuestion style={{resizeMode: "contain"}} source={fotoPerfil}></ImageQuestion>
            </CardBody>
            <CardFooter>
                <TextPoster>Seja o primeiro a responder</TextPoster>
                <CardAnswer/>
                <CardAnswer/>
                <ContainerInputAnswer>
                    <InputAnswer placeholder="Responda a essa pergunta" placeholderTextColor={colors.lightTransparent}/>
                    <SendIcon name="paper-plane"/>
                </ContainerInputAnswer>
            </CardFooter>
        </Container>
    );
}

export default CardQuestion;