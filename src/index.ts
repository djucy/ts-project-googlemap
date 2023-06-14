/// <reference types="@types/google.maps"/>
import 'dotenv/config'
import { User } from './User';
import { Company } from './Company';
import {CustomMap} from './CustomMap';

declare global {
  interface Window {
    initMap: () => void;
  }
}

const user = new User();
const company = new Company();

const script = document.createElement('script');
script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.API_KEY}&libraries=places&callback=initMap`;
script.async = true;

function initMap () { 
let map = new CustomMap('map');
map.addMarker( user );
map.addMarker(company);
};

window.initMap=initMap;
document.head.appendChild(script);






