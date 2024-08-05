import { NgClass } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [NgClass, RouterLink],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss'
})
export class BreadcrumbComponent {
  breadcrumbs = signal<Array<{ label: string, url: string, notClickable: boolean }>>([]);

  private route = inject(ActivatedRoute);

  ngOnInit() {
    this.breadcrumbs.set(this.buildBreadcrumbs(this.route.root))
    console.log(this.breadcrumbs())
  }

  private buildBreadcrumbs(
    route: ActivatedRoute,
    url: string = '',
    breadcrumbs: Array<{ label: string, url: string, notClickable: boolean }> = []
  ): Array<{ label: string, url: string, notClickable: boolean }> {
    const children: ActivatedRoute[] = route.children;

    if (children.length === 0) {
      return breadcrumbs;
    }

    for (const child of children) {
      const routeURL: string = child.snapshot.url.map(segment => segment.path).join('/');
      if (routeURL !== '') {
        url += `/${routeURL}`;
      }

      const label = child.snapshot.data['breadcrumb'];
      const notClickable = child.snapshot.data['notClickable'];
      if (label !== undefined) {
        breadcrumbs.push({ label, url, notClickable: notClickable ?? false });
      }

      return this.buildBreadcrumbs(child, url, breadcrumbs);
    }

    return breadcrumbs;
  }
}
