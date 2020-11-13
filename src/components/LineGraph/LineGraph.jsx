import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import numeral from 'numeral';
import './style/LineGraph.css';

const options = {
	legend: {
		display: false,
	},
	elements: {
		point: {
			radius: 0,
		},
	},
	maintainAspectRatio: false,
	tooltips: {
		mode: 'index',
		intersect: false,
		callbacks: {
			label: function (tooltipItem, data) {
				return numeral(tooltipItem.value).format('+0,0');
			},
		},
	},
	scales: {
		xAxes: [
			{
				type: 'time',
				time: {
					format: 'MM/DD/YY',
					tooltipFormat: 'll',
				},
			},
		],
		yAxes: [
			{
				gridLines: {
					display: false,
				},
				ticks: {
					// Include a dollar sign in the ticks
					callback: function (value, index, values) {
						return numeral(value).format('0a');
					},
				},
			},
		],
	},
};

function LineGraph({ casesType = 'cases' }) {
	const [data, setData] = useState({});

	const buildChartData = (data, caseType = 'cases') => {
		const chartData = [];
		let lastDataPoint;

		for (let date in data.cases) {
			if (lastDataPoint) {
				const newDataPoint = {
					x: date,
					y: data[caseType][date] - lastDataPoint,
				};
				chartData.push(newDataPoint);
			}
			lastDataPoint = data[caseType][date];
		}
		return chartData;
	};

	// API endpoint
	// https://disease.sh/v3/covid-19/historical/all?lastdays=120
	useEffect(() => {
		const fetchData = async () => {
			await fetch(
				'https://disease.sh/v3/covid-19/historical/all?lastdays=120'
			)
				.then((response) => response.json())
				.then((data) => {
					console.log(data, '<< data');
					let chartData = buildChartData(data, casesType); // can add a casetype here with , 'deaths'
					console.log(chartData, '<< chartData');
					setData(chartData);
				});
		};
		fetchData();
		return () => {
			console.log('<< hitting useEffect!!!!');
		};
	}, [casesType]);

	return (
		<div>
			{data?.length > 0 && (
				<Line
					data={{
						datasets: [
							{
								backgroundColor: ' rgba(204, 16, 52, 0.5)',
								borderColor: '#cc1034',
								data: data,
							},
						],
					}}
					options={options}
				/>
			)}
		</div>
	);
}

export default LineGraph;
