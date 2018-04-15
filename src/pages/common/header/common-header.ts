import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-header',
  templateUrl: 'common-header.html'
})
export class Header {
@Input() 
public HeaderConfig : any;
  constructor(public navCtrl: NavController) {

  }

}
