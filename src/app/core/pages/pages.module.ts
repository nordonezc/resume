import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './overview/overview.component';
import { ContactComponent } from './contact/contact.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { WorkComponent } from './work/work.component';
import { StudiesComponent } from './studies/studies.component';
import { ProjectsComponent } from './projects/projects.component';
import { HobbiesComponent } from './hobbies/hobbies.component';

@NgModule({
  declarations: [OverviewComponent, ContactComponent, WorkComponent, StudiesComponent, ProjectsComponent, HobbiesComponent],
  imports: [CommonModule, SharedModule],
  exports: [ContactComponent, OverviewComponent],
})
export class PagesModule {}
