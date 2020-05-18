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
      body: 'To bring the natural system into balance, a new balance',
      icon: 'assets/img/trusted.png',
    },
    {
      title: 'Cure',
      body: 'To bring the natural system into balance, a new balance',
      icon: 'assets/img/cure.png',
    },
    {
      title: 'Refreshing',
      body: 'To bring the natural system into balance, a new balance',
      icon: 'assets/img/refreshing.png',
    },
  ];
}
