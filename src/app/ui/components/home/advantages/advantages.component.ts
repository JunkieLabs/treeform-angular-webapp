import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advantages',
  templateUrl: './advantages.component.html',
  styleUrls: ['./advantages.component.scss'],
})
export class AdvantagesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  _mAdvantages = [
    {
      title: 'Trusted',
      body: 'Amazing response by our clients to our acute attention to detail.',
      icon: 'assets/img/trusted.png',
    },
    {
      title: 'Cure',
      body: 'Our experienced team can execute any difficult undertaking.',
      icon: 'assets/img/cure.png',
    },
    {
      title: 'Refreshing',
      body: 'Your space will bloom as palnts do.',
      icon: 'assets/img/refreshing.png',
    },
  ];
}
