import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  AfterViewInit,
} from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { ParamTopPick } from 'src/app/components/api/params/topPick';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit, AfterViewInit {
  _mSlides: ParamTopPick[];
  previousIndex: number = 0;
  activeIndex: number = 0;
  @Input('model') set slides(data: ParamTopPick[]) {
    if (data) {
      this._mSlides = data;
    }
  }

  @Output() slideChange = new EventEmitter<ParamTopPick>();
  @Output() direction = new EventEmitter<string>();

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
    loopedSlides: 26,
    // freeMode: false,
    slideToClickedSlide: true,
    // autoplay: true,
    observer: true,
    // centeredSlides: false,
    speed: 1000,
    breakpoints: {
      318: { slidesPerView: 8, direction: 'vertical' },
      959: { slidesPerView: 5, direction: 'horizontal' },
      1024: { slidesPerView: 7, direction: 'horizontal' },
    },
  };

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.onIndexChange(this.activeIndex);
  }

  public onIndexChange(index: number): void {
    console.log('Swiper index: ', index);
    this.slideChange.emit(this._mSlides[index]);
    this.direction.emit(this.findDirection(index));
    this.previousIndex = index;
  }

  public onSwiperEvent(event: string): void {
    // console.log('Swiper event: ', event);
  }

  findDirection(index) {
    this.activeIndex = index;
    if (this.activeIndex != 1 && this.previousIndex == 0) {
      return 'left';
    }
    if (this.activeIndex > this.previousIndex) {
      return 'right';
    } else if (this.activeIndex < this.previousIndex) {
      return 'left';
    }
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
