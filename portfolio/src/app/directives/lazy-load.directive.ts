import { Directive, HostBinding, Input, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appLazyLoad]'
})
export class LazyLoadDirective implements AfterViewInit {
  @HostBinding('attr.src') srcAttr = null;
  @Input() src: string;
  constructor(private elRef: ElementRef) { }

  ngAfterViewInit() {
    this.canLazyLoad() ? this.lazyLoadImage() : this.loadImage()
  }

  private canLazyLoad() {
    return window && 'IntersectionObserver' in window;
  }
  private loadImage() {
    this.srcAttr = this.src;
  }
  private lazyLoadImage() {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(({ isIntersecting }) => {
        if (isIntersecting) {
          this.loadImage();
          obs.unobserve(this.elRef.nativeElement);
        }
      });
    }, {rootMargin: '30%'})
    obs.observe(this.elRef.nativeElement);
  }
}
