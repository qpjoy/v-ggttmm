import { Component, ContentChild, TemplateRef, Directive } from '@angular/core';

@Directive({
  selector: '[position]'
})
export class PositionDirective {
  constructor(public templateRef: TemplateRef<any>) {}
}

@Directive({
  selector: '[message]'
})
export class MessageDirective {
  constructor(public templateRef: TemplateRef<any>) {}
}

/**
 * Generated class for the XyAliasComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'xy-alias',
  templateUrl: 'xy-alias.html'
})
export class XyAliasComponent {

  text: string;

  constructor() {
    console.log('Hello XyAliasComponent Component');
    this.text = 'Hello World';
  }


  @ContentChild(MessageDirective) messageTemplate;
  @ContentChild(PositionDirective) pointerTemplate;
  state = { x: 0, y: 0 }

  handleMouseMove(event) {
    this.state = {
      x: event.clientX,
      y: event.clientY
    }
  }

}
