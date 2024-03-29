import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})

export class BannerComponent{

  images: string[] = ['https://graphicsfamily.com/wp-content/uploads/edd/2021/07/Shop-Products-Social-Media-Banner-Design-Template-scaled.jpg', 'https://cdn.vectorstock.com/i/preview-1x/64/35/merry-christmas-banner-with-product-table-display-vector-44736435.webp', 'https://cdn.vectorstock.com/i/preview-1x/14/27/dairy-product-horizontal-web-banner-vector-45811427.webp'];
  currentIndex: number = 0;

  constructor() { }

  prev() {
    this.currentIndex = (this.currentIndex === 0) ? this.images.length - 1 : this.currentIndex - 1;
  }

  next() {
    this.currentIndex = (this.currentIndex === this.images.length - 1) ? 0 : this.currentIndex + 1;
  }

  timeOut = setTimeout(() => {
    this.currentIndex += 1;
    if(this.currentIndex > this.images.length - 1) {
      this.currentIndex = 0;
    }
    this.timeOut;
  }, 1000);

  // slides: any[] = new Array(3).fill({id: -1, src: '', title: '', subtitle: ''});

  // constructor() { }

  // ngOnInit(): void {
  //   this.slides[0] = {
  //     id: 0,
  //     src: './assets/img/angular.jpg',
  //     title: 'First slide',
  //     subtitle: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
  //   };
  //   this.slides[1] = {
  //     id: 1,
  //     src: './assets/img/react.jpg',
  //     title: 'Second slide',
  //     subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  //   }
  //   this.slides[2] = {
  //     id: 2,
  //     src: './assets/img/vue.jpg',
  //     title: 'Third slide',
  //     subtitle: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
  //   }
  // }
}
