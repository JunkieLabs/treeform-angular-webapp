import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollEventService {

  static SUB_HEADING = {
    home: 0,
    screens: 1,
    colors: 2,
    typography: 3,
    icons: 4,
    components: 5,


  };

  static SHOWCASE = {
    sections: {
      android: 101,
      web: 102,
      desing: 103,
      illustration: 104,
      doodle: 105
    },
    default: 100

  }

  private actionMainEmitter: EventEmitter<Number> = new EventEmitter<Number>();
  private mCurrentHeading: Number = 1;

  private mShowcaseEmitter: EventEmitter<Number> = new EventEmitter<Number>();
  private mCurrentShowcase: Number = 101;


  constructor() { }

  emitHeadingEvent(heading: Number) {

    if (this.mCurrentHeading == heading) return
    this.mCurrentHeading = heading
    this.actionMainEmitter.emit(heading);
  }

  getActionMainEmitter(): EventEmitter<Number> {
    return this.actionMainEmitter;
  }

  emitShowcaseEvent(point: Number) {

    if (this.mCurrentShowcase == point) return
    this.mCurrentShowcase = point
    this.mShowcaseEmitter.emit(point);
  }

  getShowcaseEmitter(): EventEmitter<Number> {
    return this.mShowcaseEmitter;
  }
}
