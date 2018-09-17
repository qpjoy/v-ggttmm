import { NgModule } from '@angular/core';
import { IonicModule } from "ionic-angular";

import { CustomHeaderComponent } from './custom-header/custom-header';
// import { XyAliasComponent, MessageDirective, PositionDirective  } from './xy-alias/xy-alias';


@NgModule({
	declarations: [
	  CustomHeaderComponent,
    // XyAliasComponent,
    // MessageDirective,
    // PositionDirective
  ],
	imports: [IonicModule],
	exports: [CustomHeaderComponent,
    // XyAliasComponent
  ]
})
export class ComponentsModule {}
