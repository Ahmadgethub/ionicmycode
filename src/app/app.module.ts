import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Code1Page } from '../pages/code1/code1';
import { Code2Page } from '../pages/code2/code2';
import { Code3Page } from '../pages/code3/code3';
import { Code4Page } from '../pages/code4/code4';
import { Code5Page } from '../pages/code5/code5';
import { Code6Page } from '../pages/code6/code6';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    Code1Page,
    Code2Page,
    Code3Page,
    Code4Page,
    Code5Page,
    Code6Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    Code1Page,
    Code2Page,
    Code3Page,
    Code4Page,
    Code5Page,
    Code6Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
