import { Component, Input, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BtnTypes } from '../../utils/unions';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
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
