import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-our-store',
  templateUrl: './our-store.component.html',
  styleUrls: ['./our-store.component.scss'],
})
export class OurStoreComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  _navigateTo() {
    this.router.navigate(['/top-pick']);
  }
}
