import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { PressPackComponent } from "./press-pack/press-pack.component";
import {DropdownDirective} from "./dropdown.directive";
import {RouterModule, Routes} from "@angular/router";
import {LanguageChangerService} from "./language-changer.service";
import {Ng2SimplePageScrollModule} from "ng2-simple-page-scroll";

const appRoutes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full"},
  { path: "home", component: HomeComponent },
  { path: "press-pack", component: PressPackComponent }
  ];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PressPackComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    Ng2SimplePageScrollModule.forRoot()
  ],
  providers: [LanguageChangerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
