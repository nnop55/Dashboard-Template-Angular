import { Component, computed, Input, OnInit, output, signal, WritableSignal } from '@angular/core';
import { MatAutocompleteModule, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipEditedEvent, MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { ActionTypes, ChipsTypes, IData, ISignalEmitter } from '../../utils/unions';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-chip-item',
  standalone: true,
  imports: [
    MatChipsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatIconModule,
    ReactiveFormsModule,
    CdkDropList,
    CdkDrag
  ],
  templateUrl: './chip-item.component.html',
  styleUrl: './chip-item.component.scss'
})
export class ChipItemComponent implements OnInit {
  @Input({ required: true }) type!: ChipsTypes;
  @Input() data = signal<IData[]>([]);
  @Input() label: string = 'Items';

  emitSelectedItems = output<ISignalEmitter>();
  emitDataDropped = output<ISignalEmitter>();
  emitData = output<ISignalEmitter>();

  selectedItems = signal<IData[]>([]);

  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  readonly filteredData = computed(() => {
    const current = this.itemCtrl.value?.toLowerCase();
    return current
      ? this.data().filter(item => item.text.toLowerCase().includes(current))
      : this.data().slice();
  });

  itemCtrl = new FormControl('');

  ngOnInit(): void {
    this.setDefaultAutocomplete()
  }

  setDefaultAutocomplete() {
    if (this.type !== 'autocomplete') {
      return
    }

    if (this.data().length && this.data().length > 0) {
      this.selectedItems.set([this.data()[0]])
      this.emitter(ActionTypes.Selected)
    }
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    let updateTypes: Partial<{ [key in ChipsTypes]: void }> = {
      'autocomplete': this.selectedItems.update(items => [...items, { text: value, isDisabled: false }]),
      'input': this.data.update(items => [...items, { text: value, isDisabled: false }])
    }

    if (value) {
      updateTypes[this.type]
    }

    this.emitter(ActionTypes.Add)
    event.chipInput!.clear();
    this.itemCtrl.setValue('');
  }

  remove(item: IData): void {
    const remove = (data: WritableSignal<any[]>) => {
      data.update(items => {
        const index = items.indexOf(item);
        if (index < 0) {
          return items;
        }

        items.splice(index, 1);
        return [...items];
      }
      );
    }

    remove(this.type === 'autocomplete'
      ? this.selectedItems : this.type === 'input'
        ? this.data : signal([]));
    this.emitter(ActionTypes.Remove)

  }

  edit(item: any, event: MatChipEditedEvent) {
    const value = event.value.trim();

    if (!value) {
      this.remove(item);
      return;
    }

    this.data.update(items => {
      const index = items.indexOf(item);
      if (index >= 0) {
        items[index].text = value;
        return [...items];
      }
      return items;
    });

    this.emitter(ActionTypes.Edit)
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    console.log(event.option.value)
    this.selectedItems.update(items => [...items, event.option.value]);
    this.itemCtrl.setValue('');
    event.option.deselect();
    this.emitter(ActionTypes.Selected)
  }

  drop(event: CdkDragDrop<any[]>) {
    this.data.update(items => {
      moveItemInArray(items, event.previousIndex, event.currentIndex);
      return [...items];
    });

    this.emitter(ActionTypes.Drop)
  }

  emitter(action: ActionTypes) {
    let emitType: Partial<{ [key in ChipsTypes]: void }> = {
      'autocomplete': this.emitSelectedItems.emit({ sig: this.selectedItems, action }),
      'input': this.emitData.emit({ sig: this.data, action }),
      'drag-drop': this.emitDataDropped.emit({ sig: this.data, action })
    }

    emitType[this.type]
  }

}
