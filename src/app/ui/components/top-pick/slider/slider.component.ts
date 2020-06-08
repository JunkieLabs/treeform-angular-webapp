import { Component, OnInit, Input } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  @Input() slides: any[];
  _mCurrentItem = 0;

  public type = 'component';

  public disabled = false;

  public config: SwiperConfigInterface = {
    a11y: true,
    direction: 'horizontal',
    slidesPerView: 7,
    spaceBetween: 10,
    keyboard: true,
    mousewheel: false,
    scrollbar: false,
    navigation: false,
    pagination: false,
    loop: true,
    loopedSlides: 20,
    effect: 'slide',
    freeMode: false,
    slideToClickedSlide: true,
    observer: true,
    centeredSlides: false,
    speed: 1000,
    breakpoints: {
      318: { slidesPerView: 2 },
      640: { slidesPerView: 3 },
      1000: { slidesPerView: 7 }
    },
  };

  constructor() {}

  ngOnInit(): void {}

  public onIndexChange(index: number): void {
    console.log('Swiper index: ', index);
    this._mCurrentItem = index;
  }

  public onSwiperEvent(event: string): void {
    console.log('Swiper event: ', event);
  }

  public setGradient(colors) {
    const gradientColors = colors.toString();
    const styles = {
      'background-image': `linear-gradient(${gradientColors})`,
      'background-repeat': 'no-repeat',
    };
    return styles;
  }
}
