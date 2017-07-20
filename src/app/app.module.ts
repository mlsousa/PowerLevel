import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HumanComponent } from './human/human.component';
import { SaiyanComponent } from './saiyan/saiyan.component';
import { SuperSaiyonThreeComponent } from './super-saiyon-three/super-saiyon-three.component';
import { SuperSaiyonComponent } from './super-saiyon/super-saiyon.component';
import { SuperSaiyonTwoComponent } from './super-saiyon-two/super-saiyon-two.component';
import { SuperSaiyonFourComponent } from './super-saiyon-four/super-saiyon-four.component';

@NgModule({
  declarations: [
    AppComponent,
    HumanComponent,
    SaiyanComponent,
    SuperSaiyonThreeComponent,
    SuperSaiyonComponent,
    SuperSaiyonTwoComponent,
    SuperSaiyonFourComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
