import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-output-child',
  standalone: true,
  imports: [],
  templateUrl: './output-child.component.html',
  styleUrl: './output-child.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OutputChildComponent {

}
