import { Component, computed, Signal, signal, WritableSignal } from '@angular/core';
import { BreadcrumbComponent } from '../../../shared/components/breadcrumb/breadcrumb.component';
import { ChipItemComponent } from '../../../shared/components/chip-item/chip-item.component';
import { autocompleteChipsData, avatarChipsData, chipsData, dragDropChipsData, inputChipsData } from './chips';
import { ChipsTypes, IData, ISignalEmitter } from '../../../shared/utils/unions';

@Component({
  selector: 'app-chips',
  standalone: true,
  imports: [BreadcrumbComponent, ChipItemComponent],
  templateUrl: './chips.component.html',
  styleUrl: './chips.component.scss'
})
export class ChipsComponent {

  chipsData = signal<IData[]>(chipsData);
  dragDropChipsData = signal<IData[]>(dragDropChipsData);
  autocompleteChipsData = signal<IData[]>(autocompleteChipsData);
  avatarChipsData = signal<IData[]>(avatarChipsData);
  inputChipsData = signal<IData[]>(inputChipsData);

  selectedAutocompleteItems!: Signal<IData[]>;

  handleActions(event: ISignalEmitter, type: ChipsTypes) {
    switch (type) {
      case 'autocomplete':
        console.log('autocomplete', event.action, event.sig())
        this.selectedAutocompleteItems = computed(event.sig);
        break;
      case 'drag-drop':
        console.log('drag-drop', event.action, event.sig())
        break;
      case 'input':
        console.log('input', event.action, event.sig())
        break;
    }

  }

}
