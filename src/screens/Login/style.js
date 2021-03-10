import styled from "styled-components/native";
import colors from "../../styles/colors";
import { TextDefault } from "../../styles/stylesGlobal";

export const Content = styled.View`
    flex:1;
    width: 90%;

    align-items: center;
    justify-content: center;

`;

export const TextInputLogin = styled.TextInput`
    width:96%;
    color: ${colors.light};
    margin-bottom: 15px;
    padding:10px;
    border-radius: 4px;

    background-color: ${colors.darkGray};

    font-size:20px;
`;

export const Label = styled(TextDefault)`
    width:96%;
    font-size: 16px;
    text-align: left;
    font-weight: bold;
    margin-bottom: 5px;
`;