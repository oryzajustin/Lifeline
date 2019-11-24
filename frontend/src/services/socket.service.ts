import { Injectable } from "@angular/core";
import { Socket } from 'ngx-socket-io';

@Injectable()
export class SocketService {
    constructor(private socket: Socket) { }

    initialize(){
    	console.log('Initializing');
    	this.socket.connect();
    }

    emit(event: string, data: any){
        return this.socket.emit(event, data);
    }

    updateDistressSignals() {
        return this.socket
            .fromEvent<any>("UpdateDistressSignals");
    }

    updateAlertStatus() {
        return this.socket
            .fromEvent<any>("UpdateAlertStatus");
    }
}
