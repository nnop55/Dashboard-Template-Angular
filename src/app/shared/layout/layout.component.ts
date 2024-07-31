import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { SvgViewComponent } from '../components/svg-view/svg-view.component';
import { ExpandableButtonComponent } from '../components/expandable-button/expandable-button.component';
import { ILayoutExpansions } from '../utils/unions';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [MatSidenavModule, RouterLink, RouterLinkActive, SvgViewComponent, RouterOutlet, ExpandableButtonComponent, NgStyle],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

  expansions: ILayoutExpansions = new ILayoutExpansions();
  sidenavOpened!: boolean

  ngOnInit(): void {
    this.expansions.ui = {
      opened: false,
      data: [
        {
          text: 'Buttons',
          routerLink: "buttons",
          className: 'button-items'
        },
        {
          text: 'Expansion Panel',
          routerLink: "expansion-panel",
          className: 'expansion-panel-items'
        },
      ]
    }

    this.setSidenavDefState()
  }

  setSidenavDefState() {
    const pos = localStorage.getItem('TMS-VALUES')
    this.sidenavOpened = pos ? JSON.parse(pos) : ''
  }

  handleToggle(ev: boolean) {
    this.sidenavOpened = ev
    localStorage.setItem('TMS-VALUES', JSON.stringify(ev))
  }

}
