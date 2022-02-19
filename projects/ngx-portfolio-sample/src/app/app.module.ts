import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPortfolioModule } from 'ngx-portfolio';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPortfolioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
