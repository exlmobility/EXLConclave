import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { App } = Plugins;
import { Platform, AlertController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { RootChecker } from './root-detection/root-detection';
import { CONFIG } from 'src/config';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'FAQ',
      url: '/faq',
      icon: 'list'
    },
    {
      title: 'About Us',
      url: '/about-us',
      icon: 'list'
    }
  

  

  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    public alertController: AlertController,
    private statusBar: StatusBar,
    private router: Router,
   

  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      if (CONFIG.checkRoot) {
        this.detectRootedDevice();
      }
     
    });
  }

  

  detectRootedDevice() {
    RootChecker.isRooted().then(isRooted => {
      if (CONFIG.mock.isRooted || isRooted) {
        RootChecker.showAlert(this.alertController);
      }
    })
  }

  onPressLogout(){
      
  }

}
