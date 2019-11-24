import { Component } from '@angular/core';

import { SocketService } from './../services/socket.service';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Environment } from '@ionic-native/google-maps/ngx';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private socket: SocketService,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }
  
  initializeApp() {
    this.platform.ready().then(() => {
	Environment.setEnv({
      'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyCsRbd3PmUnTdwns7r3UYTeeAAw8IRUSI8',
      'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyCsRbd3PmUnTdwns7r3UYTeeAAw8IRUSI8'
    });
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
