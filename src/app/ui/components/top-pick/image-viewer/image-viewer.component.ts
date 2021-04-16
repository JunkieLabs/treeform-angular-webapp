import { Component, OnInit, Input } from '@angular/core';
import { ParamTopPick } from 'src/app/components/api/params/topPick';
import {
  trigger,
  state,
  transition,
  style,
  animate,
  keyframes,
} from '@angular/animations';

@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.scss'],
  host: { class: 'tb-width--full' },
  animations: [
    // trigger('wipeEffect', [
    //   state('true', style({ width: '100%' })),
    //   state('false', style({ width: '0%' })),
    //   transition('true <=> false', [
    //     animate('1000ms ease-in'),
    //   ]),
    // ]),
    trigger('slideInOutRight', [
      state('true', style({ opacity: 1, width: '100%' })),
      state('false', style({ opacity: 1, width: '0%' })),
      transition('false => true', [
        animate(
          '800ms',
          keyframes([
            style({
              opacity: 1,
              transform: 'translate3d(100%, 0, 0)',
              width: '100%',
              offset: 0,
            }),
            style({ opacity: 1, transform: 'translate3d(0, 0, 0)', width: '100%', offset: 1 }),
          ])
        ),
      ]),

      transition('true => false', [
        animate(
          '400ms 600ms',
          keyframes([
            style({ opacity: 1, width: '100%', offset: 0 }),
            style({ opacity: 1, width: '0%', offset: 1 }),
          ])
        ),
      ]),


    ]),
    trigger('slideInOutLeft', [
      // transition('true => false', [
      //   animate(
      //     '500ms',
      //     keyframes([
      //       style({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 0 }),
      //       style({
      //         opacity: 1,
      //         transform: 'translate3d(100%, 0, 0)',
      //         offset: 1,
      //       }),
      //     ])
      //   ),
      // ]),
      // transition('false => true', [
      //   animate(
      //     '500ms',
      //     keyframes([
      //       style({ opacity: 1, width: '0%', offset: 0 }),
      //       style({ opacity: 1, width: '100%', offset: 1 }),
      //     ])
      //   ),
      // ]),
      state('true', style({ opacity: 1, width: '100%' })),
      state('false', style({ opacity: 1, width: '0%' })),
      transition('false => true', [
          animate(
            '500ms',
            keyframes([
              style({ opacity: 1, width: '0%', offset: 0 }),
              style({ opacity: 1, width: '100%', offset: 1 }),
            ])
          ),
        ]),
        transition('true => false', [
            animate(
              '500ms 600ms',
              keyframes([
                style({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 0 }),
                style({
                  opacity: 1,
                  transform: 'translate3d(100%, 0, 0)',
                  offset: 1,
                }),
              ])
            ),
          ]),
      // transition('false => true', [
      //   animate(
      //     '800ms',
      //     keyframes([
      //       style({
      //         opacity: 1,
      //         transform: 'translate3d(-100%, 0, 0)',
      //         width: '100%',
      //         offset: 0,
      //       }),
      //       style({ opacity: 1, transform: 'translate3d(0, 0, 0)', width: '100%', offset: 1 }),
      //     ])
      //   ),
      // ]),
      // transition('true => false', [
      //   animate(
      //     '400ms 600ms',
      //     keyframes([
      //       style({ opacity: 1, width: '100%', offset: 0 }),
      //       style({ opacity: 1, width: '0%', offset: 1 }),
      //     ])
      //   ),
      // ]),
    ]),
  ],
})
export class ImageViewerComponent implements OnInit {
  _mTriggerRight = 'false';
  _mTriggerLeft = 'false';
  _mNextImage = null;
  _mCurrentImage = null;

  _mModel: ParamTopPick;
  _mDirection: string;
  @Input('model') set slide(data: ParamTopPick) {
    if (data) {
      this._mModel = data;
      this.startAnimation(this._mModel.img);
    }
  }

  @Input('direction') set direction(data: string) {
    if (data) {
      this._mDirection = data;
    }
  }

  _mImgVisible = true;

  constructor() { }

  ngOnInit(): void { }

  startAnimation(nextImage: string) {
    if (this._mDirection == 'right') {
      this._mTriggerRight = this._mTriggerRight === 'true' ? 'false' : 'true';
    } else {
      this._mTriggerLeft = this._mTriggerLeft === 'true' ? 'false' : 'true';
    }
    console.log("startAnimation", this._mTriggerRight);
    this._mNextImage = nextImage;
  }

  _onAnimationDone(e) {
    console.log("_onAnimationDone", this._mTriggerRight);

    if (this._mDirection == 'right') {
      this._mTriggerRight = 'false';
    } else {
      this._mTriggerLeft = 'false';
    }

    if(this._mCurrentImage!=this._mNextImage){
      this._mCurrentImage = this._mNextImage;
    
      this._mImgVisible =  false;
    }
    
  }

  _onImageLoaded(){
    console.log("_onImageLoaded()");
    this._mImgVisible =  true;
  }
}
