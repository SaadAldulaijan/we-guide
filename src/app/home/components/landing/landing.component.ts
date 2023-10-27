import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  providers: [MessageService],
})
export class LandingComponent implements OnInit {
  items: MenuItem[] | undefined;

  activeIndex: number = 0;

  constructor(public messageService: MessageService) {}

  onActiveIndexChange(event: number) {
    this.activeIndex = event;
  }

  ngOnInit() {
    this.items = [
      {
        label: 'Preferences',
        command: (event: any) => console.log(event),
      },
      {
        label: 'Timings',
        command: (event: any) => console.log(event),
      },
      {
        label: 'Payment',
        command: (event: any) => console.log(event),
      },
      {
        label: 'Confirmation',
        command: (event: any) => console.log(event),
      },
    ];
  }

  next() {
    this.activeIndex = this.activeIndex + 1;
  }

  back() {
    this.activeIndex = this.activeIndex - 1;
  }
}
