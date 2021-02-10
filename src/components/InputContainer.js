import styled from 'styled-components';

const InputContainer = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 0 auto;
    max-width: 310px;

    @media (max-width: 540px) {
        flex-direction: column;
    }
`

export default InputContainer;