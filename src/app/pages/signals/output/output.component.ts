import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { OutputChildComponent } from '../output-child/output-child.component';

@Component({
  selector: 'app-output',
  standalone: true,
  imports: [
    MatBadgeModule,
    MatButtonModule,
    MatIconModule,
    OutputChildComponent,
  ],
  templateUrl: './output.component.html',
  styleUrl: './output.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OutputComponent {
  badge = signal<number>(0);

  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

  handleSumar() {
    this.badge.update((value: number) => value + 1);
  }

  handleDelete(value: number) {
    /* aquí está el valor emitido desde el hijo que sería el valor de 0 */
    // console.log(value);

    this.badge.update(() => value);
  }
}
