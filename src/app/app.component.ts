import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public baCach: any;
  userInfoList = [];
  receiveUserInfo(userInfo: any) {
    this.userInfoList = userInfo;
    console.log(this.userInfoList);
  }
}
