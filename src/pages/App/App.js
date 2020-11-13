import React, { useEffect, useState } from 'react';
import {
	MenuItem,
	FormControl,
	Select,
	Card,
	CardContent,
} from '@material-ui/core';
// Utils
import { sortData } from '../../utils/utils';
// Components
import InfoBox from '../../components/InfoBox/InfoBox';
import Map from '../../components/Map/Map';
import Table from '../../components/Table/Table';
import LineGraph from '../../components/LineGraph/LineGraph';
// Styles
import './style/App.css';

function App() {
	const [countries, setCountries] = useState([]);
	const [country, setCountry] = useState('worldwide');
	const [countryInfo, setCountryInfo] = useState({});
	const [tableData, setTableData] = useState([]);

	useEffect(() => {
		fetch('https://disease.sh/v3/covid-19/all')
			.then((response) => response.json())
			.then((data) => {
				setCountryInfo(data);
			});
		return () => {
			console.log('<< hitting useEffect!!!!');
		};
	}, []); // might include countryInfo in brackets

	// Fetch this api endpoint - for covid data
	// https://disease.sh/v3/covid-19/countries
	// For more endpoints check out
	// https://disease.sh/docs/
	useEffect(() => {
		const getCoutriesData = async () => {
			await fetch(
				'https://disease.sh/v3/covid-19/countries'
			) // api endpoint goes here
				.then((response) => response.json()) // fetching json data
				.then((data) => {
					// setting response.json to data
					const countries = data.map((country) => ({
						name: country.country, // Name of the country...
						value: country.countryInfo.iso2, // UK, US, FR, etc...
					}));

					const sortedData = sortData(data); // pull from utils sorting function
					setTableData(sortedData);

					setCountries(countries);
				});
		};
		getCoutriesData();

		return () => {
			// console.log('<<< Hitting set countries useEffect!!!');
			// console.log(countries, '<<< countries');
		};
	}, []); // might add countries in brackets

	const onCountryChange = async (event) => {
		const countryCode = event.target.value;

		// Worldwide stats
		// https://disease.sh/v3/covid-19/all
		// country specific stats
		// https://disease.sh/v3/covid-19/countries/[COUNTRY_CODE]
		// ternary operator
		const url =
			countryCode === 'worldwide'
				? 'https://disease.sh/v3/covid-19/all'
				: `https://disease.sh/v3/covid-19/countries/${countryCode}`;
		await fetch(url)
			.then((response) => response.json())
			.then((data) => {
				// console.log(data, '<<< data');
				// console.log(countryCode, '<<< countryCode');
				setCountryInfo(data);
				setCountry(countryCode);
			});
	};

	// console.log(countryInfo, '<<< countryInfo');

	return (
		<div className='app'>
			<div className='app__left'>
				<div className='app__header'>
					<h1>Covid-19 Tracker</h1>
					<FormControl className='app__dropdown'>
						<Select
							onChange={onCountryChange}
							variant='outlined'
							value={country}>
							<MenuItem value='worldwide'>
								Worldwide
							</MenuItem>
							<hr />
							{countries.map((country) => (
								<MenuItem value={country.value}>
									{country.name}
								</MenuItem>
							))}
						</Select>
					</FormControl>
				</div>

				<div className='app__status'>
					<InfoBox
						title='Coronavirus Cases'
						total={countryInfo.todayCases}
						cases={countryInfo.cases}
					/>
					<InfoBox
						title='Recovered'
						cases={countryInfo.todayRecovered}
						total={countryInfo.recovered}
					/>
					<InfoBox
						title='Deaths'
						cases={countryInfo.todayDeaths}
						total={countryInfo.deaths}
					/>
				</div>

				<Map />
			</div>
			<Card className='app__right'>
				<CardContent>
					<h3>Live Cases by Country</h3>
					<Table countries={tableData} />
					<h3>Worldwide new cases</h3>
					<LineGraph casesType='cases' />
					<h3>Worldwide Deaths</h3>
					<LineGraph casesType='deaths' />
					<h3>Worldwide Recovered</h3>
					<LineGraph casesType='recovered' />
				</CardContent>
			</Card>
		</div>
	);
}

export default App;
