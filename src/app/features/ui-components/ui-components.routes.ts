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
            },
            {
                path: 'expansion-panels',
                loadComponent: () =>
                    import('./expansion-panels/expansion-panels.component')
                        .then(m => m.ExpansionPanelsComponent),
                data: { breadcrumb: 'Expansion Panels' }
            },
            {
                path: 'badge',
                loadComponent: () =>
                    import('./badges/badges.component')
                        .then(m => m.BadgesComponent),
                data: { breadcrumb: 'Badge' }
            },
            {
                path: 'chips',
                loadComponent: () =>
                    import('./chips/chips.component')
                        .then(m => m.ChipsComponent),
                data: { breadcrumb: 'Chips' }
            },
            {
                path: 'lists',
                loadComponent: () =>
                    import('./lists/lists.component')
                        .then(m => m.ListsComponent),
                data: { breadcrumb: 'Lists' }
            },
            {
                path: 'menus',
                loadComponent: () =>
                    import('./menus/menus.component')
                        .then(m => m.MenusComponent),
                data: { breadcrumb: 'Menus' }
            },
        ]
    }
];