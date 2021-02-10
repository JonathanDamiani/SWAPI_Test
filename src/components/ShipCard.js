// Copyright © 2021 Jonathan Dean Damiani
import styled from 'styled-components';
import { H2, ShipInfoItem } from './';
import Colors from '../colors';

const Card = styled.div`
    background-color: ${Colors.secondary};
    width: 100%;
    height: auto;
    padding: 1em;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const ShipCard = ({name, mglt, consumable, numOfStops}) => {
    return (
        <Card>
            <H2>{name}</H2>
            <ul>
                <ShipInfoItem fieldLabel={'MGLT'}>
                    {mglt}/h
                </ShipInfoItem>
                <ShipInfoItem fieldLabel={'Consumables'}>
                    {consumable}
                </ShipInfoItem>
                <ShipInfoItem fieldLabel={'Stops'}>
                    {numOfStops != null ? numOfStops : 'Undefined'}
                </ShipInfoItem>
            </ul>
        </Card>
    )
}


export default ShipCard;