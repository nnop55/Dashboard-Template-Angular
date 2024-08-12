import { Component, Input } from '@angular/core';
import { MatBadgeModule, MatBadgePosition } from '@angular/material/badge';
import { BadgeTypes } from '../../utils/unions';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [MatBadgeModule, MatButtonModule, MatIconModule],
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.scss'
})
export class BadgeComponent {
  @Input({ required: true }) type!: BadgeTypes;
  @Input() badgeContent!: string;
  @Input() content!: string;
  @Input() badgePosition: MatBadgePosition = 'after';
}
