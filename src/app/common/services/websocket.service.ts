import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from 'rxjs';
import { SocketJSON } from '../models';
import { Pair } from 'src/app/index/models/pair.model';

@Injectable()
export class WebsocketService {
    /* private depthStream: WebSocket = new WebSocket(`wss://stream.binance.com:9443/ws/ethbtc@depth`);
    private _depthStreamMessage: BehaviorSubject<MessageEvent> = new BehaviorSubject<MessageEvent>(null); */

    private channel: WebSocket = new WebSocket(`ws://188.42.174.122:5000/notifications`);
    private _channelMessage: BehaviorSubject<MessageEvent> = new BehaviorSubject<MessageEvent>(null);
    
    /* public get depthStreamMessage(): Observable<MessageEvent> {
        return this._depthStreamMessage.asObservable();
    } */

    public get channelMessage(): Observable<MessageEvent> {
        return this._channelMessage.asObservable();
    }

    constructor() {
        /* this.depthStream.onopen = () => {
            this.depthStream.onmessage = (msg) => {
                this._depthStreamMessage.next(msg);
            }
        } */
    }

    /* public openDepthStream(symbol: string): void {
        this.depthStream.close();
        this.depthStream = new WebSocket(`wss://stream.binance.com:9443/ws/${symbol.toLowerCase()}@depth`);
        
        this.depthStream.onopen = () => {
            this.depthStream.onmessage = (msg) => {
                this._depthStreamMessage.next(msg);
            }
        }
    } */

    public openChannel(pair: Pair): void {
        this.channel.close();
        this.channel = new WebSocket(`ws://188.42.174.122:5000/notifications`);

        this.channel.onopen = () => {
            this.channel.onmessage = (msg) => {
                this._channelMessage.next(msg);
            }

            const message = new SocketJSON();
            message.type = "orderBook";
            message.pair = pair.symbol;

            this.channel.send(JSON.stringify(message));
        }
    }

    /* public closeDepthStream(): void {
        this.depthStream.close();
    } */

    public closeChannel(): void {
        this.channel.close();
    }
}