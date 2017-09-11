import {ElementRef, Injectable, OnInit} from "@angular/core";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Injectable()
export class LanguageChangerService implements OnInit{

  image : ElementRef;
  factsheet= "Factsheet";
  description= "Description";
  aboutMe= "About Me";
  videos= "Trailer";
  images = "Images";
  logo = "Logo";
  downloads= "Downloads";
  contact= "Contact";

  factsheetId= "factsheet";
  descriptionId= "description";
  aboutMeId= "aboutMe";
  videosId= "videos";
  imagesId = "images";
  logoId = "logo";
  downloadsId= "downloads";
  contactId= "contact";

  factsheetPl = "Dane podstawowe";
  descriptionPl = "Opis gry";
  aboutMePl = "O mnie";
  videosPl = "Trailer";
  imagesPl = "Obrazy";
  logoPl = "Logo";
  downloadsPl = "Do pobrania";
  contactPl = "Kontakt";

  factsheetPlId = "danePodstawowe";
  descriptionPlId = "opisGry";
  aboutMePlId = "oMnie";
  videosPlId = "filmy";
  imagesPlId = "obrazy";
  logoPlId = "logo";
  downloadsPlId = "downloads";
  contactPlId = "contact";

  isEnglish = true;
  isHome = true;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
  }

  getLabelName(name: string) {
    if (this.isEnglish === true) {
      return name;
    }else {
      switch(name) {
        case this.factsheet:
          return this.factsheetPl;
        case this.description:
          return this.descriptionPl;
        case this.aboutMe:
          return this.aboutMePl;
        case this.videos:
          return this.videosPl;
        case this.images:
          return this.imagesPl;
        case this.logo:
          return this.logoPl;
        case this.downloads:
          return this.downloadsPl;
        case this.contact:
          return this.contactPl;
      }
    }
  }
  getId(id: string) {
    if (this.isEnglish === true) {
      return id;
    }else {
      switch(id) {
        case this.factsheetId:
          return this.factsheetPlId;
        case this.descriptionId:
          return this.descriptionPlId;
        case this.aboutMeId:
          return this.aboutMePlId;
        case this.videosId:
          return this.videosPlId;
        case this.imagesId:
          return this.imagesPlId;
        case this.logoId:
          return this.logoPlId;
        case this.downloadsId:
          return this.downloadsPlId;
        case this.contactId:
          return this.contactPlId;
      }
    }
  }
  }
