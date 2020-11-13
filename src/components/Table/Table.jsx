import React from 'react';
import numeral from 'numeral';
import './style/Table.css';

function Table({ countries }) {
	return (
		<div className='table'>
			{countries.map(({ country, cases }) => (
				<div key={country}>
					<div>{country}</div>
					<div>
						<strong>{numeral(cases).format('0,0')}</strong>
					</div>
				</div>
			))}
		</div>
	);
}

export default Table;
