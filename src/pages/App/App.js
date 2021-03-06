import React, { useState, useContext } from 'react';
// routing
import { Switch, Route, Link } from 'react-router-dom';
import { __RouterContext } from 'react-router';
// transition
import {
	useTransition,
	animated,
	config,
} from 'react-spring';
// components
import Worldwide from '../Worldwide/Worldwide';
import Usa from '../Usa/Usa';
import Footer from '../../components/Footer/Footer';
// icons
import {
	ArrowBackIos,
	ArrowForwardIos,
	Translate,
} from '@material-ui/icons';
// Styles
import './style/App.css';
// leaflet css
import 'leaflet/dist/leaflet.css';

function App(props) {
	const [color, setColor] = useState('light');
	const { location } = useContext(__RouterContext);
	console.log(location, '<<<< location');
	console.log(location.pathname, '<<<< location.pathname');
	// console.log('<<<< __RouterContext', __RouterContext);
	const transition = useTransition(
		location,
		(location) => location.pathname,
		{
			from: {
				opacity: 0,
			},
			enter: {
				opacity: 1,
			},
			leave: {
				opacity: 0,
			},
			config: config.wobbly,
		}
	);

	const changeTheme = (color) => {
		setColor(color);
		document.documentElement.setAttribute(
			'themeChanger',
			color
		);
		// console.log(document, '< document');
	};

	return (
		<>
			{transition.map(({ item, props, key }) => (
				<animated.div
					className='app'
					key={key}
					style={props}>
					<Switch location={item}>
						<Route
							exact
							path='/'
							render={() => (
								<>
									<Worldwide />
								</>
							)}
						/>
						<Route
							exact
							path='/usa'
							render={() => (
								<>
									<Usa />
								</>
							)}
						/>
						<Route
							render={() => (
								<div className='app__notFoundContainer'>
									<div className='app__notFound'>
										<strong>Page</strong>
										<small>Not Found</small>
									</div>
								</div>
							)}
						/>
					</Switch>
					<div className='app__links'>
						<Link
							to='/'
							className='app__link'
							style={
								location.pathname == '/'
									? {
											// display: 'none',
											color: 'transparent',
											fontSize: 0,
											cursor: 'unset',
									  }
									: { display: 'flex' }
							}>
							<ArrowBackIos />
							Worldwide
						</Link>
						<Link
							to='/usa'
							className='app__link'
							style={
								location.pathname == '/usa'
									? {
											// display: 'none',
											color: 'transparent',
											fontSize: 0,
											cursor: 'unset',
									  }
									: { display: 'flex' }
							}>
							USA
							<ArrowForwardIos />
						</Link>
					</div>
				</animated.div>
			))}
			<Footer changeTheme={changeTheme} />
		</>
	);
}

export default App;
