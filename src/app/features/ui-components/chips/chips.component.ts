import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../shared/components/breadcrumb/breadcrumb.component';
import { ChipItemComponent } from '../../../shared/components/chip-item/chip-item.component';

@Component({
  selector: 'app-chips',
  standalone: true,
  imports: [BreadcrumbComponent, ChipItemComponent],
  templateUrl: './chips.component.html',
  styleUrl: './chips.component.scss'
})
export class ChipsComponent {

}
