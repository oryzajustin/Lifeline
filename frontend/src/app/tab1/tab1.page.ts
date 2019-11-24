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

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  map: GoogleMap;
  loading: any;
  constructor(private platform: Platform) {}


  
  async ngOnInit() {
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

    this.map = GoogleMaps.create('map_canvas', {
      camera: {
        target: {
          lat: 43.0741704,
          lng: -89.3809802
        },
        zoom: 18,
        tilt: 30
      }
    });

  }

}
