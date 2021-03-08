import colors from "../../styles/colors";

const { default: styled } = require("styled-components/native");

export const Container =styled.TouchableOpacity`
    border-radius: 4px;
    border-width: 2px;
    border-color: ${colors.primary};

    padding: 10px;


`;

export const Text = styled.Text`
    font-size: 20px;
    font-weight: bold;
    text-align:center;
`;