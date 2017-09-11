import {Component, OnInit, ViewChild} from "@angular/core";
import {Subject} from "rxjs/Subject";
import {LanguageChangerService} from "../language-changer.service";

@Component({
  selector: "app-press-pack",
  templateUrl: "./press-pack.component.html",
  styleUrls: ["./press-pack.component.css"]
})
export class PressPackComponent implements OnInit {
  @ViewChild('image') image;
  constructor(public languageChanger: LanguageChangerService) { }

videos = "videos";
  ngOnInit() {
    this.languageChanger.image = this.image;
  }

  togglePolish() {
    this.languageChanger.isEnglish = false;
  }

  toggleEnglish() {
    this.languageChanger.isEnglish = true;
  }
}
