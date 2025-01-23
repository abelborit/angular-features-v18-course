import { CommonModule, NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgClass],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormsComponent {
  contactForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  enviar(event: Event) {
    event.preventDefault();

    /* forma 1 */
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
    } else {
      this.contactForm.markAllAsTouched();
      console.error('Formulario inválido');
    }

    /* forma 2 */
    // if (this.contactForm.valid) console.log(this.contactForm.value);
    // else {
    //   this.contactForm.markAllAsTouched();
    //   console.error('Formulario inválido');
    // }
  }

  ngOnInit(): void {
    /* Eventos de todo el formulario: */
    this.contactForm.events.subscribe((event) => {
      console.log('this.contactForm.events', event);
    });

    /* Eventos de Controlador (en este caso solo del email): */
    this.contactForm.get('email')?.events.subscribe((events) => {
      console.log("this.contactForm.get('email')?.events", events);
    });

    /* NO ES LO MISMO QUE: */
    /* VALOR de todo el formulario y dará un objeto: */
    this.contactForm.valueChanges.subscribe((value) => {
      console.log('this.contactForm.valueChanges', value);
    });

    /* VALOR de Controlador (en este caso solo del email) y dará en string: */
    this.contactForm.get('email')?.valueChanges.subscribe((value) => {
      console.log("this.contactForm.get('email')?.valueChanges", value);
    });
  }

  hasErrors(field: string, typeError: string) {
    return (
      this.contactForm.get(field)?.hasError(typeError) &&
      this.contactForm.get(field)?.touched
    );
  }
}
