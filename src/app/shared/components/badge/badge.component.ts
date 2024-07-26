import { Component } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';

@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [MatBadgeModule],
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.scss'
})
export class BadgeComponent {

}
