import React, { useEffect, useState } from 'react';
import {
	MenuItem,
	FormControl,
	Select,
	Card,
	CardContent,
} from '@material-ui/core';
// Utils
import {
	prettyPrintStat,
	sortData,
} from '../../utils/utils';
// Components
import InfoBox from '../../components/InfoBox/InfoBox';
import Map from '../../components/Map/Map';
import Table from '../../components/Table/Table';
import LineGraph from '../../components/LineGraph/LineGraph';
// constants
import { sortedStates } from '../../Constants/Constants';
// Styles
import './style/Usa.css';

function Usa() {
	const [states, setStates] = useState([]);
	const [state, setState] = useState('usa');
	const [stateInfo, setStateInfo] = useState({});
	const [tableStateData, setTableStateData] = useState([]);
	const [mapStateCenter, setMapStateCenter] = useState({
		lat: 30,
		lng: 270,
	});
	const [mapStateZoom, setMapStateZoom] = useState(3);
	const [mapStates, setMapStates] = useState([]);
	const [casesType, setCasesType] = useState('cases');

	useEffect(() => {
		fetch('https://disease.sh/v3/covid-19/all')
			.then((response) => response.json())
			.then((data) => {
				setStateInfo(data);
			});
		return () => {
			// console.log('<< hitting useEffect!!!!');
		};
	}, []); // might include stateInfo in brackets

	// Fetch this api endpoint - for covid data for all states
	// https://disease.sh/v3/covid-19/states
	// For more endpoints check out
	// https://disease.sh/docs/
	useEffect(() => {
		const getStatesData = async () => {
			await fetch('https://disease.sh/v3/covid-19/states') // api endpoint goes here
				.then((response) => response.json()) // fetching json data
				.then((data) => {
					// setting response.json to data
					const states = data
						.sort((a, b) => (a.state < b.state ? -1 : 1))
						.map((state, idx) => ({
							// cases: state.cases,
							// deaths: state.deaths,
							// recovered: state.recovered,
							...state,
							name: state.state, // Name of the state...
							value: sortedStates[idx].iso2,
							key: state.state,
							countryInfo: sortedStates[idx],
						}));
					console.log(states, '<<< states array');
					// console.log(data, '<<< data all states data');
					const sortedData = sortData(data); // pull from utils sorting function
					// console.log(sortedData, 'sorted Data');
					setTableStateData(sortedData);
					setStates(states);

					setMapStates(states);
				});
		};
		getStatesData();

		return () => {
			// console.log('<<< Hitting set states useEffect!!!');
			// console.log(states, '<<< states');
		};
	}, []); // might add states in brackets

	const onStateChange = async (event) => {
		const stateCode = event.target.value;

		// USA stats
		// https://disease.sh/v3/covid-19/countries/United%20States?strict=true
		// State specific stats
		// https://disease.sh/v3/covid-19/states/{stateCode}
		// ternary operator
		const url =
			stateCode === 'usa'
				? 'https://disease.sh/v3/covid-19/countries/United%20States?strict=true'
				: `https://disease.sh/v3/covid-19/states/${stateCode}`;
		await fetch(url)
			.then((response) => response.json())
			.then((data) => {
				console.log(data, '<<< data onStateChange');
				console.log(stateCode, '<<< stateCode');
				setState(stateCode);
				if (stateCode !== 'usa') {
					//pull in constants here
					let constants = sortedStates;

					data.countryInfo = constants.filter(
						(state) => state.state === stateCode
					)[0];
				}
				setStateInfo(data);
				console.log(data, 'data');
				setMapStateCenter(
					stateCode === 'usa' ? [350, 11] : [11, 360]
				);
				console.log(mapStateCenter, '<< mapStateCenter');
				setMapStateZoom(8);
			});
	};

	// console.log(stateInfo, '<<< stateInfo');

	return (
		<div className='usa'>
			<div className='usa__container'>
				<div className='usa__left'>
					<div className='usa__header'>
						<h1>Covid-19 Tracker - USA</h1>
						<FormControl className='usa__dropdown'>
							<Select
								onChange={onStateChange}
								variant='outlined'
								value={state}>
								<MenuItem value='usa' key='usa'>
									USA
								</MenuItem>
								<hr />
								{states.map((state) => (
									<MenuItem
										key={state.key}
										value={state.name}>
										{state.name}
									</MenuItem>
								))}
							</Select>
						</FormControl>
					</div>

					<div className='usa__status'>
						<InfoBox
							active={casesType === 'cases'}
							onClick={(e) => setCasesType('cases')}
							title='Corona Virus Cases'
							total={prettyPrintStat(stateInfo.cases)}
							cases={prettyPrintStat(stateInfo.todayCases)}
							isRed
						/>
						<InfoBox
							active={casesType === 'recovered'}
							onClick={(e) => setCasesType('recovered')}
							title='Recovered'
							total={prettyPrintStat(stateInfo.recovered)}
							cases={prettyPrintStat(
								stateInfo.todayRecovered
							)}
						/>
						<InfoBox
							active={casesType === 'deaths'}
							onClick={(e) => setCasesType('deaths')}
							title='Deaths'
							total={prettyPrintStat(stateInfo.deaths)}
							cases={prettyPrintStat(stateInfo.todayDeaths)}
							isRed
						/>
					</div>

					<Map
						casesType={casesType}
						countries={mapStates}
						center={mapStateCenter}
						zoom={mapStateZoom}
					/>
				</div>
				<Card className='usa__right'>
					<CardContent>
						<h3>Live Cases by Country</h3>
						<Table countries={tableStateData} />
						<h3 className='usa__graphTitle'>
							Worldwide new {casesType}
							{/* Selected states new {casesType} */}
						</h3>
						<LineGraph
							className='usa__graph'
							casesType={casesType}
						/>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}

export default Usa;
