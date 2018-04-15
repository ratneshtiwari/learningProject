import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Footer } from '../common/footer/common-footer';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  headerConfigObj:any;
  constructor(public navCtrl: NavController) {
    this.headerConfigObj = {
      Title:"Home"
    }
  }

}
