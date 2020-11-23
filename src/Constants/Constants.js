const states = [
	{
		flag:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Flag_of_Texas.svg/1280px-Flag_of_Texas.svg.png',
		state: 'Texas',
		iso2: 'TX',
		iso3: 'USA',
		lat: 31,
		long: 260,
	},
	{
		flag:
			'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg',
		state: 'California',
		iso2: 'CA',
		iso3: 'USA',
		lat: 36,
		long: 240,
	},
	{
		flag:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Flag_of_Florida.svg/1200px-Flag_of_Florida.svg.png',
		state: 'Florida',
		iso2: 'FL',
		iso3: 'USA',
		lat: 27.75,
		long: 278.5,
	},
	{
		flag:
			'https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_New_York.svg',
		state: 'New York',
		iso2: 'NY',
		iso3: 'USA',
		lat: 40.5,
		long: 286,
	},
	{
		flag:
			'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_Illinois.svg',
		state: 'Illinois',
		iso2: 'IL',
		iso3: 'USA',
		lat: 39.75,
		long: 270.5,
	},
	{
		flag:
			'https://upload.wikimedia.org/wikipedia/commons/5/54/Flag_of_Georgia_%28U.S._state%29.svg',
		state: 'Georgia',
		iso2: 'GA',
		iso3: 'USA',
		lat: 32,
		long: 277,
	},
	{
		flag:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Flag_of_North_Carolina.svg/1200px-Flag_of_North_Carolina.svg.png',
		state: 'North Carolina',
		iso2: 'NC',
		iso3: 'USA',
		lat: 35,
		long: 282,
	},
	{
		flag:
			'https://upload.wikimedia.org/wikipedia/commons/2/22/Flag_of_Wisconsin.svg',
		state: 'Wisconsin',
		iso2: 'WI',
		iso3: 'USA',
		lat: 45,
		long: 270.5,
	},
	{
		flag:
			'https://upload.wikimedia.org/wikipedia/commons/9/9e/Flag_of_Tennessee.svg',
		state: 'Tennessee',
		iso2: 'TN',
		iso3: 'USA',
		lat: 36,
		long: 274,
	},
	{
		flag:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Flag_of_Ohio.svg/1200px-Flag_of_Ohio.svg.png',
		state: 'Ohio',
		iso2: 'OH',
		iso3: 'USA',
		lat: 40,
		long: 277,
	},
	{
		flag:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Flag_of_New_Jersey.svg/512px-Flag_of_New_Jersey.svg.png',
		state: 'New Jersey',
		iso2: 'NJ',
		iso3: 'USA',
		lat: 40.1,
		long: 285.6,
	},
	{
		flag:
			'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arizona.svg',
		state: 'Arizona',
		iso2: 'AZ',
		iso3: 'USA',
		lat: 34.5,
		long: 248.5,
	},
	{
		flag:
			'https://upload.wikimedia.org/wikipedia/commons/b/b5/Flag_of_Michigan.svg',
		state: 'Michigan',
		iso2: 'MI',
		iso3: 'USA',
		lat: 43,
		long: 275.5,
	},
	{
		flag:
			'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Pennsylvania.svg',
		state: 'Pennsylvania',
		iso2: 'PA',
		iso3: 'USA',
		lat: 41.1,
		long: 282.25,
	},
	{
		flag:
			'https://upload.wikimedia.org/wikipedia/commons/5/5a/Flag_of_Missouri.svg',
		state: 'Missouri',
		iso2: 'MO',
		iso3: 'USA',
		lat: 38.5,
		long: 267,
	},
	{
		flag:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Flag_of_Indiana.svg/1200px-Flag_of_Indiana.svg.png',
		state: 'Indiana',
		iso2: 'IN',
		iso3: 'USA',
		lat: 40,
		long: 274,
	},
	{
		flag:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Alabama.svg/1200px-Flag_of_Alabama.svg.png',
		state: 'Alabama',
		iso2: 'AL',
		iso3: 'USA',
		lat: 32.5,
		long: 273.5,
	},
	{
		flag:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Flag_of_Minnesota.svg/1200px-Flag_of_Minnesota.svg.png',
		state: 'Minnesota',
		iso2: 'MI',
		iso3: 'USA',
		lat: 46.5,
		long: 265.5,
	},
	{
		flag:
			'https://upload.wikimedia.org/wikipedia/commons/e/e0/Flag_of_Louisiana.svg',
		state: 'Louisiana',
		iso2: 'LA',
		iso3: 'USA',
		lat: 31,
		long: 268,
	},
	{
		flag:
			'https://upload.wikimedia.org/wikipedia/commons/4/47/Flag_of_Virginia.svg',
		state: 'Virginia',
		iso2: 'VA',
		iso3: 'USA',
		lat: 38,
		long: 282,
	},
	{
		flag:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Flag_of_South_Carolina.svg/1920px-Flag_of_South_Carolina.svg.png',
		state: 'South Carolina',
		iso2: 'SC',
		iso3: 'USA',
		lat: 33.6,
		long: 279.5,
	},
	{
		flag:
			'https://upload.wikimedia.org/wikipedia/commons/f/f2/Flag_of_Massachusetts.svg',
		state: 'Massachusetts',
		iso2: 'MA',
		iso3: 'USA',
		lat: 42,
		long: 289,
	},
	{
		flag:
			'https://upload.wikimedia.org/wikipedia/commons/a/aa/Flag_of_Iowa.svg',
		state: 'Iowa',
		iso2: 'IA',
		iso3: 'USA',
		lat: 42,
		long: 267,
	},
	{
		flag:
			'https://upload.wikimedia.org/wikipedia/commons/a/a0/Flag_of_Maryland.svg',
		state: 'Maryland',
		iso2: 'MD',
		iso3: 'USA',
		lat: 39.25,
		long: 283.4,
	},
	{
		flag:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colorado_designed_by_Andrew_Carlisle_Carson.svg/510px-Flag_of_Colorado_designed_by_Andrew_Carlisle_Carson.svg.png',
		state: 'Colorado',
		iso2: 'CO',
		iso3: 'USA',
		lat: 39,
		long: 254.5,
	},
	{
		flag:
			'https://upload.wikimedia.org/wikipedia/commons/6/6e/Flag_of_Oklahoma.svg',
		state: 'Oklahoma',
		iso2: 'OK',
		iso3: 'USA',
		lat: 35.25,
		long: 263,
	},
	{
		flag:
			'https://upload.wikimedia.org/wikipedia/commons/f/f6/Flag_of_Utah.svg',
		state: 'Utah',
		iso2: 'FL',
		iso3: 'USA',
		lat: 39.5,
		long: 248.5,
	},
	{
		flag:
			'https://upload.wikimedia.org/wikipedia/commons/8/8d/Flag_of_Kentucky.svg',
		state: 'Kentucky',
		iso2: 'UT',
		iso3: 'USA',
		lat: 37.75,
		long: 275.25,
	},
	{
		flag:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Flag_of_Mississippi_%28%22New_Magnolia_Flag%22%29.svg/510px-Flag_of_Mississippi_%28%22New_Magnolia_Flag%22%29.svg.png',
		state: 'Mississippi',
		iso2: 'MS',
		iso3: 'USA',
		lat: 32.5,
		long: 270.25,
	},
	{
		flag:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Flag_of_Arkansas.svg/510px-Flag_of_Arkansas.svg.png',
		state: 'Arkansas',
		iso2: 'AR',
		iso3: 'USA',
		lat: 34.75,
		long: 267.5,
	},
	{
		flag:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Flag_of_Washington.svg/510px-Flag_of_Washington.svg.png',
		state: 'Washington',
		iso2: 'WA',
		iso3: 'USA',
		lat: 38.88,
		long: 283,
	},
	{
		flag:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Flag_of_Kansas.svg/510px-Flag_of_Kansas.svg.png',
		state: 'Kansas',
		iso2: 'KS',
		iso3: 'USA',
		lat: 38.5,
		long: 261.75,
	},
	{
		flag:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Flag_of_Nevada.svg/510px-Flag_of_Nevada.svg.png',
		state: 'Nevada',
		iso2: 'NV',
		iso3: 'USA',
		lat: 38.5,
		long: 243.5,
	},
	{
		flag:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Flag_of_Nebraska.svg/510px-Flag_of_Nebraska.svg.png',
		state: 'Nebraska',
		iso2: 'NE',
		iso3: 'USA',
		lat: 41.5,
		long: 260,
	},
	{
		flag:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Flag_of_Connecticut.svg/440px-Flag_of_Connecticut.svg.png',
		state: 'Connecticut',
		iso2: 'CT',
		iso3: 'USA',
		lat: 41.5,
		long: 287.25,
	},
	{
		flag:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_Idaho.svg/432px-Flag_of_Idaho.svg.png',
		state: 'Idaho',
		iso2: 'ID',
		iso3: 'USA',
		lat: 44,
		long: 245,
	},
	{
		flag:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_South_Dakota.svg/510px-Flag_of_South_Dakota.svg.png',
		state: 'South Dakota',
		iso2: 'SD',
		iso3: 'USA',
		lat: 44.25,
		long: 260,
	},
	{
		flag:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_New_Mexico.svg/510px-Flag_of_New_Mexico.svg.png',
		state: 'New Mexico',
		iso2: 'NM',
		iso3: 'USA',
		lat: 34.25,
		long: 253.5,
	},
	{
		flag:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Flag_of_North_Dakota.svg/435px-Flag_of_North_Dakota.svg.png',
		state: 'North Dakota',
		iso2: 'ND',
		iso3: 'USA',
		lat: 47.5,
		long: 260,
	},
	{
		flag:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Flag_of_Oregon.svg/510px-Flag_of_Oregon.svg.png',
		state: 'Oregon',
		iso2: 'OR',
		iso3: 'USA',
		lat: 44.25,
		long: 239.5,
	},
	{
		flag:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_Montana.svg/510px-Flag_of_Montana.svg.png',
		state: 'Montana',
		iso2: 'MT',
		iso3: 'USA',
		lat: 46.75,
		long: 250.5,
	},
	{
		flag:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Rhode_Island.svg/387px-Flag_of_Rhode_Island.svg.png',
		state: 'Rhode Island',
		iso2: 'RI',
		iso3: 'USA',
		lat: 41.5,
		long: 288.5,
	},
	{
		flag:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Flag_of_West_Virginia.svg/510px-Flag_of_West_Virginia.svg.png',
		state: 'West Virginia',
		iso2: 'WV',
		iso3: 'USA',
		lat: 39,
		long: 280,
	},
	{
		flag:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Flag_of_Delaware.svg/510px-Flag_of_Delaware.svg.png',
		state: 'Delaware',
		iso2: 'DE',
		iso3: 'USA',
		lat: 39.15,
		long: 284.5,
	},
	{
		flag:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Flag_of_Wyoming_by_Verna_Keays.jpg/486px-Flag_of_Wyoming_by_Verna_Keays.jpg',
		state: 'Wyoming',
		iso2: 'WY',
		iso3: 'USA',
		lat: 43,
		long: 252.5,
	},
	{
		flag:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Flag_of_Alaska.svg/482px-Flag_of_Alaska.svg.png',
		state: 'Alaska',
		iso2: 'AK',
		iso3: 'USA',
		lat: 63.5,
		long: 208,
	},
	{
		flag:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Flag_of_the_District_of_Columbia.svg/510px-Flag_of_the_District_of_Columbia.svg.png',
		state: 'District Of Columbia', // Washington D.C. - District Of Columbia
		iso2: 'DC',
		iso3: 'USA',
		lat: 39,
		long: 283,
	},
	{
		flag:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Flag_of_Hawaii.svg/510px-Flag_of_Hawaii.svg.png',
		state: 'Hawaii',
		iso2: 'HI',
		iso3: 'USA',
		lat: 19.65,
		long: 204.5,
	},
	{
		flag:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Flag_of_New_Hampshire.svg/510px-Flag_of_New_Hampshire.svg.png',
		state: 'New Hampshire',
		iso2: 'NH',
		iso3: 'USA',
		lat: 44,
		long: 288.5,
	},
	{
		flag:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Flag_of_Maine.svg/432px-Flag_of_Maine.svg.png',
		state: 'Maine',
		iso2: 'ME',
		iso3: 'USA',
		lat: 45.25,
		long: 291,
	},
	{
		flag:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Vermont.svg/510px-Flag_of_Vermont.svg.png',
		state: 'Vermont',
		iso2: 'VT',
		iso3: 'USA',
		lat: 43.9,
		long: 287.25,
	},
	{
		flag:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Flag_of_Puerto_Rico.svg/510px-Flag_of_Puerto_Rico.svg.png',
		state: 'Puerto Rico',
		iso2: 'PR',
		iso3: 'USA',
		lat: 18.5,
		long: 294,
	},
	{
		flag:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Flag_of_Guam.svg/510px-Flag_of_Guam.svg.png',
		state: 'Guam',
		iso2: 'GU',
		iso3: 'USA',
		lat: 13.5,
		long: 144.75,
	},
	{
		flag:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Flag_of_the_United_States_Virgin_Islands.svg/510px-Flag_of_the_United_States_Virgin_Islands.svg.png',
		state: 'United States Virgin Islands',
		iso2: 'VI',
		iso3: 'USA',
		lat: 19,
		long: 296,
	},
	{
		flag:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Flag_of_the_Northern_Mariana_Islands.svg/510px-Flag_of_the_Northern_Mariana_Islands.svg.png',
		state: 'Northern Mariana Islands',
		iso2: 'MP',
		iso3: 'USA',
		lat: 14.25,
		long: 145.25,
	},
	{
		flag:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Flag_of_American_Samoa.svg/510px-Flag_of_American_Samoa.svg.png',
		state: 'American Samoa',
		iso2: 'AS',
		iso3: 'USA',
		lat: -14,
		long: 188,
	},
	{
		flag:
			'https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/440px-Flag_of_the_United_States.svg.png',
		state: 'US Military',
		iso2: 'US',
		iso3: 'USA',
		lat: 34,
		long: 295,
	},
	{
		flag:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Flag_of_the_United_States_Department_of_Veterans_Affairs.svg/400px-Flag_of_the_United_States_Department_of_Veterans_Affairs.svg.png',
		state: 'Veteran Affairs',
		iso2: 'VE',
		iso3: 'USA',
		lat: 28,
		long: 295,
	},
	{
		flag:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Flag_of_the_United_States_Federal_Bureau_of_Prisons.svg/440px-Flag_of_the_United_States_Federal_Bureau_of_Prisons.svg.png',
		state: 'Federal Prisons',
		iso2: 'FP',
		iso3: 'USA',
		lat: 34,
		long: 230,
	},
	{
		flag:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Navajo_flag.svg/400px-Navajo_flag.svg.png',
		state: 'Navajo Nation',
		iso2: 'NN',
		iso3: 'USA',
		lat: 38,
		long: 247,
	},
	{
		flag:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Grand_Princess_%28ship%2C_1998%29_IMO_9104005%2C_in_Split%2C_2011-10-13.jpg/600px-Grand_Princess_%28ship%2C_1998%29_IMO_9104005%2C_in_Split%2C_2011-10-13.jpg',
		state: 'Grand Princess Ship',
		iso2: 'GPS',
		iso3: 'USA',
		lat: 28,
		long: 230,
	},
	{
		flag:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/510px-Flag_of_the_People%27s_Republic_of_China.svg.png',
		state: 'Wuhan Repatriated',
		iso2: 'WR',
		iso3: 'USA',
		lat: 30,
		long: 114,
	},
	{
		flag:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Diamond_Princess_%28ship%2C_2004%29_-_cropped.jpg/600px-Diamond_Princess_%28ship%2C_2004%29_-_cropped.jpg',
		state: 'Diamond Princess Ship',
		iso2: 'DPS',
		iso3: 'USA',
		lat: 18,
		long: 230,
	},
];

export const sortedStates = states.sort((a, b) =>
	a.state < b.state ? -1 : 1
);

// console.log(sortedStates, '<<< sortedStates');
