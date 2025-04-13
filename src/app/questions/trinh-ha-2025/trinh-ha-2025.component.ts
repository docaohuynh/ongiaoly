import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { LoadFromJsonService } from '../../services';
@Component({
  selector: 'app-trinh-ha-2025',
  imports: [],
  templateUrl: './trinh-ha-2025.component.html',
  styleUrl: './trinh-ha-2025.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TrinhHa2025Component implements OnInit {
  jsonService = inject(LoadFromJsonService)
  ngOnInit(): void {
    this.jsonService.getJsonQuestionTrinhHa2025().subscribe(data => {
      console.log(data);
    });
  }
}
