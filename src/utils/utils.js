import React from 'react';
import numeral from 'numeral';
import { Circle, Popup } from 'react-leaflet';
import usa from '../images/usaFlag.jpg';

const casesTypeColors = {
	cases: {
		hex: '#CC1034',
		rgb: 'rgb(204, 16, 52)',
		half_op: 'rgba(204, 16, 52, 0.5)',
		multiplier: 800,
	},
	recovered: {
		hex: '#7dd71d',
		rgb: 'rgb(125, 215, 29)',
		half_op: 'rgba(125, 215, 29, 0.5)',
		multiplier: 1000,
	},
	deaths: {
		hex: '#fb4443',
		rgb: 'rgb(251, 68, 67)',
		half_op: 'rgba(251, 68, 67, 0.5)',
		multiplier: 1200,
	},
};

// console.log(casesTypeColors, '<<< casesTypeColors');
// console.log(
// 	casesTypeColors['recovered'].hex,
// 	'<<< casesTypeColors[casesType].hex'
// );

// console.dir(document, 'document');

export const sortData = (data) => {
	const sortedData = [...data];

	// sortedData.sort((a, b) => {
	// 	if (a.cases > b.cases) {
	// 		return -1;
	// 	} else {
	// 		return 1;
	// 	}
	// });
	// return sortedData;

	// Same as above
	return sortedData.sort((a, b) =>
		a.cases > b.cases ? -1 : 1
	);
	// console.log(sortedData, '<< sorted Data');
};

// prints the string stats prettier
export const prettyPrintStat = (stat) =>
	stat ? `+${numeral(stat).format('0.0a')}` : '+0';

// Draws circles on the map
export const showDataOnMap = (data, casesType = 'cases') =>
	data
		.sort((a, b) => (a.cases > b.cases ? -1 : 1))
		.map((country, idx) => (
			// console.log(
			// 	country,
			// 	'<< country or State',
			// 	idx,
			// 	'<< idx'
			// ),
			// console.log(
			// 	country.countryInfo.lat,
			// 	'country.countryInfo.lat'
			// ),
			// console.log(casesType, 'casesType'),
			// console.log(
			// 	country[casesType],
			// 	'<< [casesType]',
			// 	casesTypeColors[casesType],
			// 	'<< casesTypeColors[casesType]'
			// ),
			<div style={{ zIndex: 1000 - idx }}>
				<Circle
					key={country.countryInfo.iso3}
					center={[
						country.countryInfo.lat,
						country.countryInfo.long,
					]}
					fillColor={casesTypeColors[casesType].hex}
					color={casesTypeColors[casesType].hex}
					fillOpacity={0.4}
					radius={
						Math.sqrt(country[casesType]) *
						casesTypeColors[casesType].multiplier
					}>
					<Popup>
						<div className='info__container'>
							<div
								className='info__flag'
								style={
									country.countryInfo.flag
										? {
												backgroundImage: `url(${country.countryInfo.flag})`,
										  }
										: { backgroundImage: `url(${usa})` }
								}></div>
							<div className='info__name'>
								{country.country
									? country.country
									: country.state}
							</div>
							<div className='info__confirmed'>
								Cases:{' '}
								{numeral(country.cases).format('0,0')}
							</div>
							<div className='info__recovered'>
								Recovered:{' '}
								{numeral(country.recovered).format('0,0')}
							</div>
							<div className='info__deaths'>
								Deaths:{' '}
								{numeral(country.deaths).format('0,0')}
							</div>
						</div>
					</Popup>
				</Circle>
			</div>
		));
