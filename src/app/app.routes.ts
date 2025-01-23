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

  { path: '**', redirectTo: '', pathMatch: 'full' },
];
