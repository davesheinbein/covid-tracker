import React from 'react';
import SwitchBtn from '../SwitchBtn/SwitchBtn';
import './style/Footer.css';

function Footer({ changeTheme }) {
	return (
		<div className='footer'>
			<div className='footer__container'>
				<div className='footer__left'>
					Created 2020 - by David Sheinbein
				</div>
				<div className='footer__right'>
					<SwitchBtn changeTheme={changeTheme} />
					<a href='https://github.com/davesheinbein/covid-tracker'>
						<p>Github</p>
					</a>
				</div>
			</div>
		</div>
	);
}

export default Footer;
