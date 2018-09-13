import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CustomHeaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: '[custom_header]',
  templateUrl: 'custom-header.html'
})
export class CustomHeaderComponent {


  @Input('pageTitle') pageTitle;
  @Input('backWord') backWord;
  @Input('optWord') optWord;
  @Input() custom_header;

  @Output()
  goBack = new EventEmitter();

  text: string;
  displayBackBtn: Boolean = false;

  constructor( public navCtrl: NavController,
               ) {
  // private storage: Storage
    console.log('Hello GtmHeaderComponent Component');

    // storage.get('deviceBaseInfo').then((val) => {
    //   let deviceBaseInfo = JSON.parse(val);
    //   let isMobile = deviceBaseInfo['isMobile'];
    //   let isTabletOrPad = deviceBaseInfo['isTabletOrPad'];
    //   console.log('Your age is - --- -', val);
    // });
  }

  ionViewDidEnter() {
    this.displayBackBtn = true;
    // console.log(this.customHeader, 'customHeader');
  }

  goBackHandler() {
    console.log('hhh h h h ')
    this.goBack.emit({});
  }

}
