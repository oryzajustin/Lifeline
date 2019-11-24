import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Environment } from '@ionic-native/google-maps';

import { IonicStorageModule } from '@ionic/storage';

import {SocketIoModule, SocketIoConfig} from 'ngx-socket-io';
import {SocketService} from './../services/socket.service';

import { Geolocation } from '@ionic-native/geolocation/ngx';

// const config: SocketIoConfig = { url: 'https://localhost:3000', options: {}};
const config: SocketIoConfig = { url: 'https://hackwesternlifeline.appspot.com', options: {}};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, SocketIoModule.forRoot(config),
    IonicStorageModule.forRoot()],
  providers: [
    StatusBar,
    SplashScreen,
    SocketService,
    Geolocation,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}  
