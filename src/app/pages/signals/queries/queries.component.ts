import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  viewChild,
  viewChildren,
} from '@angular/core';

@Component({
  selector: 'app-queries',
  standalone: true,
  imports: [],
  templateUrl: './queries.component.html',
  styleUrl: './queries.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QueriesComponent {
  h1 = viewChild<ElementRef<HTMLHeadingElement>>('titulo'); // es un "HTMLHeadingElement" porque es un "h1" en este caso
  h2 = viewChild.required<ElementRef<HTMLHeadingElement>>('subtitulo'); // es un "HTMLHeadingElement" porque es un "h1" en este caso
  soloLectura = viewChildren<ElementRef<HTMLHeadingElement>>('soloLectura');

  ngAfterViewInit() {
    this.h2().nativeElement.textContent = 'Nuevo valor asignado al subtitulo';

    console.log(this.h1()?.nativeElement);
    console.log(this.h2()?.nativeElement);
    console.log(this.soloLectura());
  }
}
