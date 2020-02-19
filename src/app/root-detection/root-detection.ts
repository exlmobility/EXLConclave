import { Plugins } from '@capacitor/core';

const { App } = Plugins;
import { AlertController } from '@ionic/angular';

/* 
Instalation guide:- 

npm install https://github.com/trykovyura/cordova-plugin-root-detection.git
npx cap sync

*/

declare var rootdetection;


var isRooted  = function  isRooted()  {
    return new Promise( (resolve,recect) => {
        rootdetection.isDeviceRooted((result) => {
            var isDevicesRooted = result == 1;
            resolve(isDevicesRooted );
            
        }, error => {
            resolve(false );
          console.log(error);
        });
    } )

  }
  var presentAlert  = async function  presentAlert(alertController: AlertController , msg = "You are not authorised to use this app, because your device is rooted.") {
    const alert = await alertController.create({
      header: 'Rooted Device ',

      message: msg,
      buttons: ['OK']
    });

    alert.onDidDismiss().then( () => {
        App.exitApp();
    })

    await alert.present();
  }


  export var  RootChecker = {
    isRooted : isRooted,
    showAlert: presentAlert
  }