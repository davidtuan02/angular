import { Injectable } from "@angular/core";
import { UserInfo } from "./UserInfo";

@Injectable({
    providedIn: 'root'
})

export class ShareService {
    protected userInfoList: Array<UserInfo> = [];
    protected chartList = [
        {
            name: '1-10',
            color: 'red',
            count: 0,
            percent: ''
        },
        {
            name: '11-20',
            color: 'yellow',
            count: 0,
            percent: ''
        },
        {
            name: '21-30',
            color: 'green',
            count: 0,
            percent: ''
        },
        {
            name: '31-40',
            color: 'blue',
            count: 0,
            percent: ''
        },
        {
            name: '41-50',
            color: 'pink',
            count: 0,
            percent: ''
        },
        {
            name: '51+',
            color: 'grey',
            count: 0,
            percent: ''
        }
    ]

    constructor() {}
    ngOnInit() {}

    public getUserInfoList(): Array<UserInfo> {
        return this.userInfoList;
    }

    public getChartList() {
        return this.chartList;
    }

    public setUserInfoListById(userInfo: UserInfo, index: number) {
        this.userInfoList[index] = userInfo;
    }

    public setUserInfoList(userInfoList: UserInfo[]) {
        this.userInfoList = userInfoList;
    }

    // public setUserInfoById(userInfo: UserInfo, id: number) {
    //     this.userInfoList[id] = userInfo;
    // }

    public deleteUserInfoById(id: number) {
        this.userInfoList.splice(id, 1);
    }

}