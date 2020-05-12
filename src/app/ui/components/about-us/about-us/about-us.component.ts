import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  _mOptions = [
    'To bring the natural system into balance, a new economy that is sustainable',
    'To bring the natural system into balance',
    'To bring the natural system into balance, a new economy that is sustainable',
    'To bring the natural system into balance',
  ];
}
