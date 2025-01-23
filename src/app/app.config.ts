/* Este código configura una aplicación Angular utilizando la nueva API basada en ApplicationConfig, con algunas características avanzadas como la detección de cambios con y sin Zone.js, rutas y soporte para hidratación del lado del cliente (usado en aplicaciones SSR) */
import {
  ApplicationConfig,
  // provideZoneChangeDetection,
  provideExperimentalZonelessChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';

/* ApplicationConfig es una interfaz introducida en Angular 15 que define la configuración global de la aplicación. Reemplaza parcialmente el uso de NgModule para configurar proveedores, rutas y otros ajustes globales */
export const appConfig: ApplicationConfig = {
  /* aquí están los proveedores del appConfig */
  providers: [
    /* Configura la detección de cambios basada en Zone.js con la opción de "event coalescing". Event Coalescing: Agrupa múltiples eventos en un solo ciclo de detección de cambios, lo que mejora el rendimiento al reducir el número de verificaciones de cambios */
    // provideZoneChangeDetection({ eventCoalescing: true }), // si se está usando "zoneless" entonces hay que retirar lo que se está usando todavía del Zone.js para tener todos los beneficios del "zoneless" porque si no dará un error similar a -- NG0408: Invalid change detection configuration: provideZoneChangeDetection and provideExperimentalZonelessChangeDetection cannot be used together. --

    /* Proporciona las rutas para la aplicación. routes: Es un arreglo que define la navegación de la aplicación (equivalente a RouterModule.forRoot(routes) en configuraciones tradicionales) */
    provideRouter(routes),

    /* Se utiliza en aplicaciones con Server-Side Rendering (SSR). Activa la hidratación del cliente, lo que permite que Angular asocie los eventos del lado del cliente con la estructura del DOM renderizada en el servidor. Esto es útil para optimizar aplicaciones SSR, ya que:
      - El HTML estático generado en el servidor se "hidrata" con interactividad en el cliente.
      - Angular reutiliza el DOM existente en lugar de renderizarlo nuevamente.
    */
    /* NOTA: En programación web, la hidratación del cliente se refiere al proceso en el que el código JavaScript se ejecuta en el navegador del usuario para "hidratar" el contenido previamente renderizado del lado del servidor (como HTML estático) y convertirlo en una aplicación interactiva. Este proceso es común en aplicaciones web modernas, especialmente en aquellas basadas en frameworks de JavaScript como React, Vue, o Angular */
    provideClientHydration(),

    /* Proporciona una alternativa experimental para la detección de cambios sin Zone.js. En lugar de interceptar tareas asincrónicas automáticamente (como hace Zone.js), Angular solo actualiza las vistas cuando el flujo de datos lo indica explícitamente. Es útil para aplicaciones que usan patrones reactivas como RxJS o librerías como NgRx. */
    provideExperimentalZonelessChangeDetection(),

    /*  es una función introducida como una mejora en Angular para manejar animaciones de forma más eficiente. Está diseñada para trabajar con la librería de animaciones de Angular (@angular/animations) y permite cargar las animaciones de manera asíncrona, mejorando el rendimiento y reduciendo la carga inicial de la aplicación.
      - Carga diferida: Permite que las animaciones se inicialicen solo cuando sean necesarias, evitando cargar recursos y configuraciones relacionados con animaciones al inicio de la aplicación.
      - Optimización del rendimiento: Esto puede ser útil en aplicaciones grandes o cuando las animaciones no se utilizan en todas las partes de la aplicación.
    */
    provideAnimationsAsync(),

    /* HttpClient se proporciona mediante la función auxiliar "provideHttpClient" que es una nueva funcionalidad introducida como parte de la modernización del manejo de solicitudes HTTP, permitiendo el uso de la API Fetch en lugar de depender de XMLHttpRequest (XHR). Entonces para usar fetch de forma predeterminada en lugar de XMLHttpRequest, se configura el "provideHttpClient" ya que acepta una lista de configuraciones de funciones opcionales para habilitar o configurar el comportamiento de diferentes aspectos del cliente. En este caso se usa "withFetch" y sirve para que el cliente use de forma predeterminada el fetch en lugar del XMLHttpRequest. */
    provideHttpClient(withFetch()),

    provideCharts(withDefaultRegisterables()),
  ],
};

/* ************************************************************************************************************************ */
/* Ejemplo práctico de hidratación:

En una aplicación de React renderizada en el servidor:

  - El servidor genera el HTML estático, mostrando una lista de productos.
  - El navegador recibe ese HTML y lo muestra rápidamente al usuario.
  - Luego, React se ejecuta en el navegador e "hidrata" ese HTML, asociando las funcionalidades interactivas con los elementos (como botones, formularios o filtros).
*/
