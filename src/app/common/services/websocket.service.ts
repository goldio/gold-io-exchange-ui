import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class WebsocketService {
    private depthStream: WebSocket = new WebSocket(`wss://stream.binance.com:9443/ws/ethbtc@depth`);
    private _depthStreamMessage: BehaviorSubject<MessageEvent> = new BehaviorSubject<MessageEvent>(null);

    private localDepthStream: WebSocket = new WebSocket(`ws://localhost:5000/notifications`);
    private _localDepthStreamMessage: BehaviorSubject<MessageEvent> = new BehaviorSubject<MessageEvent>(null);
    
    public get depthStreamMessage(): Observable<MessageEvent> {
        return this._depthStreamMessage.asObservable();
    }

    public get localDepthStreamMessage(): Observable<MessageEvent> {
        return this._localDepthStreamMessage.asObservable();
    }

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

    public openLocalDepthStream(): void {
        this.localDepthStream.close();
        this.localDepthStream = new WebSocket(`ws://localhost:5000/notifications`);

        this.localDepthStream.onopen = () => {
            this.localDepthStream.onmessage = (msg) => {
                this._localDepthStreamMessage.next(msg);
            }
        }
    }

    public closeDepthStream(): void {
        this.depthStream.close();
    }

    public closeLocalDepthStream(): void {
        this.localDepthStream.close();
    }
}