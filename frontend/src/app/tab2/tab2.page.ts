import { Component , OnInit} from '@angular/core';

import {
  ToastController,
  Platform,
  LoadingController
} from '@ionic/angular';

import { SocketService } from './../../services/socket.service';


import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  location: any = {};
  alerting: boolean = false;
  socketId: any;
  helperCount: number = 0;

  constructor(private socket: SocketService, private platform: Platform, private geolocation: Geolocation) {}

  async ngOnInit() {

    // Since ngOnInit() is executed before `deviceready` event,
    // you have to wait the event.
    await this.platform.ready();
    this.geolocation.getCurrentPosition({ enableHighAccuracy: true }).then((resp) => {
      this.location = {'lat': resp.coords.latitude, 'lng': resp.coords.longitude};
      console.log(this.location);
    });

    this.socket.updateDistressSignals()
        .subscribe(signals => {
          console.log("New Update");
          console.log(signals);
          this.alerting = false;
          if (signals.length > 0) {
          	for (var i = 0; i < signals.length; i++) {
		      if (signals[i]['id'] === this.socketId) {
		      	this.alerting = true;
		        break;
		      }
		    }
          }
    });

    this.socket.updateAlertStatus()
        .subscribe((data) => {
  			this.socketId = data.sessionId;
  			this.alerting = data.alerting;
  			this.helperCount = data.connectCounter;
  		});

  }

  ionViewDidEnter() {
  	this.socket.updateDistressSignals();
  }

  GetHelp(){
  	this.platform.ready();

  	this.geolocation.getCurrentPosition({
  		enableHighAccuracy: true
  	}).then((resp) => {
  		this.location = {'coords': {'lat': resp.coords.latitude, 'lng': resp.coords.longitude}};
  		console.log(this.location);
  		this.socket.emit("CreateDistressSignal", this.location);
  		this.socket.emit("ToggleTwilio", null);
  	})
  }
}
