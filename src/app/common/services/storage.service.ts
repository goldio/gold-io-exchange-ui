import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { User } from "../models/user.model";
import { UserWallet } from '../models';

Injectable()
export class StorageService {

    private userWallet = new BehaviorSubject<UserWallet>(new UserWallet());
    public currentUserWallet = this.userWallet.asObservable()

    // private user = new BehaviorSubject<number>(null);
    // public currentUser = this.user.asObservable()

    constructor(){}

    public changeUserWallet(userWallet: UserWallet) {
        this.userWallet.next(userWallet);
    }

    // public changeUser(userId: number) {
    //     this.user.next(userId);
    // }

}