import { Component, Input } from '@angular/core';
import { MatBadgeModule, MatBadgePosition } from '@angular/material/badge';
import { BadgeTypes } from '../../utils/unions';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [MatBadgeModule, MatButtonModule, MatIconModule],
  template: `
  @switch (type) {
      @case ('text') {
          <div 
              [matBadge]="badgeContent" 
              matBadgeOverlap="false" 
              [matBadgePosition]="badgePosition">
              {{content}}
          </div>
      }
      @case ('btn') {
          <button 
              mat-raised-button 
              [matBadge]="badgeContent" 
              [matBadgePosition]="badgePosition">
              {{content}}
          </button>
      }
      @case ('icon') {
          <mat-icon [matBadgePosition]="badgePosition" [matBadge]="badgeContent">{{content}}</mat-icon>
      }
  }
`
})
export class BadgeComponent {
  @Input({ required: true }) type!: BadgeTypes;
  @Input() badgeContent!: string;
  @Input() content!: string;
  @Input() badgePosition: MatBadgePosition = 'after';
}
