// Copyright © 2021 Jonathan Dean Damiani
import styled from 'styled-components';

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1em;
    grid-auto-rows: 1fr;
    margin-top: 20px;

    @media (max-width: 991px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 540px) {
        grid-template-columns: repeat(1, 1fr);
    }
`

export default GridContainer;