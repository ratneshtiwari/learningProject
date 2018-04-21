
import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { AppAvailability } from '@ionic-native/app-availability';
import { SecureStorage, SecureStorageObject } from '@ionic-native/secure-storage';

@Injectable()
export class UtilityService {
    isFirstRun:boolean = false
    constructor(private appAvailability: AppAvailability, private platform: Platform, private secureStorage: SecureStorage) {

    }

    //method to check desired app avaibility
    checkAppAvailable() {

        if (this.platform.is('ios')) {

        } else if (this.platform.is('android')) {

        }
    }
    saveSecureObject() {
        this.secureStorage.create('STORED_VALUE')
            .then((storage: SecureStorageObject) => {

                storage.get('APP_INSTALLED')
                    .then(
                        data => {
                            this.isFirstRun = false
                        },
                        error => {
                            storage.set('APP_INSTALLED', 'INSTALLED')
                        }
                    );

                // storage.set('APP_INSTALLED', 'INSTALLED')
                //     .then(
                //         data => console.log(data),
                //         error => console.log(error)
                //     );

                // storage.remove('key')
                //     .then(
                //         data => console.log(data),
                //         error => console.log(error)
                //     );

            });
    }
}