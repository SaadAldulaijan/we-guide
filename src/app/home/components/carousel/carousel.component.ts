import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  responsiveOptions: any[] | undefined;
  carouselItems = [];

  constructor() {}
  ngOnInit(): void {
    this.loadCarousel();
  }

  loadCarousel() {

    this.carouselItems = [
      { id: 1, name: 'test1', image: '', href: '' },
      { id: 2, name: 'test2', image: '', href: '' },
      { id: 3, name: 'test3', image: '', href: '' },
      { id: 4, name: 'test4', image: '', href: '' },
      { id: 5, name: 'test5', image: '', href: '' },
    ]
    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }
}
