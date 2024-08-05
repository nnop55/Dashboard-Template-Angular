import { Routes } from '@angular/router';

export const uiComponentRoutes: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('../../shared/layout/layout.component')
                .then(m => m.LayoutComponent),
        data: { breadcrumb: 'UI Components', notClickable: true },
        children: [
            {
                path: 'buttons',
                loadComponent: () =>
                    import('./buttons/buttons.component')
                        .then(m => m.ButtonsComponent),
                data: { breadcrumb: 'Buttons' }
            }
        ]
    }
];