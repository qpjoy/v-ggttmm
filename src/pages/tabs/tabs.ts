import { Component, ViewChild } from '@angular/core';
import { Tabs } from 'ionic-angular';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import {RoutePage} from '../route/route';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  @ViewChild('navTabs') tabRef: Tabs;

  tabList: Array<{ title: string, icon: string, component: any }>;

  route = RoutePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  // ionViewDidEnter() {
  //   this.tabRef.select(2);
  // }

  constructor() {
    this.tabList = [
      { title: 'Route', icon: 'GTM_icon_Route-outline', component: RoutePage },
      { title: 'Home', icon: 'GTM_icon_Homepage-outline', component: HomePage },
    ];

    // this.platform.ready().then(() => {
    //   this.nativeStorage.getItem('deviceInfo').then((dt) => {
    //     console.log('get stored device info successfully', dt);
    //   })
    // });
  }

  tabClick(page) {
    console.log('this is tab index - - -',page);
  }
}

