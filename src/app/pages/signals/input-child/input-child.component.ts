import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  signal,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-input-child',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './input-child.component.html',
  styleUrl: './input-child.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputChildComponent {
  nombre = input<string>();
  edad = input(10, { alias: 'age' });
  edadEn5Anios = computed(() => this.edad() + 5);

  apellido = input.required<string>();

  deshabilitado = input(false, {
    transform: (value: boolean | string) =>
      typeof value === 'string' ? value === '' : value,
  });

  texto = signal<string>(
    `Conocido en el mundo de la tecnología por su habilidad para transformar ideas complejas en soluciones simples y elegantes. Desde niño, su curiosidad por las computadoras lo llevó a desarmar y armar cada dispositivo que encontraba. A los quince años, ya había creado su primera aplicación móvil, una herramienta que ayudaba a sus compañeros de escuela a organizar sus tareas y proyectos.`
  );
}
