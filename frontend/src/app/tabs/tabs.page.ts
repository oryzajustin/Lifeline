import { Component } from '@angular/core';
import { SocketService } from './../../services/socket.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(private socket: SocketService) {}

  async ngOnInit() {
      this.socket.initialize();
  }
}
