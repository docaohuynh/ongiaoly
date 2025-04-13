import { AsyncPipe, JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, PLATFORM_ID } from '@angular/core';
import {
  continuous,
  final,
  skipUntilSaid,
  SpeechRecognitionService,
  takeUntilSaid
} from '@ng-web-apis/speech';
import { Observable, repeat, retry } from 'rxjs';
import { QuestionJsonModel } from '../../../models/question.model';
import { LoadFromJsonService } from '../../../services';
@Component({
  selector: 'app-trinh-ha-2025-practise',
  imports: [AsyncPipe, JsonPipe],
  templateUrl: './trinh-ha-2025-practise.component.html',
  styleUrl: './trinh-ha-2025-practise.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TrinhHa2025PractiseComponent {
  private readonly recognition$ = inject(SpeechRecognitionService);
  protected readonly platformId = inject(PLATFORM_ID);
  jsonService = inject(LoadFromJsonService)
  questionJson$: Observable<QuestionJsonModel> = this.jsonService.getJsonQuestionTrinhHa2025();
  stream$?: Observable<any>
  ngOnInit(): void {
    this.stream$ = this.recognition$.pipe(
      retry(),
      repeat(),
      takeUntilSaid('Thank you'),
      repeat(),
      final(),
      continuous(),
    );

    
  }
}
