import { Component } from '@angular/core';
import { ExpansionPanelComponent } from '../../../shared/components/expansion-panel/expansion-panel.component';

@Component({
  selector: 'app-expansion-panels',
  standalone: true,
  imports: [ExpansionPanelComponent],
  templateUrl: './expansion-panels.component.html',
  styleUrl: './expansion-panels.component.scss'
})
export class ExpansionPanelsComponent {

  panels = [
    { title: 'Panel 1', description: 'Description for Panel 1', expanded: false },
    { title: 'Panel 2', description: 'Description for Panel 2', expanded: false },
    { title: 'Panel 3', description: 'Description for Panel 3', expanded: false }
  ];

}
