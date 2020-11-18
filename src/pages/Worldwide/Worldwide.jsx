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
// Styles
import './style/Worldwide.css';

function Worldwide() {
	const [countries, setCountries] = useState([]);
	const [country, setCountry] = useState('worldwide');
	const [countryInfo, setCountryInfo] = useState({});
	const [tableData, setTableData] = useState([]);
	const [mapCenter, setMapCenter] = useState({
		lat: 34.80746,
		lng: -40.4796,
	});
	const [mapZoom, setMapZoom] = useState(3);
	const [mapCountries, setMapCountries] = useState([]);
	const [casesType, setCasesType] = useState('cases');

	useEffect(() => {
		fetch('https://disease.sh/v3/covid-19/all')
			.then((response) => response.json())
			.then((data) => {
				setCountryInfo(data);
			});
		return () => {
			// console.log('<< hitting useEffect!!!!');
		};
	}, []); // might include countryInfo in brackets

	// Fetch this api endpoint - for covid data
	// https://disease.sh/v3/covid-19/countries
	// For more endpoints check out
	// https://disease.sh/docs/
	useEffect(() => {
		const getCountriesData = async () => {
			await fetch(
				'https://disease.sh/v3/covid-19/countries'
			) // api endpoint goes here
				.then((response) => response.json()) // fetching json data
				.then((data) => {
					// setting response.json to data
					const countries = data.map((country) => ({
						name: country.country, // Name of the country...
						value: country.countryInfo.iso2, // UK, US, FR, etc...
						key: country.countryInfo._id,
					}));
					console.log(data, '<<< data');
					const sortedData = sortData(data); // pull from utils sorting function
					setTableData(sortedData);
					setCountries(countries);
					setMapCountries(data);
				});
		};
		getCountriesData();

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
				setCountry(countryCode);
				setCountryInfo(data);
				setMapCenter(
					countryCode === 'worldwide'
						? [34.80746, -40.4796]
						: [data.countryInfo.lat, data.countryInfo.long]
				);
				console.log(mapCenter, '<< mapCenter');
				setMapZoom(5);
			});
	};

	// console.log(countryInfo, '<<< countryInfo');

	return (
		<div className='worldwide'>
			<div className='worldwide__container'>
				<div className='worldwide__left'>
					<div className='worldwide__header'>
						<h1>Covid-19 Tracker - Worldwide</h1>
						<FormControl className='worldwide__dropdown'>
							<Select
								onChange={onCountryChange}
								variant='outlined'
								value={country}>
								<MenuItem value='worldwide' key='worldwide'>
									Worldwide
								</MenuItem>
								<hr />
								{countries.map((country) => (
									<MenuItem
										key={country.key}
										value={country.value}>
										{country.name}
									</MenuItem>
								))}
							</Select>
						</FormControl>
					</div>

					<div className='worldwide__status'>
						<InfoBox
							active={casesType === 'cases'}
							onClick={(e) => setCasesType('cases')}
							title='Corona Virus Cases'
							total={prettyPrintStat(countryInfo.cases)}
							cases={prettyPrintStat(
								countryInfo.todayCases
							)}
							isRed
						/>
						<InfoBox
							active={casesType === 'recovered'}
							onClick={(e) => setCasesType('recovered')}
							title='Recovered'
							total={prettyPrintStat(countryInfo.recovered)}
							cases={prettyPrintStat(
								countryInfo.todayRecovered
							)}
						/>
						<InfoBox
							active={casesType === 'deaths'}
							onClick={(e) => setCasesType('deaths')}
							title='Deaths'
							total={prettyPrintStat(countryInfo.deaths)}
							cases={prettyPrintStat(
								countryInfo.todayDeaths
							)}
							isRed
						/>
					</div>

					<Map
						casesType={casesType}
						countries={mapCountries}
						center={mapCenter}
						zoom={mapZoom}
					/>
				</div>
				<Card className='worldwide__right'>
					<CardContent>
						<h3>Live Cases by Country</h3>
						<Table countries={tableData} />
						<h3 className='worldwide__graphTitle'>
							Worldwide new {casesType}
						</h3>
						<LineGraph
							className='worldwide__graph'
							casesType={casesType}
						/>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}

export default Worldwide;
