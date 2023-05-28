import { Directive, ElementRef, Renderer2 } from '@angular/core';
import { environment } from 'src/environments/environment';

@Directive({ selector: '[data-test]' })
export class DataTestDirective {
  constructor(private ref: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    if (!environment.production) return;

    this.renderer.removeAttribute(this.ref.nativeElement, 'data-test');
  }
}
