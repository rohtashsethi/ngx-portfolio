import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NgxPortfolioComponent } from './ngx-portfolio.component';
import { IntroComponent } from './shared/portfolio/intro/intro.component';
import { SkillsComponent } from './shared/portfolio/skills/skills.component';
import { HobbiesComponent } from './shared/portfolio/hobbies/hobbies.component';
import { WorkExperienceComponent } from './shared/portfolio/work-experience/work-experience.component';
import { ProjectsComponent } from './shared/portfolio/projects/projects.component';
import { PortfolioComponent } from './shared/portfolio/portfolio.component';
import { CommonModule } from '@angular/common';
import { SkillComponent } from './shared/portfolio/skills/skill/skill.component';
import { ExperienceComponent } from './shared/portfolio/work-experience/experience/experience.component';



@NgModule({
  declarations: [
    NgxPortfolioComponent,
    IntroComponent,
    SkillsComponent,
    HobbiesComponent,
    WorkExperienceComponent,
    ProjectsComponent,
    PortfolioComponent,
    SkillComponent,
    ExperienceComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NgxPortfolioComponent
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class NgxPortfolioModule { }
