import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-optimized-image',
  standalone: true,
  imports: [],
  templateUrl: './optimized-image.component.html',
  styleUrl: './optimized-image.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OptimizedImageComponent {

}
