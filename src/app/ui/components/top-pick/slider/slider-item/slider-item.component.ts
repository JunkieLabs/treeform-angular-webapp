import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import {
  trigger,
  state,
  transition,
  style,
  animate,
  keyframes,
} from '@angular/animations';

@Component({
  selector: 'app-slider-item',
  templateUrl: './slider-item.component.html',
  styleUrls: ['./slider-item.component.scss'],
  animations: [
    trigger('toggle', [
      state('true', style({ opacity: 1 })),
      state('false', style({ opacity: 1 })),
      transition('true <=> false', [
        style({ opacity: 0 }),
        animate('800ms ease-in'),
      ]),
      transition('false <=> true', [
        style({ opacity: 0 }),
        animate('800ms ease-out'),
      ]),
    ]),
    // trigger('slideInOut', [
    //   state('false', style({
    //     width: '100%',
    //     height: '*',
    //     opacity: 1
    //   })),
    //   state('true', style({
    //     width: '100%',
    //     height: '*',
    //     opacity: 1
    //   })),
    //   transition('true => false', [style({width: '0%',height: '*', opacity: 1}), animate('400ms linear')]),
    //   transition('false => true', [style({width: '0%',height: '*', opacity: 1}), animate('400ms linear')])
    // ])
    trigger('slideInOut', [
      transition('* <=> *', [
        animate(
          '1s',
          keyframes([
            style({
              width: '100px',
              height: '300px',
              opacity: '1',
              overflow: 'visible',
            }),
            style({
              width: '70px',
              height: '300px',
              opacity: '0.7',
              overflow: 'hidden',
            }),
            style({
              width: '0px',
              height: '300px',
              opacity: '0',
              overflow: 'hidden',
            }),
            style({
              width: '70px',
              height: '300px',
              opacity: '0.7',
              overflow: 'hidden',
            }),
            style({
              width: '100px',
              height: '300px',
              opacity: '1',
              overflow: 'visible',
            }),
          ])
        ),
      ]),
    ]),
    // transition('false <=> true', [
    //   animate('400ms', keyframes([
    //     style({width: '0px', height:'*', overflow: 'hidden'}),
    //     style({width: '0px', height:'*', overflow: 'hidden'})
    //   ])),
    // ])
    trigger('panelAnimation', [
      state('in', style({ transform: 'translateX(0)' })),
      transition(
        'void => *',
        animate(
          '600ms ease-in',
          keyframes([
            style({ opacity: 0, offset: 0 }),
            style({ opacity: 1, offset: 1.0 }),
          ])
        )
      ),
    ]),
    trigger('graphAnimation', [
      state(
        'true',
        style({
          right: 0,
          width: '100%',
        })
      ),
      state(
        'false',
        style({
          right: 0,
          width: '100%',
        })
      ),
      transition('true => false', [
        style({ right: 0, width: '0%' }),
        animate('600ms 0.2ms ease-in-out'),
      ]),
      transition('false => true', [
        style({ right: 0, width: '0%' }),
        animate('600ms 0.2ms ease-in-out'),
      ]),
    ]),
  ],
})
export class SliderItemComponent implements OnInit, AfterViewInit {
  _mIsTriggred = 'true';
  _mModel: any;

  @Input('model') set slide(data: any) {

    if (data) {
      this._mModel = data;
      this._mIsTriggred = this._mIsTriggred === 'true' ? 'false' : 'true';
    }
  }

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {}
}
