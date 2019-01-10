import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class WebsocketService {
    private pairStream: WebSocket = new WebSocket(`wss://stream.binance.com:9443/ws/ethbtc@trade`);
    private _pairStreamMessage: BehaviorSubject<MessageEvent> = new BehaviorSubject<MessageEvent>(null);
    public pairStreamMessage: Observable<MessageEvent> = this._pairStreamMessage.asObservable();

    constructor() {
        this.pairStream.onopen = () => {
            this.pairStream.onmessage = (msg) => {
                this._pairStreamMessage.next(msg);
            }
        }
    }
}