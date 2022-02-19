import { NgModule } from '@angular/core';
import { NgxPortfolioComponent } from './ngx-portfolio.component';
import { AvatarComponent } from './avatar/avatar.component';



@NgModule({
  declarations: [
    NgxPortfolioComponent,
    AvatarComponent
  ],
  imports: [
  ],
  exports: [
    NgxPortfolioComponent
  ]
})
export class NgxPortfolioModule { }
