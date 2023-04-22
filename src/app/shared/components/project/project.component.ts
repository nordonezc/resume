import { NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ExperienceInformation } from 'src/app/shared/models/project-model';

@Component({
  selector: 'shared-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent {
  @Input()
  principalImage: string | undefined;

  @Input()
  title: string | undefined;

  @Input()
  description: string | undefined;

  @Input()
  eachExperience: ExperienceInformation[] | undefined;
}
