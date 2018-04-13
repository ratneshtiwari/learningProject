
import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { AppAvailability } from '@ionic-native/app-availability';

@Injectable()
export class UtilityService {

    constructor(private appAvailability: AppAvailability, private platform: Platform) {

    }

    //method to check desired app avaibility
    checkAppAvailable(){

        if (this.platform.is('ios')) {
            
          } else if (this.platform.is('android')) {
            
          }
    }
}