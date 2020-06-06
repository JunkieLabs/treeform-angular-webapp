import { Component, OnInit } from '@angular/core';
import { ParamTopPick } from 'src/app/components/api/params/topPick';
import { TopPickService } from 'src/app/components/api/components/api-topPick.service';

@Component({
  selector: 'app-top-pick',
  templateUrl: './top-pick.component.html',
  styleUrls: ['./top-pick.component.scss'],
})
export class TopPickComponent implements OnInit {

  // tslint:disable-next-line: variable-name
  public _mTopPicks: ParamTopPick[] = [];

  constructor(private topPickService: TopPickService) {}

  ngOnInit(): void {
    this.getTopPicks();
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
