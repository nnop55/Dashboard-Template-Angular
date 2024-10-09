import { Component, computed, Signal, signal, WritableSignal } from '@angular/core';
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

  chipsData = signal<any[]>([
    {
      isDisabled: false,
      text: 'Apple'
    },
    {
      isDisabled: false,
      text: 'Lemon'
    },
    {
      isDisabled: false,
      text: 'Lime'
    },
    {
      isDisabled: false,
      text: 'Orange'
    },
    {
      isDisabled: false,
      text: 'Strawberry'
    }

  ])

  selectedAutocompleteItems!: Signal<any[]>;

  handleSelectedItemEmit(event: WritableSignal<any[]>) {
    this.selectedAutocompleteItems = computed(event);
  }

}
