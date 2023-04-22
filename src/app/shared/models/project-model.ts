import { SafeUrl } from '@angular/platform-browser';

export interface ExperienceInformation {
  imageExperience: string;
  titleExperience: string;
  descriptionExperience: string[];
  urlExperience?: SafeUrl;
}
