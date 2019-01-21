import { BehaviorSubject, Observable } from 'rxjs';

export abstract class StateService<T> {
    protected state: BehaviorSubject<T> = new BehaviorSubject<T>(null);
    public currentState: Observable<T> = this.state.asObservable();
    public setState(state: T){
        this.state.next(state);
    }
}