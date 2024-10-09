import { Component, computed, Input, OnInit, output, signal, WritableSignal } from '@angular/core';
import { MatAutocompleteModule, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { ChipsTypes } from '../../utils/unions';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-chip-item',
  standalone: true,
  imports: [MatChipsModule, MatAutocompleteModule, MatFormFieldModule, MatIconModule, ReactiveFormsModule],
  templateUrl: './chip-item.component.html',
  styleUrl: './chip-item.component.scss'
})
export class ChipItemComponent implements OnInit {
  @Input({ required: true }) type!: ChipsTypes;
  @Input() data = signal<any[]>([]);
  @Input() label: string = 'Favorite Fruits';

  emitSelectedItems = output<WritableSignal<any[]>>();

  selectedItems = signal<any[]>([]);

  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  readonly filteredData = computed(() => {
    const current = this.itemCtrl.value?.toLowerCase();
    return current
      ? this.data().filter(item => item.text.toLowerCase().includes(current))
      : this.data().slice();
  });

  itemCtrl = new FormControl('');

  ngOnInit(): void {
    if (this.data().length && this.data().length > 0) {
      this.selectedItems.set([this.data()[0].text])
      this.emitSelectedChange()
    }
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value) {
      this.selectedItems.update(items => [...items, value]);
    }

    this.itemCtrl.setValue('');
    this.emitSelectedChange()
  }

  remove(item: string): void {
    this.selectedItems.update(items => {
      const index = items.indexOf(item);
      if (index < 0) {
        return items;
      }

      items.splice(index, 1);
      return [...items];
    });
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.selectedItems.update(items => [...items, event.option.viewValue]);
    this.itemCtrl.setValue('');
    event.option.deselect();
    this.emitSelectedChange()
  }

  emitSelectedChange() {
    this.emitSelectedItems.emit(this.selectedItems)
  }
}
