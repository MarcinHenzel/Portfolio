import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { DynamicImgsService } from 'src/app/shared/services/dynamic-imgs.service';
import { projectImgs } from 'src/app/shared/models/projectImgs';

@Component({
  selector: 'app-image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.scss']
})
export class ImageCarouselComponent implements OnInit {
  qqq;
  @Input() project = 'ITFS';
  actualImage = '/assets/images/rwdPhones.png';
  counter = 0;
  intervalRef;
  images: projectImgs;
  constructor( private dynamicImgs: DynamicImgsService) { }

  ngOnInit(): void {
    this.images = this.dynamicImgs.getProjectImgs(this.project);
    this.intervalRef = setInterval(this.interval, 3000);
  }

  interval = () => {
    this.counter = ++this.counter % 3;
    this.changeImage(this.counter);
  };
  manualChange(str) {
    this.counter = parseInt(str, 10);
    this.changeImage(this.counter);
  }
  changeImage(index) {
    this.actualImage = this.images.images[index].src;
    clearInterval(this.intervalRef);
    this.intervalRef = setInterval(this.interval, 3000);
  }
  dsa(e) {
    console.log(e);
  }
}
