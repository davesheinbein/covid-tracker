import React from 'react';
import numeral from 'numeral';
import './style/Table.css';

function Table({ countries }) {
	console.log(countries, '<< countries & States');
	return (
		<div className='table'>
			{countries.map(
				({ state, country, cases }) => (
					console.log(state, '<<  States'),
					console.log(cases, '<< cases & States'),
					console.log(country, '<< country & State'),
					(
						<div key={country || state}>
							<div>{country || state}</div>
							<div>
								<strong>
									{numeral(cases).format('0,0')}
								</strong>
							</div>
						</div>
					)
				)
			)}
		</div>
	);
}

export default Table;
