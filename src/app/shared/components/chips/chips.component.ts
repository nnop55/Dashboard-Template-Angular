import { Component, computed, Input, signal } from '@angular/core';
import { MatAutocompleteModule, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { ChipsTypes } from '../../utils/unions';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-chips',
  standalone: true,
  imports: [MatChipsModule, MatAutocompleteModule, MatFormFieldModule, MatIconModule, ReactiveFormsModule],
  templateUrl: './chips.component.html',
  styleUrl: './chips.component.scss'
})
export class ChipsComponent {
  @Input({ required: true }) type!: ChipsTypes;
  @Input() data = signal<any[]>([]);

  readonly allItems: string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  readonly filteredData = computed(() => {
    const current = this.itemCtrl.value?.toLowerCase();
    return current
      ? this.allItems.filter(item => item.toLowerCase().includes(current))
      : this.allItems.slice();
  });

  itemCtrl = new FormControl('');

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value) {
      this.data.update(items => [...items, value]);
    }

    this.itemCtrl.setValue('');
  }

  remove(item: string): void {
    this.data.update(items => {
      const index = items.indexOf(item);
      if (index < 0) {
        return items;
      }

      items.splice(index, 1);
      return [...items];
    });
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.data.update(items => [...items, event.option.viewValue]);
    this.itemCtrl.setValue('');
    event.option.deselect();
  }
}
