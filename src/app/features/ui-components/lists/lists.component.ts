import { Component, signal } from '@angular/core';
import { BreadcrumbComponent } from '../../../shared/components/breadcrumb/breadcrumb.component';
import { ListComponent } from '../../../shared/components/list/list.component';
import { IData, IListSection } from '../../../shared/utils/unions';
import { listData, sectionListData } from './list';

@Component({
  selector: 'app-lists',
  standalone: true,
  imports: [BreadcrumbComponent, ListComponent],
  templateUrl: './lists.component.html',
  styleUrl: './lists.component.scss'
})
export class ListsComponent {
  data = signal<IData[]>(listData);
  sectionsData = signal<IListSection[]>(sectionListData);
}
