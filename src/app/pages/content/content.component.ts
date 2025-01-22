import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PlantillaComponent } from './plantilla/plantilla.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [PlantillaComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentComponent {

}
