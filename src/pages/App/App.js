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
	// console.log('<<<< location', location);
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
					</Switch>
					<div className='app__links'>
						<Link to='/' className='app__link'>
							<ArrowBackIos />
							Worldwide
						</Link>
						<Link to='/usa' className='app__link'>
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
