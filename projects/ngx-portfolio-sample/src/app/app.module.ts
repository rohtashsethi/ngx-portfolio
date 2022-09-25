import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPortfolioModule } from 'projects/ngx-portfolio/src/lib/ngx-portfolio.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SamplePortfolioComponent } from './sample-portfolio/sample-portfolio.component';
import { SampleButtonComponent } from './sample-button/sample-button.component';
import { ButtonModule } from 'projects/ngx-portfolio/src/lib/shared/button/button.module';

@NgModule({
  declarations: [
    AppComponent,
    SamplePortfolioComponent,
    SampleButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPortfolioModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
