import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class WebsocketService {
    private depthStream: WebSocket = new WebSocket(`wss://stream.binance.com:9443/ws/ethbtc@depth`);
    private _depthStreamMessage: BehaviorSubject<MessageEvent> = new BehaviorSubject<MessageEvent>(null);
    public depthStreamMessage: Observable<MessageEvent> = this._depthStreamMessage.asObservable();

    constructor() {
        this.depthStream.onopen = () => {
            this.depthStream.onmessage = (msg) => {
                this._depthStreamMessage.next(msg);
            }
        }
    }

    public openDepthStream(symbol: string): void {
        this.depthStream.close();

        this.depthStream = new WebSocket(`wss://stream.binance.com:9443/ws/${symbol.toLowerCase()}@depth`);
        
        this.depthStream.onopen = () => {
            this.depthStream.onmessage = (msg) => {
                this._depthStreamMessage.next(msg);
            }
        }
    }
}