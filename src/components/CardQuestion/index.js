import React, { useState } from "react";
import { Container, CardHeader, ImageProfile, HeaderContent, TextPoster, TextDate, CardBody, TextTitle, TextDescription, ImageQuestion, ContainerInputAnswer, InputAnswer, CardFooter, SendIcon, ContainerAnswer } from "./style";
import imageProfile from "../../../assets/foto_perfil.png";
import colors from "../../styles/colors";
import { FlatList, TouchableOpacity } from "react-native";

function CardAnswer (answer){
    console.log(answer.Student);
    
    return(
        <ContainerAnswer>
            <CardHeader>
                <ImageProfile source={ answer.Student.image ? {uri: answer.Student.image} : imageProfile}/>
                <HeaderContent>
                    <TextPoster>Por {answer.Student.name}</TextPoster>
                    <TextDate>em {answer.created_at}</TextDate>
                </HeaderContent>
            </CardHeader>
            <CardBody>
                <TextDescription>
                    {answer.description}
                </TextDescription>
            </CardBody>
        </ContainerAnswer>
    );
}

function CardQuestion ({question}){

    const [showAnswers, setShowAnswers] = useState(false);

    return(
        <Container>
            <CardHeader>
                <ImageProfile source={ question.Student.image ? {uri: question.Student.image} : imageProfile}/>
                <HeaderContent>
                    <TextDate>em {question.created_at}</TextDate>
                </HeaderContent>
            </CardHeader>
            <CardBody>
                <TextTitle>{question.title}</TextTitle>
                <TextDescription>{question.description}</TextDescription>
                <ImageQuestion style={{resizeMode: "contain"}} source={{uri: question.image}}></ImageQuestion>
            </CardBody>
            <CardFooter>
                <TouchableOpacity>
                    <TextPoster>{question.Answers.length === 0 ? "Seja o primeiro a responder" : question.Answers.lenght === "respostas"}</TextPoster>
                    <TextPoster>Por {question.Student.name}</TextPoster>
                    {showAnswers && 
                        question.Answers.length > 0 && 
                        <FlatList data={question.Answers}
                                keyExtractor ={(answer) => String(answer.id)}
                                renderItem={({item: answer}) => (<CardAnswer answer={answer}/>)}
                        />
                    }
                </TouchableOpacity>
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