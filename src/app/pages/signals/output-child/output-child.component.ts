import { ChangeDetectionStrategy, Component, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-output-child',
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './output-child.component.html',
  styleUrl: './output-child.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OutputChildComponent {
  /* darse cuenta que el "sumar" tiene el output que manejará el tipo "void" es por eso que en -- (sumar)="handleSumar()" -- de "output.component.html" no se coloca el "$event" en cambio en el de "delete" estará manejando un tipo "number" porque se le está pasando "0" para que siempre se reinicie a "0" */
  sumar = output<void>();
  delete = output<number>();

  enviarSuma() {
    /* está emitiendo un valor void */
    this.sumar.emit();
  }

  reset() {
    /* está emitiendo un valor 0 */
    this.delete.emit(0);
  }
}
