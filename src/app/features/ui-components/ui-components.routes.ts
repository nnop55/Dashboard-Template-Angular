import { Routes } from '@angular/router';

export const uiComponentRoutes: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('../../shared/layout/layout.component')
                .then(m => m.LayoutComponent),
        children: [
            {
                path: 'buttons',
                loadComponent: () =>
                    import('./buttons/buttons.component')
                        .then(m => m.ButtonsComponent),
            }
        ]
    }
];