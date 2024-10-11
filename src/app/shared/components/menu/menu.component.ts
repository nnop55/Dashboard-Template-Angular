import { Component, Input, output, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { IData, IMenu, MenuTypes } from '../../utils/unions';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MatMenuModule, MatIconModule, MatButtonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  @Input({ required: true }) type!: MenuTypes;
  @Input() data = signal<IMenu>({} as IMenu);

  onClick = output<IData>();

  btnClick(item: IData) {
    this.onClick.emit(item)
  }
}
