import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { LoadFromJsonService } from '../../services';
import { Observable } from 'rxjs';
import { QuestionJsonModel } from '../../models/question.model';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { QuestionComponent } from '../components';
@Component({
  selector: 'app-trinh-ha-2025',
  imports: [AsyncPipe, QuestionComponent],
  templateUrl: './trinh-ha-2025.component.html',
  styleUrl: './trinh-ha-2025.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TrinhHa2025Component implements OnInit {
  jsonService = inject(LoadFromJsonService)
  questionJson$: Observable<QuestionJsonModel> = this.jsonService.getJsonQuestionTrinhHa2025();
  ngOnInit(): void {
  }
}
