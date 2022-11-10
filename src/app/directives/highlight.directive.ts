import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @HostListener('mouseenter') onMouseEnter () {
                               //apartir de aca pueden usarse los elemntos html
    this.element.nativeElement.style.backgroundColor ='red';
  }
  @HostListener('mouseleave') onMouseLeave () {
    this.element.nativeElement.style.backgroundColor ='';
  }
  constructor(
    private element: ElementRef
  ) {
    //                            //apartir de aca pueden usarse los elemntos html
    // this.element.nativeElement.style.backgroundColor = 'red';
   }

}
