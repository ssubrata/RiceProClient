import { Directive, OnInit, ElementRef,  HostBinding, HostListener, Renderer2, Renderer} from '@angular/core';

@Directive({
    selector: '[ddMousehover]'
})
export class MouseOverDirective  {


    constructor(
        private el: ElementRef,
        private render:Renderer
       ) {
          // el.nativeElement.style.backgroundColor='red'
         }

  
    @HostListener('mouseenter')
    onMouseOver() {
       this.render.setElementClass(this.el.nativeElement,'mouseOver1',true);
     this.render.setElementClass(this.el.nativeElement,'mouseOut1',false);

     //  this.el.nativeElement.style.backgroundColor='gray';

    }

    @HostListener('mouseleave')
    onMouseOut() {
     //    this.el.nativeElement.style.backgroundColor='white';
     this.render.setElementClass(this.el.nativeElement,'mouseOut1',true);
     this.render.setElementClass(this.el.nativeElement,'mouseOver1',false);

    }
   
}