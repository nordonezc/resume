import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './overview/overview.component';
import { ContactComponent } from './contact/contact.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [OverviewComponent, ContactComponent],
  imports: [CommonModule, SharedModule],
  exports: [ContactComponent, OverviewComponent],
})
export class PagesModule {}
