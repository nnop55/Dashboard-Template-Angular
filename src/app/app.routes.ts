import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    {
        path: 'dashboard',
        loadChildren: () =>
            import('./features/dashboard/dashboard.routes')
                .then(m => m.dashboardRoutes),
    },
    {
        path: 'ui-components',
        loadChildren: () =>
            import('./features/ui-components/ui-components.routes')
                .then(m => m.uiComponentRoutes),
    }
];
