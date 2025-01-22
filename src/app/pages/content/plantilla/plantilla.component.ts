import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-plantilla',
  standalone: true,
  imports: [],
  templateUrl: './plantilla.component.html',
  styleUrl: './plantilla.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlantillaComponent {}
