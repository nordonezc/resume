import { SafeUrl } from '@angular/platform-browser';

export interface ExperienceInformation {
  image: string;
  title: string;
  description: string[];
  url?: SafeUrl;
}

export interface ExperienceResponse {
  experiences: ExperienceInformation[];
}
