import styled from 'styled-components';
import Colors from '../colors';

const Input = styled.input`
    font-weight: bold;
    font-size: 1em;
    max-width: 45%;
    border: none;
    border-radius: 20px;
    text-align: center;
    color: ${Colors.font_primary};
    overflow: hidden;
    background-color:${Colors.secondary};

    @media (max-width: 540px) {
        max-width: 100%;
        height: 40px;
        font-size: 1.5em;
        margin-bottom: 10px;
    }
`

export default Input;