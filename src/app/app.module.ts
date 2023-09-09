import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './component/home/home.component';
import { TeamComponent } from './component/team/team.component';
import { CustomModule } from './custom/custom.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    CustomModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
