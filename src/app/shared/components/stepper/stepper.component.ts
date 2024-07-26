import { Component } from '@angular/core';
import { MatStepperModule } from '@angular/material/stepper';

@Component({
  selector: 'app-stepper',
  standalone: true,
  imports: [MatStepperModule],
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.scss'
})
export class StepperComponent {

}
