import { Component } from '@angular/core';
import { ExperienceInformation } from 'src/app/shared/models/project-model';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent {
  public sectionName: string = 'work';

  public principalImage: string = 'assets/img/work-2.jpg';

  public title: string = 'Work Experience';

  public description: string =
    'Participated in multiple business fields such as petroleum, education, health, and banking systems ensuring quality and improvement of data process flow; consider functional and non-functional requirements for each task raised. Enjoy understanding business necessities and propose solutions that accomplish both company goals and final consumer expectations.';
}
