import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SvgViewComponent } from '../components/svg-view/svg-view.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [MatSidenavModule, RouterLink, RouterLinkActive, SvgViewComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
