import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { QuestionModel } from '../../../models/question.model';

@Component({
  selector: 'app-question',
  imports: [],
  templateUrl: './question.component.html',
  styleUrl: './question.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionComponent {
  @Input() question?: QuestionModel
}
