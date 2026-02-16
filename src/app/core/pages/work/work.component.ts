import { Component } from '@angular/core';
import { ExperienceInformation } from 'src/app/shared/models/project-model';
import { ExperienceService } from '../../services/experience.service';

@Component({
  selector: 'shared-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
})
export class WorkComponent {
  public sectionName: string = 'work';

  public principalImage: string = 'assets/img/work-2.jpg';

  public title: string = 'Work Experience';

  public description: string =
    'Participated in multiple business fields such as petroleum, education, health, and banking systems ensuring quality and improvement of data process flow; consider functional and non-functional requirements for each task raised. Enjoy understanding business necessities and propose solutions that accomplish both company goals and final consumer expectations.';

  public eachExperience: ExperienceInformation[] = [];

  constructor(private experienceService: ExperienceService) {}

  ngOnInit(): void {
    this.experienceService.getExperiences().subscribe(experiences => {
      this.eachExperience = experiences;
    });
  }
}
