import { Routes } from '@angular/router';
import { Home } from './features/home/home'; // Ajusta la ruta a tu componente
import { Contact } from './features/contact/contact'; // Ajusta la ruta a tu componente
import { Services } from './features/services/services';
import { Bussiness } from './features/bussiness/bussiness';
import { Projects } from './features/projects/projects';
import { Details } from './features/details/details';
import { Meroapp } from './features/meroapp/meroapp';


export const routes: Routes = [
  { 
    path: '', 
    component: Home,
    title: 'VooltLab | Soluciones Tecnologicas' // Título que aparecerá en la pestaña
  },
  { 
    path: 'contact', 
    component: Contact,
    title: 'VooltLab | Soluciones Tecnologicas'
  },
  { 
    path: 'services', 
    component: Services,
    title: 'VooltLab | Soluciones Tecnologicas'
  },
  { 
    path: 'business', 
    component: Bussiness,
    title: 'VooltLab | Soluciones Tecnologicas'
  },
  { 
    path: 'projects', 
    component: Projects,
    title: 'VooltLab | Soluciones Tecnologicas'
  },
  { 
    path: 'details', 
    component: Details,
    title: 'VooltLab | Soluciones Tecnologicas'
  },
  { 
    path: 'meroapp', 
    component: Meroapp,
    title: 'VooltLab | Soluciones Tecnologicas'
  },
  { 
    path: '**', 
    redirectTo: '', 
    pathMatch: 'full' 
  }
];