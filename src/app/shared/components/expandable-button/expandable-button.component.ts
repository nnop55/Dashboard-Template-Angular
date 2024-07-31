import { Component, Input, output } from '@angular/core';
import { SvgViewComponent } from '../svg-view/svg-view.component';

@Component({
  selector: 'app-expandable-button',
  standalone: true,
  imports: [SvgViewComponent],
  templateUrl: './expandable-button.component.html',
  styleUrl: './expandable-button.component.scss'
})
export class ExpandableButtonComponent {

  @Input({ required: true }) text!: string;
  @Input({ required: true }) icon!: string;

  isOpen: boolean = false;
  isOpenEmitter = output<boolean>();

  ngOnInit(): void {
    this.setDefState()
  }

  setDefState() {
    const pos = localStorage.getItem(`TMS-${this.text}`);
    this.isOpen = pos ? JSON.parse(pos) : '';
    this.isOpenEmitter.emit(this.isOpen);
  }

  toggle() {
    this.isOpen = !this.isOpen;
    localStorage.setItem(`TMS-${this.text}`, JSON.stringify(this.isOpen))
    this.isOpenEmitter.emit(this.isOpen)
  }

}
