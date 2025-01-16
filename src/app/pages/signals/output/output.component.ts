import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-output',
  standalone: true,
  imports: [],
  templateUrl: './output.component.html',
  styleUrl: './output.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OutputComponent {

}
