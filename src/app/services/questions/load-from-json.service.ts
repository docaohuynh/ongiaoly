import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadFromJsonService {
  http = inject(HttpClient)
  getJsonQuestionTrinhHa2025(): Observable<any> {
    return this.http.get<any>('question/trinh-ha-2025.json');
  }
}
