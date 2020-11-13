import React, { Component } from 'react';
import Switch from '@material-ui/core/Switch';
import './style/SwitchBtn.css';

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
				<Switch
					color='primary'
					defaultChecked
					className='switch'
					onClick={this.toggle}
				/>
			</div>
		);
	}
}

export default SwitchBtn;
