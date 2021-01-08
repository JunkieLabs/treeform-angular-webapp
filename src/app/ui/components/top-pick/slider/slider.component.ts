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
      console.log("loopedSlides: ", this._mSlides.length);
      
      this.config.loopedSlides = this._mSlides.length

    }
  }

  @Output() slideChange = new EventEmitter<ParamTopPick>();
  @Output() direction = new EventEmitter<string>();

  public type = 'component';

  public disabled = false;

  public config: SwiperConfigInterface = {
    a11y: true,
    // direction: 'horizontal',
    slidesPerView: 8,
    spaceBetween: 10,
    keyboard: true,
    mousewheel: false,
    scrollbar: false,
    navigation: false,
    pagination: false,
    loop: true,
    loopedSlides: 26,
    slideToClickedSlide: true,
    observer: true,
    speed: 1000,
    direction:'vertical',
    breakpoints: {
      // 600: { slidesPerView: 5, direction: 'horizontal' },
      959: { slidesPerView: 8, direction: 'horizontal' },
      1279: { slidesPerView: 10, direction: 'horizontal' },
    },
  };

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this._onIndexChange(this.activeIndex);
  }

  public _onIndexChange(index: number): void {
    console.log('Swiper index: ', index);
    this.slideChange.emit(this._mSlides[index]);
    this.direction.emit(this.findDirection(index));
    this.previousIndex = index;
  }

  public _onSwiperEvent(event: string): void {
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

  public _setGradient(colors) {
    const gradientColors = colors.toString();
    const styles = {
      'background-image': `linear-gradient(${gradientColors})`,
      'background-repeat': 'no-repeat',
    };
    return styles;
  }
}
