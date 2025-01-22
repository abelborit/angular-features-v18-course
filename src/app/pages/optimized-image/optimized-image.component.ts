import {
  IMAGE_LOADER,
  ImageLoaderConfig,
  NgOptimizedImage,
} from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-optimized-image',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './optimized-image.component.html',
  styleUrl: './optimized-image.component.scss',
  providers: [
    {
      provide: IMAGE_LOADER,
      /* aquí le estamos diciendo que en la configuración del "IMAGE_LOADER" que en el servidor donde subimos la imagen nos permite hacer un "compress" que es "tinysrgb" y recibir la configuración del width, o sea el "config.width", y este "config.width" es lo que le estamos pasando en -- ngSrcset="100w, 200w, 300w, 400w, 500w, 600w" -- Entonces con todo esto, si nuestro proveedor de imágenes (donde subimos las imágenes) no nos permite realizar esta configuración, entonces esto no va a funcionar. Entonces sería bueno conseguir un proveedor de imágenes, es decir, un servidor donde subamos nuestras imágenes, que tenga este tipo de configuraciones para poder optimizar nuestro código */
      useValue: (config: ImageLoaderConfig) => {
        return `https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=${config.width}`;
      },
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OptimizedImageComponent {}
