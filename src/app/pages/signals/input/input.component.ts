import { ChangeDetectionStrategy, Component } from '@angular/core';
import { InputChildComponent } from '../input-child/input-child.component';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [InputChildComponent],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent {}
