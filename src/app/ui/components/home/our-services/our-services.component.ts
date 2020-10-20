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
      title: 'Lawn & Park',
      subtitle: 'Gardening',
      icon: 'assets/img/service_gradening.png',
      detail: "Save your time and get lot of nature at your doorsteps.",
      options: [
        { type: 'Mowing', value: 'Adjusting' },
        { type: 'Tree Trimming', value: 'Cleaning' },
      ],
    },
    {
      title: 'WorkSpace/Office',
      subtitle: 'Planting',
      icon: 'assets/img/service_planting.png',
      detail: "Save your time and get lot of nature at your doorsteps.",
      options: [
        { type: 'Mowing', value: 'Adjusting' },
        { type: 'Tree Trimming', value: 'Cleaning' },
      ],
    },
    {
      title: 'Home & Kitchen',
      subtitle: 'Care',
      icon: 'assets/img/service_care.png',
      detail: "Save your time and get lot of nature at your doorsteps.",
      options: [
        { type: 'Pesticides', value: 'Adjusting' },
        { type: 'Tree Trimming', value: 'Cleaning' },
      ],
    },
  ];
}
