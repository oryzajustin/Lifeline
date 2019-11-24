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

import { SocketService } from './../../services/socket.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  emsMarkers: any = [
    {
      "icon": 'blue',
      "title": "Middlesex London EMS Headquarters Station #1",
      "name": "Middlesex London EMS Headquarters Station #1",
      "position": {
        "lng": -81.241056968403,
        "lat": 42.983691382743
      }
    },
    {
      "icon": 'blue',
      "title": "EMS Station #2",
      "name": "EMS Station #2",
      "position": {
        "lng": -81.23191612369,
        "lat": 42.923020719595
      }
    },
    {
      "icon": 'blue',
      "title": "EMS Station #4",
      "name": "EMS Station #4",
      "position": {
        "lng": -81.245347432145,
        "lat": 43.040678946609
      }
    },
    {
      "icon": 'blue',
      "title": "EMS Station #3",
      "name": "EMS Station #3",
      "position": {
        "lng": -81.2957040588,
        "lat": 42.983394641625
      }
    },
    {
      "icon": 'blue',
      "title": "EMS Station #5",
      "name": "EMS Station #5",
      "position": {
        "lng": -81.172191725155,
        "lat": 43.006659071277
      }
    },
    {
      "icon": 'blue',
      "title": "EMS Station #6",
      "name": "EMS Station #6",
      "position": {
        "lng": -81.316152502338,
        "lat": 42.933933855438
      }
    },
     {
       "icon": 'blue',
      "title": "EMS Station #7",
      "name": "EMS Station #7",
      "position": {
        "lng": -81.339872421616,
        "lat": 43.015236242195
      }
    }
  ];

  hospitalMarkers: any = [
    {
      "icon": 'blue',
      "title": "London Health Sciences Centre - Victoria Hospital",
      "name": "London Health Sciences Centre - Victoria Hospital",
      "position": {
        "lng": -81.226346319931,
        "lat": 42.960201507895
      }
    },
    {
      "icon": 'blue',
      "title": "London Health Sciences Centre - Children's Hospital",
      "name": "London Health Sciences Centre - Children's Hospital",
      "position": {
        "lng": -81.225691475973,
        "lat": 42.961276600093
      }
    },
    {
      "icon": 'blue',
      "title": "London Health Sciences Centre - University Hospital",
      "name": "London Health Sciences Centre - University Hospital",
      "position": {
        "lng": -81.274748988433,
        "lat": 43.012382331917
      }
    },
    {
      "icon": 'blue',
      "title": "St Joseph's Health Care Hospital",
      "name": "St Joseph's Health Care Hospital",
      "position": {
        "lng": -81.253949098806,
        "lat": 43.000399374159
      }
    },
    {
      "icon": 'blue',
      "title": "Parkwood Institute",
      "name": "Parkwood Institute",
      "position": {
        "lng": -81.224883412043,
        "lat": 42.955810655303
      }
    },
    {
      "icon": 'blue',
      "title": "London Psychiatric Hospital",
      "name": "London Psychiatric Hospital",
      "position": {
        "lng": -81.205516962187,
        "lat": 43.003856043295
      }
    }
  ];

  map: GoogleMap;
  loading: any;
  location: any = {};
  currentAlert: any = null;
  gmapsLink: string;
  distressIcons: any = [];

  constructor(private socket: SocketService, private platform: Platform, private geolocation: Geolocation) {}
  
  async ngOnInit() {

    // Since ngOnInit() is executed before `deviceready` event,
    // you have to wait the event.
    await this.platform.ready();
    await this.loadMap();
  }

  ionViewDidEnter() {
    this.socket.updateDistressSignals();
  }

  async addLocations() {
    for (let i = 0; i < this.emsMarkers.length; i++) {
      await this.map.addMarker({
        title: this.emsMarkers[i]['title'],
        animation: 'DROP',
        icon: {'url': './assets/small.png'},
        position: this.emsMarkers[i].position
      })
      console.log("hi");
    }
    for (let i = 0; i < this.hospitalMarkers.length; i++) {
      await this.map.addMarker({
        title: this.hospitalMarkers[i]['title'],
        animation: 'DROP',
        icon: {'url': './assets/small.png'},
        position: this.hospitalMarkers[i].position
      });
      console.log("hi2");
    }
  }

  loadMap() {
    this.geolocation.getCurrentPosition({ enableHighAccuracy: true }).then((resp) => {
      this.location = {'lat': resp.coords.latitude, 'lng': resp.coords.longitude};
      console.log(this.location);

      Environment.setEnv({
        'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyCsRbd3PmUnTdwns7r3UYTeeAAw8IRUSI8',
        'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyCsRbd3PmUnTdwns7r3UYTeeAAw8IRUSI8'
      });
      this.map = GoogleMaps.create('map_canvas', {
        camera: {
          target: {
            lat: this.location['lat'],
            lng: this.location['lng']
          },
          zoom: 20,
          tilt: 30
        }
      });

      this.socket.updateDistressSignals()
        .subscribe(signals => {
          console.log("New Update");
          console.log(signals);
          this.map.clear();

          //populate data from london
          this.addLocations().then(() => {
            if (signals.length > 0) {
              // Use only latest alert
              this.currentAlert = signals[signals.length - 1]; 
              console.log(this.currentAlert);
              this.gmapsLink = `https://www.google.com/maps/dir/?api=1&destination=${this.currentAlert.coords.lat},${this.currentAlert.coords.lng}`; 

              // Add marker (Move camera to it)
              this.map.addMarker({
                title: 'Distress Alert',
                icon: 'red',
                animation: 'DROP',
                position: {
                  lat: this.currentAlert.coords.lat,
                  lng: this.currentAlert.coords.lng
                }
              }).then(() => {
                this.map.animateCamera({
                  target: {lat: this.currentAlert.coords.lat, lng: this.currentAlert.coords.lng},
                  zoom: 20,
                  tilt: 60,
                  bearing: 140,
                  duration: 5000
                }).then(() => {
                });
              });
            } else {
              this.currentAlert = null;
              this.gmapsLink = null;
            }
          });
    });

    this.socket.emit("UpdateDistressSignals", null);

    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  ResolveButton() {
    this.socket.emit("DeleteDistressSignals", null);
  }

}
