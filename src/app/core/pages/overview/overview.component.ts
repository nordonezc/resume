import { Component } from '@angular/core';
import { ExperienceInformation } from 'src/app/shared/models/project-model';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent {
  public principalImage: string = 'assets/img/work-2.jpg';

  public title: string = 'Work Experience';

  public description: string =
    'Participated in multiple business fields such as petroleum, education, health, and banking systems ensuring quality and improvement of data process flow; consider functional and non-functional requirements for each task raised. Enjoy understanding business necessities and propose solutions that accomplish both company goals and final consumer expectations.';

  public eachExperience: ExperienceInformation[] = [
    {
      imageExperience: 'assets/img/work-6.png',
      titleExperience: 'Perficient',
      descriptionExperience: [
        'Enhanced automated documentation tool.',
        'Analyzed bugs root cause that did not accomplish security standards.',
        'Extended data sent through gRPC and REST protocol.',
      ],
    },
    {
      imageExperience: 'assets/img/work-5.png',
      titleExperience: 'Blackboard Inc.',
      descriptionExperience: [
        'Identified bugs in monolith architecture to support the principal business applications.',
        'Motivated colleagues to learn skills that enhance personal and client goals.',
      ],
    },
    {
      imageExperience: 'assets/img/work-4.jpg',
      titleExperience: 'Pay U',
      descriptionExperience: [
        'Investigated enterprise integration patterns to accelerate the payment process.',
        'Informed problems and reached the solution by understanding internal business flow.',
      ],
    },
    {
      imageExperience: 'assets/img/work-3.png',
      titleExperience: 'Banco de Bogotá',
      descriptionExperience: [
        "Coordinated and mentored the development team to accomplish the client's necessities on time.",
        'Pioneered the implementation of E2E Tests and enhanced team productivity through agile practices.',
        'Clarified business requirements to implement successfully new features.',
      ],
    },
    {
      imageExperience: 'assets/img/work-1.png',
      titleExperience: 'Sysware-Ingeniería S.A.S.',
      descriptionExperience: [
        'Orchestrated all the SOAP services exposed by the different information systems of the client.',
        'Design and develop the enterprise data bus structure to redirect information among systems.',
        "Unified repeated data and stimulated the client's knowledge about the necessities of other areas.",
      ],
    },
  ];
}
