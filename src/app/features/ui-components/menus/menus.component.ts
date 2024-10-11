import { Component, signal } from '@angular/core';
import { BreadcrumbComponent } from '../../../shared/components/breadcrumb/breadcrumb.component';
import { MenuComponent } from '../../../shared/components/menu/menu.component';
import { abovePosData, afterPosData, beforePosData, belowPosData, menuData, menuIconData } from './menu';
import { IData, IMenu } from '../../../shared/utils/unions';

@Component({
  selector: 'app-menus',
  standalone: true,
  imports: [BreadcrumbComponent, MenuComponent],
  templateUrl: './menus.component.html',
  styleUrl: './menus.component.scss'
})
export class MenusComponent {
  data = signal<IMenu>(menuData);
  aboveData = signal<IMenu>(abovePosData);
  belowData = signal<IMenu>(belowPosData);
  beforeData = signal<IMenu>(beforePosData);
  afterData = signal<IMenu>(afterPosData);
  iconData = signal<IMenu>(menuIconData);

  handleClick(ev: IData) {
    console.log(ev)
  }
}
