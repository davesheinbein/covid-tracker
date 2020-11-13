import React, { Component } from 'react';
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';
import './style/SwitchBtn.css';

const PurpleSwitch = withStyles({
	switchBase: {
		color: grey[50],
		'&$checked': {
			color: grey[900],
		},
		'&$checked + $track': {
			backgroundColor: grey[500],
		},
	},
	checked: {},
	track: {},
})(Switch);
export class SwitchBtn extends Component {
	state = {
		toggled: false,
	};

	toggle = () => {
		const toggle = !this.state.toggled;
		this.setState({
			toggled: toggle,
		});
		this.props.changeTheme(toggle ? 'dark' : 'light');
		console.log(toggle, '<<toggle');
	};

	render(props) {
		return (
			<div className='switchContainer'>
				<PurpleSwitch
					// color='primary'
					defaultChecked
					className='switch'
					onClick={this.toggle}
				/>
			</div>
		);
	}
}

export default SwitchBtn;
