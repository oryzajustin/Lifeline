import { Component, OnInit } from '@angular/core';
import {
  ToastController,
  Platform,
  LoadingController
} from '@ionic/angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker,
  GoogleMapsAnimation,
  MyLocation,
  Environment
} from '@ionic-native/google-maps';

import { Socket } from 'ngx-socket-io';

import {Geolocation } from '@ionic-native/geolocation/ngx';

import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  map: GoogleMap;
  loading: any;
  constructor(private socket: Socket, private platform: Platform, private geolocation: Geolocation, private storage: Storage) {}
  
  async ngOnInit() {
    this.socket.connect();

    this.geolocation.getCurrentPosition().then((resp) => {
     // resp.coords.latitude
     // resp.coords.longitude
     // set a key/value
     this.storage.ready().then(() => {
      this.storage.set('coords', {'lat': resp.coords.latitude, 'lng':resp.coords.longitude});
     });
      
    }).catch((error) => {
      console.log('Error getting location', error);
    });

    // Since ngOnInit() is executed before `deviceready` event,
    // you have to wait the event.
    await this.platform.ready();
    await this.loadMap();
  }


  loadMap() {
    Environment.setEnv({
      'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyCsRbd3PmUnTdwns7r3UYTeeAAw8IRUSI8',
      'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyCsRbd3PmUnTdwns7r3UYTeeAAw8IRUSI8'
    });
    this.storage.get('coords').then((coords) => {
      this.map = GoogleMaps.create('map_canvas', {
        camera: {
          target: {
            lat: coords.lat,
            lng: coords.lng
          },
          zoom: 18,
          tilt: 30
        }
      });

    })

  }

}
