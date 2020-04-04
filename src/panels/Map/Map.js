import React from 'react'

import { Map as LeafletMap, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import MapStyle from "./MapStyle.css";


const data = {'point0': [{'dolgota': 33.82234642761094},
  {'shirota': 50.764116910908356},
  {'date_from': '1941-09-16'},
  {'date_to': '1941-09-16'}],
 'point1': [{'dolgota': 37.538826633030375},
  {'shirota': 56.30072335112357},
  {'date_from': '1941-11-28'},
  {'date_to': '1941-11-29'}],
 'point2': [{'dolgota': 37.531856919151906},
  {'shirota': 56.29947321581277},
  {'date_from': '1941-11-30'},
  {'date_to': '1941-12-01'}],
 'point3': [{'dolgota': 37.54334309905504},
  {'shirota': 56.295726038310995},
  {'date_from': '1941-12-01'},
  {'date_to': '1941-12-03'}],
 'point4': [{'dolgota': 30.74355216671908},
  {'shirota': 59.92924059358974},
  {'date_from': '1941-12-03'},
  {'date_to': '1941-12-31'}],
 'point5': [{'dolgota': 37.52871892592584},
  {'shirota': 56.299782427334414},
  {'date_from': '1941-12-04'},
  {'date_to': '1941-12-05'}],
 'point6': [{'dolgota': 38.709577421053254},
  {'shirota': 48.200738921352816},
  {'date_from': '1941-12-24'},
  {'date_to': '1941-12-31'}],
 'point7': [{'dolgota': 31.51363245603465},
  {'shirota': 58.7713259364276},
  {'date_from': '1942-01-01'},
  {'date_to': '1942-12-31'}],
 'point8': [{'dolgota': 31.51363245603465},
  {'shirota': 58.7713259364276},
  {'date_from': '1942-01-01'},
  {'date_to': '1942-12-31'}],
 'point9': [{'dolgota': 34.77831976952092},
  {'shirota': 53.77855274748036},
  {'date_from': '1942-06-17'},
  {'date_to': '1942-06-17'}],
 'point10': [{'dolgota': 30.37794549260229},
  {'shirota': 59.9102248172045},
  {'date_from': '1943-07-01'},
  {'date_to': '1943-07-31'}],
 'point11': [{'dolgota': 36.76856425807061},
  {'shirota': 50.95107057583548},
  {'date_from': '1943-07-05'},
  {'date_to': '1943-07-07'}],
 'point12': [{'dolgota': 36.401015524067},
  {'shirota': 52.29823755692494},
  {'date_from': '1943-07-12'},
  {'date_to': '1943-07-15'}],
 'point13': [{'dolgota': 34.40133154415317},
  {'shirota': 50.00569022456347},
  {'date_from': '1943-09-10'},
  {'date_to': '1943-09-10'}],
 'point14': [{'dolgota': 30.42344186487856},
  {'shirota': 50.93117181847574},
  {'date_from': '1943-11-02'},
  {'date_to': '1943-11-10'}],
 'point15': [{'dolgota': 30.42344186487856},
  {'shirota': 50.93117181847574},
  {'date_from': '1943-11-02'},
  {'date_to': '1943-11-10'}],
 'point16': [{'dolgota': 30.710588095338046},
  {'shirota': 54.68487269203696},
  {'date_from': '1943-11-29'},
  {'date_to': '1943-12-08'}],
 'point17': [{'dolgota': 30.744125790467123},
  {'shirota': 49.19631047380354},
  {'date_from': '1944-02-21'},
  {'date_to': '1944-02-26'}]};


function getPolyline(path){
	
	var tmp_polyline = [];
	
	for (var key in path){
		var point = path[key];
		var y = point[0]['dolgota']
		var x = point[1]['shirota']
		tmp_polyline.push([x, y])
	}
	
	return tmp_polyline
}  


var polyline = getPolyline(data);

class Map extends React.Component {

  render() {
    return (

		<LeafletMap
		        center={[50, 10]}
		        zoom={6}
		        maxZoom={10}
		        attributionControl={true}
		        zoomControl={true}
		        doubleClickZoom={true}
		        scrollWheelZoom={true}
		        dragging={true}
		        animate={true}
		        easeLinearity={0.35}
		>      

			<TileLayer
				url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
			/>

	        <Marker position={[50, 10]}>
	          <Popup>
	            Popup for any custom information.
	          </Popup>
	        </Marker>

	        <Polyline color="red" positions={polyline} />

      	</LeafletMap>	

    );
  }
}

export default Map