
import { Injectable } from '@angular/core';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio';

/*
Generated class for the TouchProvider provider.

See https://angular.io/guide/dependency-injection for more info on providers
and Angular DI.
*/
@Injectable()
export class TouchProvider {

  constructor(private faio: FingerprintAIO) {
    console.log('Hello TouchProvider Provider');
  }
  verifyFinger() {
    return new Promise((resolve, reject) =>{
    this.faio.show({
      clientId: 'Fingerprint-Demo',
      clientSecret: 'password', //Only necessary for Android
      disableBackup: true,  //Only for Android(optional)
      localizedFallbackTitle: 'Use Pin', //Only for iOS
      localizedReason: 'Please authenticate' //Only for iOS
    })
      .then((result: any) => resolve(true))
      .catch((error: any) => console.log(error));
  });
}
}
