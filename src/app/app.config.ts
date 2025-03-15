import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes'; // Importa las rutas desde tu archivo de rutas
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  // important ficar el provideHttpClient() per poder fer peticions HTTP
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient()
  ]
};