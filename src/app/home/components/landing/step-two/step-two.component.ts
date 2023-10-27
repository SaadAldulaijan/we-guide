import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrls: ['./step-two.component.scss']
})
export class StepTwoComponent {


  @Output() backEvent : EventEmitter<void> = new  EventEmitter<void>();


  back() {
    this.backEvent.emit();
  }
}
