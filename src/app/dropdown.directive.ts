import {AfterViewInit, Directive, ElementRef, HostBinding, HostListener, Input, OnDestroy, OnInit} from "@angular/core";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {LanguageChangerService} from "./language-changer.service";

@Directive({
  selector: "[appDropdown]"
})
export class DropdownDirective implements OnInit{

  @Input() path: string;
  @Input() element : ElementRef;
  @HostBinding("class.open") isOpen= false;
  @HostListener("click") navigate() {
    if (this.isOpen === true) {
      this.isOpen = false;
    }else {
      this.isOpen = true;
    }

  }
  @HostListener("mouseenter") toggleOpen() {
    this.isOpen = true;
  }
  @HostListener("mouseleave") toggleClose() {
    this.isOpen = false;
  }



  ngOnInit() {

  }



  constructor(private router: Router,private route:ActivatedRoute,private ch:LanguageChangerService ) {

  }
}
