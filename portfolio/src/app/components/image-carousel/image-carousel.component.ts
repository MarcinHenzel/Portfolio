import { projectCaruData } from './../../shared/models/projectImgs';
import { Component, OnInit, Input, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { imgObj } from 'src/app/shared/models/imgObj';

@Component({
  selector: 'app-image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.scss']
})
export class ImageCarouselComponent implements OnInit {
  @Input() project: projectCaruData;
  @ViewChild('img') imgRef: ElementRef;
  actualImage;
  counter = 0;
  intervalRef;
  constructor(private rend: Renderer2) { }

  ngOnInit(): void {
    this.actualImage = this.project.images[0].src;
    this.intervalRef = setInterval(this.interval, 3000);
  }

  interval = () => {
    this.counter = ++this.counter % this.project.images.length;
    this.changeImage(this.counter);
  };
  manualChange(str) {
    this.counter = parseInt(str, 10);
    this.changeImage(this.counter);
  }
  changeImage(index) {
    this.rend.setStyle(this.imgRef.nativeElement, 'opacity', '0');
    setTimeout(() => {
      this.actualImage = this.project.images[index].src;
      clearInterval(this.intervalRef);
      this.intervalRef = setInterval(this.interval, 3000);
      this.rend.setStyle(this.imgRef.nativeElement, 'opacity', '1');
    }, 250);
  }
}
