import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-full',
  imports: [HeaderComponent, FooterComponent, RouterOutlet],
  templateUrl: './full.component.html',
  styleUrl: './full.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FullComponent {

}
