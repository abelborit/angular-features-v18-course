import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import {
  InputComponent,
  OutputComponent,
  QueriesComponent,
} from './pages/signals';

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
    ],
  },

  { path: '**', redirectTo: '', pathMatch: 'full' },
];
