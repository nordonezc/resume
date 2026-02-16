import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { OverviewComponent } from './components/overview/overview.component';
import { HeroComponent } from './components/hero/hero.component';
import { ProjectComponent } from './components/project/project.component';
import { ContactComponent } from './components/contact/contact.component';
import { ConnectComponent } from './components/connect/connect.component';
import { InformationComponent } from './components/information/information.component';
import { CompoundCardsComponent } from './components/compound-cards/compound-cards.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    OverviewComponent,
    HeroComponent,
    ProjectComponent,
    ContactComponent,
    ConnectComponent,
    InformationComponent,
    CompoundCardsComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    RouterModule,
    HeaderComponent,
    FooterComponent,
    OverviewComponent,
    HeroComponent,
    ProjectComponent,
    ContactComponent,
    ConnectComponent,
    InformationComponent,
    CompoundCardsComponent,
  ],
})
export class SharedModule {}
