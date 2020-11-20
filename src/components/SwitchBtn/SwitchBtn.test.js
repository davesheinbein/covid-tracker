import React from 'react';
import ReactDOM, {
	unmountComponentAtNode,
} from 'react-dom';
import SwitchBtn from './SwitchBtn';
import { render } from '@testing-library/react';
import { changeTheme } from '../../pages/App/App';

test('initialTest', () => {
	expect(true).toBeTruthy();
});

let div = null;

beforeEach(() => {
	// setup a DOM element as a render target
	div = document.createElement('div');
	document.body.appendChild(div);
});

afterEach(() => {
	// cleanup on exiting
	unmountComponentAtNode(div);
	div.remove();
	div = null;
});

it('renders switch', () => {
	ReactDOM.render(<SwitchBtn></SwitchBtn>, div);
});

it('renders switch Correctly checked', () => {
	const { getByTestId } = render(
		<SwitchBtn changeTheme={changeTheme}></SwitchBtn>
	);
	expect(getByTestId('switch'));
});
