import { Component, ViewChild } from '@angular/core';
import { Platform  } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage} from '../pages/login/login';
import { TouchProvider } from '../providers/touch';
import { HomePage } from '../pages/home/home';
import { AuthService } from '../providers/auth';
import { UtilityService } from '../providers/utility';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
   public rootPage: any = LoginPage;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,private Touch:TouchProvider,  private auth: AuthService,
    private utils:UtilityService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      this.utils.saveSecureObject();
      splashScreen.hide();
    });
    this.Touch.verifyFinger().then((res) => {
      if(res){
        this.rootPage = HomePage;
      }
    });
  }
}
