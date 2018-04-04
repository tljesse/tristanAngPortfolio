import { Directive, ElementRef, HostListener, Input } from '@angular/core';

declare var require: any;
const VanillaTilt = require('vanilla-tilt');

@Directive({
  selector: '[data-tilt]'
})
export class ParallaxDirective {
  constructor(private el: ElementRef) {
    VanillaTilt.init(el.nativeElement, {
      max: 25,
      speed: 400
    });
  }
}