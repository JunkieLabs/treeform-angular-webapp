import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';


@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent implements OnInit {
  constructor( private meta: Meta,private titleService: Title) {}
  _mOptions = [
    'To bring the natural system into balance, a new economy that is sustainable',
    'To bring the natural system into balance',
    'To bring the natural system into balance, a new economy that is sustainable',
    'To bring the natural system into balance',
  ];

  ngOnInit(): void {
    this.initMetaTags();
  }

  initMetaTags(){
    this.titleService.setTitle('treeform.ssr: About us');
    this.meta.addTag({
      name: 'angular.treeform',
      content: 'angular treeform pwa ssr'
    });
    this.meta.updateTag(
      {
        name: 'description',
        content: 'Treefor Angular version 9 app Routing, Lazy loading, Server side rendering - Progressive Web App (PWA)'
      });
  }
}
