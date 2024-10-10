import { Component, computed, Signal, signal, WritableSignal } from '@angular/core';
import { BreadcrumbComponent } from '../../../shared/components/breadcrumb/breadcrumb.component';
import { ChipItemComponent } from '../../../shared/components/chip-item/chip-item.component';
import { autocompleteChipsData, avatarChipsData, chipsData, dragDropChipsData, inputChipsData } from './chips';
import { ChipsTypes, ISignalEmitter } from '../../../shared/utils/unions';

@Component({
  selector: 'app-chips',
  standalone: true,
  imports: [BreadcrumbComponent, ChipItemComponent],
  templateUrl: './chips.component.html',
  styleUrl: './chips.component.scss'
})
export class ChipsComponent {

  chipsData = signal<any[]>(chipsData);
  dragDropChipsData = signal<any[]>(dragDropChipsData);
  autocompleteChipsData = signal<any[]>(autocompleteChipsData);
  avatarChipsData = signal<any[]>(avatarChipsData);
  inputChipsData = signal<any[]>(inputChipsData);

  selectedAutocompleteItems!: Signal<any[]>;

  handleActions(event: ISignalEmitter, type: ChipsTypes) {
    switch (type) {
      case 'autocomplete':
        console.log('autocomplete', event.action)
        this.selectedAutocompleteItems = computed(event.sig);
        break;
      case 'drag-drop':
        console.log('drag-drop', event.action)
        break;
      case 'input':
        console.log('input', event.action)
        break;
    }

  }

}
