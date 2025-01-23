import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterOutlet,
} from '@angular/router';

interface MenuRoute {
  label: string; // Nombre para mostrar en el menú
  path: string; // Ruta asociada
  children?: MenuRoute[]; // Submenú opcional
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  public menuRoutes: MenuRoute[] = [
    { label: 'Home', path: '/' },
    {
      label: 'Signals',
      path: 'signals',
      children: [
        { label: 'Inputs', path: 'signals/inputs' },
        { label: 'Outputs', path: 'signals/outputs' },
        { label: 'Queries', path: 'signals/queries' },
        { label: 'Model Inputs', path: 'signals/model-inputs' },
      ],
    },
    { label: 'Content', path: 'content' },
    { label: 'Optimized Image', path: 'optimized-image' },
    { label: 'Defer', path: 'defer' },
    { label: 'Forms', path: 'forms' },
    { label: 'Redirección', path: 'redireccion' },
  ];

  constructor(private router: Router) {
    // Escuchar cambios en la URL
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateActiveRoutes(this.router.url);
      }
    });

    // Inicializar estados al cargar
    this.updateActiveRoutes(this.router.url);
  }

  /**
   * Actualiza las rutas activas (principal y secundaria) basándose en la URL actual.
   * @param currentUrl - La URL actual.
   */
  private updateActiveRoutes(currentUrl: string): void {
    this.menuOption = ''; // Reinicia la ruta principal activa
    this.menuOptionChild = ''; // Reinicia la subruta activa

    // Detectar si estamos en la raíz `/` (Home)
    if (currentUrl === '/' || currentUrl === '') {
      this.menuOption = '/'; // Marcar Home como activo
      return;
    }

    // Buscar la ruta principal activa
    for (const route of this.menuRoutes) {
      // Si la URL actual comienza con la ruta principal
      if (currentUrl.startsWith(`/${route.path}`)) {
        this.menuOption = route.path; // Marca la ruta principal como activa

        // Si tiene hijos, buscar la subruta activa
        if (route.children) {
          const activeChild = route.children.find((child) =>
            currentUrl.startsWith(`/${child.path}`)
          );

          // Si se detecta una ruta hija activa
          if (activeChild) {
            this.menuOptionChild = activeChild.path; // Marca la subruta activa
          }
        }

        break; // Salir del bucle al encontrar la ruta activa
      }
    }
  }

  public menuOption: string = '/'; // Default active menu option
  public menuOptionChild: string = ''; // Default active child menu option

  /**
   * Updates the selected menu option for parent routes.
   * @param menuOption - The selected menu option.
   */
  handleSelectMenuOption(menuOption: string): void {
    this.menuOption = menuOption;
  }

  /**
   * Updates the selected menu option for child routes.
   * @param menuOptionChild - The selected child menu option.
   */
  handleSelectMenuOptionChild(menuOptionChild: string): void {
    this.menuOptionChild = menuOptionChild;
  }
}
