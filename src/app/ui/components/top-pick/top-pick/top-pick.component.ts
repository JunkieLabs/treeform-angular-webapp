import { Component, OnInit } from '@angular/core';
import { ParamTopPick } from 'src/app/components/api/params/topPick';
import { TopPickService } from 'src/app/components/api/components/api-topPick.service';
import {
  trigger,
  state,
  transition,
  style,
  animate,
  keyframes,
} from '@angular/animations';

@Component({
  selector: 'app-top-pick',
  templateUrl: './top-pick.component.html',
  styleUrls: ['./top-pick.component.scss'],
  animations: [
    trigger('fadeEffect', [
      transition('true => false', [
        animate('600ms ease-in', keyframes([style({ opacity: 0, transform: 'none' })])),
      ]),
      transition('false => true', [
        animate('600ms ease-out', keyframes([style({ opacity: 0, transform: 'none' })])),
      ]),
    ]),
  ],
})
export class TopPickComponent implements OnInit {
  _mIsTriggred = 'true';
  _mDirection: string = 'left';

  public _mTopPicks: ParamTopPick[] = [];
  public _mTopPick: ParamTopPick;
  public _mNextTopPick: ParamTopPick;

  constructor(private topPickService: TopPickService) {}

  ngOnInit(): void {
    this.getTopPicks();
  }

  OnSlideChange(event) {
    setTimeout(() => {
      this.StartAnimation(event);
    });
  }

  StartAnimation(next) {
    this._mIsTriggred = this._mIsTriggred === 'true' ? 'false' : 'true';
    this._mNextTopPick = next;
  }

  onAnimationDone(e) {
    this._mIsTriggred = 'true';
    this._mTopPick = this._mNextTopPick;
  }

  /**
   *   Api Service
   */
  getTopPicks() {
    this.topPickService.getTopPicks().subscribe((response) => {
      this._mTopPicks = response;
    });
  }
}
