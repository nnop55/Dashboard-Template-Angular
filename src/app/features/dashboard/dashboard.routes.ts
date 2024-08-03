import { Routes } from '@angular/router';

export const dashboardRoutes: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('../../shared/layout/layout.component')
                .then(m => m.LayoutComponent),
        children: [
            {
                path: '',
                loadComponent: () =>
                    import('./dashboard.component')
                        .then(m => m.DashboardComponent),
                data: { breadcrumb: 'Dashboard' }
            }
        ]
    }
];