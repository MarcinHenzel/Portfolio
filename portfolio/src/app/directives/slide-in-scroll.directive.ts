import { Directive, ElementRef, Renderer2, Input, AfterViewInit, OnInit } from '@angular/core';

@Directive({
  selector: '[appSlideInScroll]'
})
export class SlideInScrollDirective implements AfterViewInit, OnInit {
  @Input('appSlideInScroll') translate: number;
  @Input() delay: number;
  constructor(private elRef: ElementRef, private rend: Renderer2) {

  }
  ngOnInit(): void {
    this.translate = this.translate || 15;
    this.delay = this.delay || 0;
  }
  ngAfterViewInit(): void {
    this.rend.setStyle(this.elRef.nativeElement, 'transform', `translateY(${this.translate}%)`);
    this.rend.setStyle(this.elRef.nativeElement, 'opacity', '0');
    this.rend.setStyle(this.elRef.nativeElement, 'transition', 'transform 0.7s, opacity 0.7s');

    const obs = new IntersectionObserver(entries => {
      entries.forEach(({ isIntersecting }) => {
        if (isIntersecting) {
          this.slideIn();
          obs.unobserve(this.elRef.nativeElement);
        }
      });
    }, { rootMargin: '-10% 0px' });
    obs.observe(this.elRef.nativeElement);
  }
  private slideIn() {
    setTimeout(() => {
      this.rend.setStyle(this.elRef.nativeElement, 'transform', '');
      this.rend.setStyle(this.elRef.nativeElement, 'opacity', '1');
    }, this.delay);
  }

}
