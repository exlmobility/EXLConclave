import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy, IonRouterOutlet } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RegisterMobileModalPage } from './modals/register-mobile-modal/register-mobile-modal.page';
import { RegisterMobileModalPageModule } from './modals/register-mobile-modal/register-mobile-modal.module';
import { HTTP } from '@ionic-native/http/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [RegisterMobileModalPage],
  imports: [
    BrowserModule,
    IonicModule.forRoot({
      hardwareBackButton: true
    }),
    AppRoutingModule,
    RegisterMobileModalPageModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HTTP,

    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
