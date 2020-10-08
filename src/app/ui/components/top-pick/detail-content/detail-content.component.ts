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
import { TranslationWidth } from '@angular/common';

@Component({
  selector: 'app-detail-content',
  templateUrl: './detail-content.component.html',
  styleUrls: ['./detail-content.component.scss'],
  host: { class: "tb-width--full" },
  animations: [
    trigger('moveDownEffect', [
      transition('true => false', [
        animate('500ms ease-out',
        keyframes([
          style({ transform: 'translateY(150px)' ,opacity: 0 }),
        ])),
      ]),
      transition('false => true', [
        animate('500ms ease-in',
        keyframes([
          style({ transform: 'translateY(0px)' ,opacity: 1 }),
        ])),
      ]),
    ]),
  ],
})
export class DetailContentComponent implements OnInit {
  _mIsTriggred = 'true'
  _mModel: ParamTopPick;

  _mNext = null;
  @Input('model') set slide(data: ParamTopPick) {
    if (data) {
      this.StartAnimation(data);
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

  StartAnimation(next){
    this._mIsTriggred = this._mIsTriggred === 'true' ? 'false' : 'true';
    this._mNext = next;
  }

  onAnimationDone(e){
    this._mIsTriggred = 'true';
    this._mModel = this._mNext
  }
}
