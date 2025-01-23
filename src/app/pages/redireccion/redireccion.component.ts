import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-redireccion',
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './redireccion.component.html',
  styleUrl: './redireccion.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RedireccionComponent {
  private _router = inject(Router);

  navigateTo(id: number): void {
    this._router.navigate([`/detalle-anterior`, id]);
  }
}
