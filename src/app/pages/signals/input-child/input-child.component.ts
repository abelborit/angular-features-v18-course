import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-input-child',
  standalone: true,
  imports: [],
  templateUrl: './input-child.component.html',
  styleUrl: './input-child.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputChildComponent {

}
