import { ChangeDetectorRef, Component, computed, inject, signal } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { SvgViewComponent } from '../components/svg-view/svg-view.component';
import { ExpandableButtonComponent } from '../components/expandable-button/expandable-button.component';
import { ILayoutExpansions } from '../utils/unions';
import { NgStyle } from '@angular/common';
import { ui } from './expansion-items';
import { BreadcrumbComponent } from '../components/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [MatSidenavModule, RouterLink, RouterLinkActive, SvgViewComponent, RouterOutlet, ExpandableButtonComponent, NgStyle, BreadcrumbComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

  expansionsSig = signal(new ILayoutExpansions());
  getExpansionsSig = computed(this.expansionsSig);

  sidenavSig = signal(false);
  getSidenavSig = computed(this.sidenavSig);

  cdRef = inject(ChangeDetectorRef);

  ngOnInit(): void {
    this.expansionsSig().ui = ui;

    this.setSidenavDefState()
  }

  setSidenavDefState() {
    const pos = localStorage.getItem('TMS-SIDENAV')
    this.sidenavSig.set(pos ? JSON.parse(pos) : false);
    this.cdRef.detectChanges()
  }

  handleToggle(ev: boolean) {
    this.sidenavSig.set(ev)
    localStorage.setItem('TMS-SIDENAV', JSON.stringify(ev))
  }

}
