import { imgObj } from '../../shared/models/ImgObj';
import { projectCaruData } from '../../shared/models/ProjectImgs';
import { Component, OnInit, Input, ElementRef, Renderer2, ViewChildren, AfterViewInit, QueryList } from '@angular/core';

@Component({
  selector: 'app-image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.scss']
})
export class ImageCarouselComponent implements OnInit, AfterViewInit {
  @Input() project: projectCaruData;
  @ViewChildren('img') imgRefs: QueryList<any>;
  imgRefsArr;
  imgArr: imgObj[] = [];
  counter = 0;
  intervalRef;
  constructor(private rend: Renderer2) {
  }

  ngOnInit(): void {
    this.project.images.forEach((image: imgObj) => {
      this.imgArr.push(image);
    });
    this.intervalRef = setInterval(this.interval, 3000);

  }
  ngAfterViewInit(): void {
    this.imgRefsArr = this.imgRefs.toArray();
    this.imgRefsArr.forEach((el: ElementRef) => {
      this.rend.setStyle(el.nativeElement, 'opacity', 0);
    })
    this.changeImage(0);
  }
  interval = () => {
    this.counter = ++this.counter % this.project.images.length;
    this.changeImage(this.counter);
  };
  manualChange(str) {
    this.counter = parseInt(str, 10);
    this.changeImage(this.counter);
    clearInterval(this.intervalRef);
    this.intervalRef = setInterval(this.interval, 3000);
  }
  changeImage(index) {
    this.imgRefsArr.forEach((image: ElementRef, i) => {
      const opacityValue = (index === i) ? 1 : 0;
      this.rend.setStyle(image.nativeElement, 'opacity', opacityValue);
    });
  }
}
