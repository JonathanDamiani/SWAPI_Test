// Copyright © 2021 Jonathan Dean Damiani
import { useEffect, useState } from 'react'; 
import { useSelector, useDispatch } from 'react-redux';
import { fetchShips, calcStopsToTravel } from './redux-config';
import { Container, GridContainer, ShipCard, H1, Section, Input, Button, InputContainer, Label } from './components';

const App = () => {
	const shipsData = useSelector(state => state.shipsData)
	const dispatch = useDispatch();
	const [distanceInput, setDistanceInput] = useState(1000000);

	useEffect(() => {
		dispatch(fetchShips);
	}, []);

	const HandleInputChange = (event) => {
		setDistanceInput(event.target.value);
	}

	return (
		<Container>
			<Section>
				<H1>Star Wars Travel Stops Calculator</H1>
				<Label>Enter the distance</Label>
				<InputContainer>
					<Input value={distanceInput} onChange={HandleInputChange} type="number"/>
					<Button onClick={() => dispatch(calcStopsToTravel(distanceInput))}>Calculate Stops</Button>
				</InputContainer>

				{
					!shipsData.isLoading &&
					<GridContainer>
						{shipsData.ships.results.map((item, id) => {
							return (
								<ShipCard
									key={id}
									name={item.name}
									mglt={item.MGLT}
									consumable={item.consumables}
									numOfStops={item.numOfStops}
								/>
							) 
						})}
					</GridContainer>
				}
			</Section>
		</Container>
	);
}

export default App;
