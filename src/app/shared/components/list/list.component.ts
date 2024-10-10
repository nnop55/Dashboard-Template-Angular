import { Component, Input, signal } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { IData, IListSection, ListTypes } from '../../utils/unions';
import { DatePipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [MatListModule, DatePipe, MatIconModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  @Input({ required: true }) type!: ListTypes;
  @Input() data = signal<IData[]>([]);
  @Input() sectionsData = signal<IListSection[]>([]);
}
