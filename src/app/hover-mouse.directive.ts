import { Directive, Output, EventEmitter, HostListener} from '@angular/core';

@Directive({
  selector: '[appHoverMouse]'
})
export class HoverMouseDirective {

  @Output() mouseEvent = new EventEmitter<boolean>();
  @HostListener("mouseenter") mouseover(event: Event) {
    this.mouseEvent.emit(true);
  }

  @HostListener("click") mouseLeave(event: Event) {
    this.mouseEvent.emit(false);
  }

  constructor() { }

}
