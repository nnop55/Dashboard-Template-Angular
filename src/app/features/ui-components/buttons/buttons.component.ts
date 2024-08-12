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
        isDisabled: false,
        action: () => {
          console.log("Basic clicked")
        }
      },
      {
        color: BtnColors.Primary,
        text: 'Primary',
        isDisabled: false,
        action: () => {
          console.log("Primary clicked")
        }
      },
      {
        color: BtnColors.Accent,
        text: 'Accent',
        isDisabled: false,
        action: () => {
          console.log("Accent clicked")
        }
      },
      {
        color: BtnColors.Warn,
        text: 'Warn',
        isDisabled: false,
        action: () => {
          console.log("Warn clicked")
        }
      },
      {
        color: BtnColors.Basic,
        text: 'Disabled',
        isDisabled: true,
        action: () => {
          console.log("Disabled clicked")
        }
      }
    ],
    withIcons: [
      {
        color: BtnColors.Primary,
        iconName: 'settings',
        isDisabled: false,
        action: () => {
          console.log("Settings clicked")
        }
      },
      {
        color: BtnColors.Accent,
        iconName: 'visibility',
        isDisabled: false,
        action: () => {
          console.log("Visibility clicked")
        }
      },
      {
        color: BtnColors.Primary,
        iconName: 'favorite',
        isDisabled: false,
        action: () => {
          console.log("Favorite clicked")
        }
      },
      {
        color: BtnColors.Accent,
        iconName: 'restore',
        isDisabled: false,
        action: () => {
          console.log("Restore clicked")
        }
      },
      {
        color: BtnColors.Accent,
        iconName: 'alarm_on',
        isDisabled: true,
        action: () => {
          console.log("Alarm clicked")
        }
      },
    ]
  }
}
