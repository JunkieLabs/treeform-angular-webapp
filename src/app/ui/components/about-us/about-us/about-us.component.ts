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
    'Use of top quality  materials',
    'Authentic High Quality Plants',
    'Customization as you desire',
    'Maintain and services designs, plantings',
    'Services for  existing space',
  ];
}
