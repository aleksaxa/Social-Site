import { makeAutoObservable } from "mobx";

export default class MessageStore {
    constructor() {
        this._message = [];
        makeAutoObservable(this);
    }

    setMessage(message) {
        this._message = message;
    }
    
    get message() {
        return this._message;
    }
}