import {Component, HostListener, Input, OnDestroy, OnInit} from "@angular/core";
import {ActivatedRoute, NavigationEnd, Params, Router} from "@angular/router";
import {LanguageChangerService} from "../language-changer.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit, OnDestroy{
  sub;
  isHome ;
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  constructor(private router: Router,private route:ActivatedRoute, public changer: LanguageChangerService) {

  }

  @Input() scrollPage ;

  ngOnInit() {
    this.sub = this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      if (this.route.firstChild.snapshot.url.toString() === "home") {
        this.isHome = true;
      }else {
        this.isHome = false;
      }
    });

  }


  clickHome(){
  this.changer.isHome = true;
  this.isIn = false;
    this.router.navigate(["/home"]);
  }
  clickPress(){
    this.changer.isHome = false;
    this.isIn = false;
    this.router.navigate(["/press-pack"]);
  }

  doScroll() {

    if (!this.scrollPage) {
      return;
    }
    try {
      const elements = document.getElementById(this.scrollPage);
      if(elements != null)
        elements.scrollIntoView();

    }
    finally {
      this.scrollPage = null;
    }
  }
  isIn = false;
  toggleState() {
    const bool = this.isIn;
    this.isIn = bool === false ? true : false;

  }

  hrefToPath(path: string){
   this.scrollPage = this.changer.getId(path);
    this.router.navigate(["press-pack"], {fragment: this.scrollPage});
  }


}
