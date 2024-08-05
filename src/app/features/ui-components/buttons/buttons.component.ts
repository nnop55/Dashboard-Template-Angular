import { Component } from '@angular/core';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { BtnColors } from '../../../shared/utils/unions';
import { BreadcrumbComponent } from '../../../shared/components/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-buttons',
  standalone: true,
  imports: [ButtonComponent, BreadcrumbComponent],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.scss'
})
export class ButtonsComponent {
  btnData = {
    withoutIcons: [
      {
        color: BtnColors.Basic,
        text: 'Basic',
        isDisabled: false
      },
      {
        color: BtnColors.Primary,
        text: 'Primary',
        isDisabled: false
      },
      {
        color: BtnColors.Accent,
        text: 'Accent',
        isDisabled: false
      },
      {
        color: BtnColors.Warn,
        text: 'Warn',
        isDisabled: false
      },
      {
        color: BtnColors.Basic,
        text: 'Disabled',
        isDisabled: true
      }
    ],
    withIcons: [
      {
        color: BtnColors.Primary,
        iconName: 'settings',
        isDisabled: false
      },
      {
        color: BtnColors.Accent,
        iconName: 'visibility',
        isDisabled: false
      },
      {
        color: BtnColors.Primary,
        iconName: 'favorite',
        isDisabled: false
      },
      {
        color: BtnColors.Accent,
        iconName: 'restore',
        isDisabled: false
      },
      {
        color: BtnColors.Accent,
        iconName: 'alarm_on',
        isDisabled: true
      },
    ]
  }
}
