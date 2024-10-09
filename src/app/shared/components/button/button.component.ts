import { Component, Input, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BtnTypes } from '../../utils/unions';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  template: `
  @switch (type) {
    @case ('basic') {
        <button mat-button (click)="btnClick()" [disabled]="isDisabled" [color]="color">
          {{text}}
        </button>
    }
    @case ('raised') {
        <button mat-raised-button (click)="btnClick()" [disabled]="isDisabled" [color]="color">
          {{text}}
        </button>
    }
    @case ('stroked') {
        <button mat-stroked-button (click)="btnClick()" [disabled]="isDisabled" [color]="color">
          {{text}}
        </button>
    }
    @case ('flat') {
        <button mat-flat-button (click)="btnClick()" [disabled]="isDisabled" [color]="color">
          {{text}}
        </button>
    }
    @case ('icon') {
        <button mat-icon-button (click)="btnClick()" [disabled]="isDisabled" [color]="color">
          <mat-icon>{{iconName}}</mat-icon>
        </button>
    }
    @case ('fab') {
        <button mat-fab (click)="btnClick()" [disabled]="isDisabled" [color]="color">
          <mat-icon>{{iconName}}</mat-icon>
        </button>
    }
    @case ('mini-fab') {
        <button mat-mini-fab (click)="btnClick()" [disabled]="isDisabled" [color]="color">
          <mat-icon>{{iconName}}</mat-icon>
        </button>
    }
    @case ('extended-fab') {
        <button mat-fab extended (click)="btnClick()" [disabled]="isDisabled" [color]="color">
          <mat-icon>{{iconName}}</mat-icon>
        </button>
    }
  }
  `
})
export class ButtonComponent {
  @Input() text!: string;
  @Input() iconName!: string;
  @Input() color!: string;
  @Input() isDisabled: boolean = false
  @Input({ required: true }) type!: BtnTypes;

  onClick = output<void>();

  btnClick() {
    this.onClick.emit()
  }
}
