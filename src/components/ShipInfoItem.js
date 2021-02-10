import React from 'react'; 
import styled from 'styled-components';
import Colors from '../colors';

const ShipInfoItemStyle = styled.li`
    display: flex;
    justify-content: space-between;
    color:${Colors.font_primary}
`

const ShipInfoItem = ({fieldLabel, children}) => {
    return (
        <ShipInfoItemStyle>
            <strong>{fieldLabel}: </strong>
            <span>{children}</span>
        </ShipInfoItemStyle>
    )
}

export default ShipInfoItem;