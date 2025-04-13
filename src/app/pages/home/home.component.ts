import { ChangeDetectionStrategy, Component } from '@angular/core';
import {MatChipsModule} from '@angular/material/chips';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [MatChipsModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {

}
