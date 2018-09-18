import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

import { Code1Page } from '../code1/code1';
import { Code2Page } from '../code2/code2';
// import { Code3Page } from '../code3/code3';
// import { Code4Page } from '../code4/code4';
// import { Code5Page } from '../code5/code5';
// import { Code6Page } from '../code6/code6';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  // tab2Root = AboutPage;
  tab2Root = Code1Page;
  tab3Root = Code2Page;
  tab4Root = ContactPage;

  constructor() {

  }
}
