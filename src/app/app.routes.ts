import { Routes } from '@angular/router';

export const routes: Routes = [{
    path: '',
    loadComponent: () => import('./layout/full/full.component').then(m => m.FullComponent),
    children: [
        {
            path: '',
            loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
        },
        {
            path: 'trinh-ha-2025',
            loadComponent: () => import('./questions/trinh-ha-2025/trinh-ha-2025.component').then(m => m.TrinhHa2025Component)
        },
        {
            path: 'trinh-ha-2025-luyen-tap',
            loadComponent: () => import('./questions/trinh-ha-2025/trinh-ha-2025-practise/trinh-ha-2025-practise.component').then(m => m.TrinhHa2025PractiseComponent)
        }
    ]
}];
