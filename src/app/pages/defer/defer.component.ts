import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-defer',
  standalone: true,
  imports: [],
  templateUrl: './defer.component.html',
  styleUrl: './defer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeferComponent {

}
