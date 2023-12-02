import { makeAutoObservable } from "mobx";

export default class UserStore {
    constructor() {
        this._isAuth = false;
        this._users = [];
        this._selectedUser = {};
        this._mainUser = {};
        
        makeAutoObservable(this);
    }

    setIsAuth(bool) {
        this._isAuth = bool
    }
    setUsers(users) {
        this._users = users
    }
    setMainUser(mainUser) {
        this._mainUser = mainUser
    }
    setSelectedUser(selectedUser) {
        this._selectedUser = selectedUser
    }
    


    get isAuth() {
        return this._isAuth
    }
    get users() {
        return this._users
    }
    get mainUser() {
        return this._mainUser
    }
    get selectedUser() {
        return this._selectedUser
    }
    

}