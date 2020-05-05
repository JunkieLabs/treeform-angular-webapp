import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-default',
  templateUrl: './angular-default.component.html',
  styleUrls: ['./angular-default.component.scss']
})
export class AngularDefaultComponent implements OnInit {

  title = 'treeform-angular-webapp';
  constructor() { }

  ngOnInit(): void {
  }

}
