import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarElementComponent } from './navbar-element/navbar-element.component';
import { NavbarElementsComponent } from './navbar-elements/navbar-elements.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbarElementsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
