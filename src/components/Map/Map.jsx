import React from 'react';
import {
	MapContainer as LeafletMap,
	TileLayer,
} from 'react-leaflet';
import { showDataOnMap } from '../../utils/utils';
import './style/Map.css';

function Map({ center, zoom, countries, casesType }) {
	console.log(center, '<<<<< center ');
	return (
		<div className='map'>
			<LeafletMap zoom={zoom} center={center}>
				<TileLayer
					url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
					attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
				/>
				{showDataOnMap(countries, casesType)}
			</LeafletMap>
		</div>
	);
}

export default Map;
