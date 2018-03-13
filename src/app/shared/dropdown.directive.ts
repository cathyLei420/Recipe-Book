import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') openT = false;

  @HostListener('click') toggleOpen() {
    this.openT = !this.openT;
  }
  constructor() { }

}
