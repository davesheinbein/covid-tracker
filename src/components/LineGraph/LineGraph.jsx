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

function LineGraph() {
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
		fetch(
			'https://disease.sh/v3/covid-19/historical/all?lastdays=120'
		)
			.then((response) => response.json())
			.then((data) => {
				const chartData = buildChartData(data, 'cases'); // can add a casetype here with , 'deaths'
				console.log(chartData, '<< chartData');
				setData(chartData);
			});
		return () => {
			console.log(data, '<< data');
			console.log('<< hitting useEffect!!!!');
		};
	}, []);

	return (
		<div>
			<Line
				data={{
					datasets: [{ data: data }],
				}}
				options={options}
				backgroundColor='rgba(120, 10, 100, 1)'
				borderColor='rgba(100, 220, 20, 1)'
			/>
		</div>
	);
}

export default LineGraph;
