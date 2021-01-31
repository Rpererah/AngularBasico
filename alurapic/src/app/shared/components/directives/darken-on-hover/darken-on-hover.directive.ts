import { Directive, ElementRef, HostListener, Input, Renderer } from '@angular/core';

@Directive({
    selector:'[apDarkOnHover]'
})
export class DarkOnHoverDirective{

    @Input() brightness='85%';

    constructor(
    private el:ElementRef,
    private render:Renderer
        ){}

    @HostListener('mouseover')
    darkenOn(){
        this.render.setElementStyle(this.el.nativeElement,'filter',`brightness(${this.brightness})`);
    }

    @HostListener('mouseleave')
    darkenOff(){
        this.render.setElementStyle(this.el.nativeElement,'filter','brightness(100%)');
    
    }
}