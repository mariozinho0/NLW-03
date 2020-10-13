import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

import mapMarkerImg from '../images/map-marker.svg';

import '../styles/pages/orphanages-map.css';

function OrphanagesMap() {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy" />
                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>

                <footer>
                    <strong>Barueri</strong>
                    <span>São Paulo</span>
                </footer>
            </aside>

            <Map
                center={[-23.4940214,-46.8931377]}
                zoom={15}
                style={{ width: '100%', height: '100%' }}
            >
                <TileLayer
                    url="https://api.mapbox.com/styles/v1/mariozinho0/ckg87um9y1hm319mbdbcrrkp9/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibWFyaW96aW5obzAiLCJhIjoiY2tnODdyNjQ5MGVwNTJxbXQxaXNxMzFsaiJ9.X35i1nCGqbdB4HAUqvUSJQ"
                />
            </Map>
            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#FFF" />
            </Link>
        </div>
    )
}

export default OrphanagesMap;