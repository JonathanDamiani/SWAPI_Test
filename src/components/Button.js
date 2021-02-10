import styled from 'styled-components';
import Colors from '../colors';

const Button = styled.button`
    padding: 0.8em;
    background-color: transparent;
    color: ${Colors.primary};
    font-weight: bold;
    text-transform: uppercase;
    border: 2px solid ${Colors.primary};
    border-radius: 20px;
    cursor: pointer;
    &:hover {
        color: ${Colors.secondary};
        background-color: ${Colors.primary};
        border: 2px solid ${Colors.secondary};
    }
`

export default Button;