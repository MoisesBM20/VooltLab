import { Routes } from '@angular/router';
import { Home } from './features/home/home';


export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home').then(m => m.Home),
    title: 'VooltLab | Soluciones Tecnologicas' // Título para la pestaña del navegador (Angular 14+)
  },
  // En el futuro agregarás:
  // { path: 'servicios', loadComponent: ... },
  {
    path: '**', // Ruta comodín para 404 (opcional por ahora)
    redirectTo: ''
  }
];