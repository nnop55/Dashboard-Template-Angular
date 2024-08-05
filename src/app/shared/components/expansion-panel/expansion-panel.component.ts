import { NgTemplateOutlet } from '@angular/common';
import { Component, ContentChildren, Input, QueryList, TemplateRef } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-expansion-panel',
  standalone: true,
  imports: [MatExpansionModule, MatFormFieldModule, MatIconModule, NgTemplateOutlet],
  templateUrl: './expansion-panel.component.html',
  styleUrl: './expansion-panel.component.scss'
})
export class ExpansionPanelComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() expanded: boolean = false;
  @Input() group: boolean = false;
  @Input() panels: any[] = [];

  @ContentChildren(TemplateRef) templates!: QueryList<TemplateRef<any>>;

  ngAfterContentInit() {
    this.panels.forEach((panel, index) => {
      panel.content = this.templates.toArray()[index];
    });
  }
}
