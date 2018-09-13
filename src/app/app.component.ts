import {Component} from '@angular/core';
import {Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {Storage} from '@ionic/storage';

import {TabsPage} from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = TabsPage;

  deviceBaseInfo = {
    isAndroid: false,
    isIOS: false,
    isMobile: false,
    isTabletOrPad: false
  }

  constructor(public platform: Platform,
              public statusBar: StatusBar,
              public splashScreen: SplashScreen,
              public storage: Storage) {
    platform.ready().then(() => {
      console.log(platform.platforms(), 'this is platforms');
      this.deviceBaseInfo.isAndroid = this.platform.is('android');
      this.deviceBaseInfo.isIOS = this.platform.is('ios');
      this.deviceBaseInfo.isMobile = this.platform.is('mobile');
      this.deviceBaseInfo.isTabletOrPad = (this.platform.is('tablet') || this.platform.is('ipad'));

      let padParams = {
        statusBar: '#ffffff'
      }

      let phoneParams = {
        statusBar: 'black'
      }


      if (this.deviceBaseInfo.isTabletOrPad) {
        this.statusBar.styleDefault();
        this.statusBar.overlaysWebView(false);
        this.statusBar.backgroundColorByHexString(padParams.statusBar);
      } else {
        this.statusBar.styleDefault();
        this.statusBar.overlaysWebView(false);
        this.statusBar.backgroundColorByHexString(phoneParams.statusBar);
      }
      this.splashScreen.hide();

      // console.log(this.platform.is('android'), this.platform.is('ios'), this.platform.is('mobile'), this.platform.is('tablet'), this.platform.platforms(), this.platform.versions());

      storage.set('deviceBaseInfo', JSON.stringify(this.deviceBaseInfo));
    });
  }
}
