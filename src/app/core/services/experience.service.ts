import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ExperienceInformation, ExperienceResponse } from 'src/app/shared/models/project-model';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  constructor(private http: HttpClient) {}

  getExperiences(): Observable<ExperienceInformation[]> {
    return this.http.get<ExperienceResponse>('assets/info/experience.json').pipe(
      map(data => data.experiences)
    );
  }
}
