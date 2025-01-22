/* Angular v18 */
import { NgStyle } from '@angular/common';
import { ChangeDetectionStrategy, Component, model } from '@angular/core';

@Component({
  selector: 'app-model-inputs',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './model-inputs.component.html',
  styleUrl: './model-inputs.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModelInputsComponent {
  /* el "ngModel" era para que un valor esté relacionado de forma bidireccional, es decir, esté comunicado el HTML con el TS y el TS con el HTML */
  /* En Angular 18, el modelo reactivo introdujo el concepto de model, que es una API para manejar valores bidireccionales de manera más moderna y optimizada */
  protected checked = model(false); // lo que antes era el ngModel

  toggle() {
    this.checked.set(!this.checked());
    console.log(this.checked());
  }
}

/* Versiones anteriores: Usando [(ngModel)] para el enlace bidireccional */
/* Antes, para usar ngModel, era necesario importar el FormsModule en el módulo correspondiente. Antes de Angular 15, no existían los standalone components, por lo que el componente debía declararse en un módulo (NgModule) */
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-model-inputs',
//   templateUrl: './model-inputs.component.html',
//   styleUrls: ['./model-inputs.component.scss'],
// })
// export class ModelInputsComponent {
//   // Variable que almacena el estado del checkbox
//   public checked: boolean = false;

//   toggle() {
//     this.checked = !this.checked; // Invierte el estado
//     console.log(this.checked);
//   }
// }
