import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import {
  InputComponent,
  OutputComponent,
  QueriesComponent,
} from './pages/signals';
import { ModelInputsComponent } from './pages/signals/model-inputs/model-inputs.component';
import { ContentComponent } from './pages/content/content.component';
import { OptimizedImageComponent } from './pages/optimized-image/optimized-image.component';
import { DeferComponent } from './pages/defer/defer.component';
import { FormsComponent } from './pages/forms/forms.component';
import { ErrorHandler, inject } from '@angular/core';
import { RedireccionComponent } from './pages/redireccion/redireccion.component';
import { DetalleUsuariosComponent } from './pages/detalle-usuarios/detalle-usuarios.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },

  {
    path: 'signals',
    children: [
      {
        path: 'inputs',
        component: InputComponent,
      },
      {
        path: 'outputs',
        component: OutputComponent,
      },
      {
        path: 'queries',
        component: QueriesComponent,
      },
      {
        path: 'model-inputs',
        component: ModelInputsComponent,
      },
    ],
  },

  { path: 'content', component: ContentComponent },

  { path: 'optimized-image', component: OptimizedImageComponent },

  { path: 'defer', component: DeferComponent },

  { path: 'forms', component: FormsComponent },

  { path: 'redireccion', component: RedireccionComponent },
  {
    /* debería ir a "detalle-anterior/:id" porque así se colocó en el método de "navigateTo(.....)" pero es tan rápida la ejecución de código que tiene dentro de las rutas, lo que está en "redirectTo(.....)", que lo redirije a "detalle-usuario/:id" o "not-found" según sea necesario */
    path: 'detalle-anterior/:id',
    redirectTo: ({ params }) => {
      const errorHandler = inject(ErrorHandler);
      const userIdParam = params['id'];

      if (userIdParam != 3) {
        /* lo enviará a la ruta que está puesta abajo con su componente de "DetalleUsuariosComponent" */
        return `/detalle-usuario/${userIdParam}`;
      } else {
        errorHandler.handleError(
          new Error('Attempted navigation to user page without user ID.')
        );

        /* lo enviará a la ruta que está puesta abajo con su componente de "NotFoundComponent" */
        return `/not-found`;
      }
    },
  },
  { path: 'detalle-usuario/:id', component: DetalleUsuariosComponent },
  { path: 'not-found', component: NotFoundComponent },

  { path: '**', redirectTo: '', pathMatch: 'full' },
];
