# Novedades de Angular 18

### Signal INPUTS

Las signal inputs permiten enlazar valores desde componentes padres, similar a @Input. Sin embargo al ser signals pueden cambiar durante el ciclo de vida del componente. Angular admite dos variantes de entradas de señal:
Entradas opcionales: Son opcionales de forma predeterminada. Se puede especificar un valor inicial explícito, o Angular usará implícitamente 'undefined' como valor inicial.
Entradas requeridas: Siempre tienen un valor del tipo de entrada dado. No puede haber un valor inicial, y se declaran usando la función 'input.required'.

### Signal OUTPUTS

Nueva forma de declarar outputs (salidas) en Angular que proporciona una API más sencilla y segura para emitir valores desde componentes a componentes padre.

Ofrece mejoras en la seguridad de tipos y la limpieza automática de outputs. Los Signal Outputs se pueden declarar mediante las funciones output() y outputFromObservable(), reduciendo la necesidad de código repetitivo y complejidades innecesarias.

### Signal QUERIES

Las consultas de señal son una forma de buscar elementos hijos y leer valores de sus inyectores dentro de un componente o directiva. Puedes utilizar las funciones viewChild y viewChildren para consultas de vista, y contentChild y contentChildren para consultas de contenido.

### MODEL INPUTS

Establecer conexiones de datos bidireccionales entre componentes padre e hijo, lo cual no era posible con las señales de solo lectura previamente disponibles. Esto se logra utilizando una sintaxis específica en el código, como se muestra en el ejemplo de un componente de casilla de verificación personalizado

### NG-CONTENT ACTUALIZADO

ng-content es una directiva que se utiliza para insertar contenido dentro de un componente desde fuera de este. Anteriormente, no era posible especificar un contenido por defecto y ahora es posible

### Propiedad events para formularios

Las clases FormControl, FormGroup y FormArray de los formularios de Angular ahora exponen una propiedad llamada eventos, que te permite suscribirte a un flujo de eventos para este control de formulario.

### REDIRECCIÓN de rutas con funciones

La propiedad redirectTo en las rutas ahora puede aceptar una función que devuelve una cadena. Esto proporciona una mayor flexibilidad al redireccionar

### DEFER estable

Permite cargar estos recursos solo cuando se necesitan, lo que puede mejorar el rendimiento de la aplicación. Se puede configurar para cargar en diferentes condiciones, como cuando el navegador está en estado de reposo, cuando el elemento entra en la vista, cuando se produce una interacción con el elemento, entre otros.

### NUEVA WEB OFICIAL

Si bien el lanzamiento de la versión 17 había introducido la plataforma web, ambas versiones coexistían temporalmente debido a la transición de características y asistencias migratorias pendientes. Actualmente, la web oficial se unifica en una única dirección: https://angular.dev/

### ANGULAR MATERIAL 3

Llega la nueva versión estable de Angular material para Angular 18 donde se han tomado en cuenta todos los feedbacks realizados por la comunidad de Angular. Nuevos temas y documentación que encontrarás en:
https://material.angular.io/
y https://m3.material.io/

### PUBLIC/ASSETS

En Angular veníamos acostumbrados a poder utilizar dentro de nuestra carpeta SRC archivos estáticos pero en Angular 18, este ya no es el caso. Para poder utilizar archivos estáticos hay que utlizar la carpeta public y las URLS deben apuntar hacia adentro de esta carpeta de forma “absoluta”

---

### \* Partes y/o archivos de este proyecto (https://angular.io/guide/file-structure)

- `.editorconfig`: al instalar la extensión `EditorConfig for VS Code` nos permite sobreescribir valores por defecto de nuestro editor de código, entonces lo que Visual Studio Code hace cuando encuentra un archivo .editorconfig básicamente establece las configuraciones por defecto en Visual Studio Code para este proyecto y este archivo hace que siga ciertas recomendaciones para que nuestro código luzca igual o similar cuando otras personas están trabajando en el mismo editor de código. Entonces `.editorconfig` es una configuración del editor de código. EditorConfig ayuda a mantener estilos de codificación consistentes para múltiples desarrolladores que trabajan en el mismo proyecto en varios editores e IDE. El proyecto EditorConfig consta de un formato de archivo para definir estilos de codificación y una colección de complementos de editor de texto que permiten a los editores leer el formato de archivo y adherirse a los estilos definidos. Los archivos EditorConfig son fácilmente legibles y funcionan bien con sistemas de control de versiones.

- `angular.json`: es un archivo importante y es raro que se hagan muchas modificaciones aquí, de vez en cuando se puede hacer una configuración global. Es un archivo donde le decimos a Angular ciertas configuraciones para la ejecución de nuestra aplicación por ejemplo, cual es el builder que vamos a utilizar, cual es el directorio de salida, cual es el archivo index que se usará para lanzar inicialmente la aplicación, cual es nuestro archivo principal o el main donde quedará todo nuestro bundle de nuestro código al final, etc.

- `tsconfig.app.json` / `tsconfig.json` / `tsconfig.spec.json`: son archivos de configuración de TypeScript. El archivo `tsconfig.app.json` es orientado a la aplicación y configuraciones como directorio de salida, etc. El archivo `tsconfig.json` son las recomendaciones para trabajar TypeScript dentro de Angular de una forma estandarizada. El archivo `tsconfig.spec.json` es similar al archivo `tsconfig.app.json` pero en este caso es orientado al testing.

- `.angular`: es una carpeta donde hay un casi 99.99% que no se tocará en proyectos porque incluso está en el .gitignore pero igual puede variar según el requerimiento del proyecto a realizar. Pero este directorio ayuda a Angular a manejar rápidamente cuando se detecta algún cambio y maneja el cache de nuestro proyecto en desarrollo y en construcción también.

- `.vscode`: es una carpeta donde hay un casi 99.99% que no se tocará en proyectos porque incluso está en el .gitignore pero igual puede variar según el requerimiento del proyecto a realizar. Pero este directorio es propio de Visual Studio Code y puede ser que se manipule por ejemplo en extensions.json al querer poner más recomendaciones o paquetes recomendados para que otros desarrolladores al montar la aplicación en modo de desarrollo les recomiende un set de instalaciones a realizar.

- `src\index.html`: tiene un <app-root></app-root> que es un componente personalizado y es donde se creará nuestra aplicación de Angular.

- `src\main.ts`: es el punto de entrada de nuestra aplicación de Angular y hay veces donde por ejemplo, si se está trabajando con Angular Universal o Angular en Ionic o Angular en Electron o Angular en otros lugares, no se estará trabajando con el `platformBrowserDynamic()` ya que es más que todo para navegadores web pero Angular + otra tecnología permitirá crear proyectos y aplicaciones de Angular para diferentes plataformas objetivo, en este caso estamos para la web y por eso está el `platformBrowserDynamic()`. Luego hace un bootstrap de nuestro módulo principal y si hay un error lo muestra en consola `bootstrapModule(AppModule).catch(err => console.error(err));`.

- `src\app`: es donde vamos a empezar a construir toda la lógica de nuestra aplicación, crear componentes, servicios, etc. y tiene los mismos archivos de .html, .css, .ts, .spec.ts o .jest (para el testing), etc. En `app.component.ts` es una clase y tiene un decorador @Component y ahí está difiniendo un 'app-root' el cual es igual al de index.html y básicamente este app.component.ts sería el componente principal que estamos montando ahí.

- `src\app\app.component.ts`: este archivo es el principal, explica cómo funciona el componente, qué dependencias tiene y los demás son como sus complementos para evitar que todo esté en un solo archivo.

---

### \* RECURSOS A USAR:

- Bootstrap (CDN): https://getbootstrap.com/

  ```html
  <!-- Bootstrap CDN -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous" />

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
  ```

  - NOTA: También se puede instalar y configurar el archivo `angular.json`, es decir:

  1.  npm i bootstrap@5.3.3

  2.  Ir a angular.json

      ```json
      "styles": [
        "src/styles.scss",
        "node_modules/bootstrap/dist/css/bootstrap.min.css",

      ],
      "scripts": [
        "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js",
      ],
      ```

- Angular Material: `npx ng add @angular/material@18`

---

# AngularFeaturesV18

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.12.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
