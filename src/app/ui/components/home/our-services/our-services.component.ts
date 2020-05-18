import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.scss'],
})
export class OurServicesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  _mServices = [
    {
      title: 'Lawn and Park',
      subtitle: 'Gardening',
      icon: 'assets/img/service_gradening.png',
      options: [
        { type: 'Mowing', value: 'Adjusting' },
        { type: 'Tree Trimming', value: 'Cleaning' },
      ],
    },
    {
      title: 'Home & Office',
      subtitle: 'Planting',
      icon: 'assets/img/service_planting.png',
      options: [
        { type: 'Mowing', value: 'Adjusting' },
        { type: 'Tree Trimming', value: 'Cleaning' },
      ],
    },
    {
      title: 'Home & Office',
      subtitle: 'Care',
      icon: 'assets/img/service_care.png',
      options: [
        { type: 'Pesticides', value: 'Adjusting' },
        { type: 'Tree Trimming', value: 'Cleaning' },
      ],
    },
  ];
}
