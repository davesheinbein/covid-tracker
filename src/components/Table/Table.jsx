import React from 'react';
import numeral from 'numeral';
import './style/Table.css';

function Table({ countries }) {
	// console.log(countries, '<< countries & States');
	return (
		<div className='table' data-testid='table'>
			{countries.map(
				({ state, country, cases }) => (
					// console.log(state, '<<  States'),
					// console.log(cases, '<< cases'),
					// console.log(countries, '<< country'),
					(
						// console.log(country, '<< country'),
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
