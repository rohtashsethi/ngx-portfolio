import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SampleButtonComponent } from './sample-button/sample-button.component';
import { SamplePortfolioComponent } from './sample-portfolio/sample-portfolio.component';

const routes: Routes = [
  { path: 'portfolio', component: SamplePortfolioComponent },
  { path: 'button', component: SampleButtonComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
