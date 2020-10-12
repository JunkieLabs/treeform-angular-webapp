import { Component, OnInit, ElementRef, OnDestroy } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-inner-gallery',
  templateUrl: './inner-gallery.component.html',
  styleUrls: ['./inner-gallery.component.scss'],
})
export class InnerGalleryComponent implements OnInit {
  _mFlexBorderSize = 6;
  _mFlexImageSize = 11;
  _mGalleryName = 'garden';
  // _mGalleryName = '';
  _mRefSelf: any;
  _mActiveCategory = 0;
  _mCategories = ['gardening', 'pots', 'office'];

  currentRoute = '';

  constructor(
    private el: ElementRef,
    private location: Location,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {
    const paramName = 'category';
    this._mRefSelf = this.el.nativeElement;
    this.currentRoute = this.activeRoute.snapshot.params[paramName] || '';
  }

  ngOnInit(): void {
    this._mGalleryName = this.currentRoute;
    this.getActiveRoute();
  }

  _toggleCategory(e) {
    this.router.navigate([`/gallery/${this._mCategories[e]}`]);
    this._mGalleryName = this._mCategories[e];
    this._mActiveCategory = e;
  }

  _onViewerVisibilityChanged(isVisible: boolean): void {
    console.log(`viewer visible: ${isVisible}`)
  }

  _onNavigateBack() {
    this.location.back();
  }

  getActiveRoute() {
    const activeIndex = this._mCategories.indexOf(this.currentRoute);
    this._mActiveCategory = activeIndex;
  }
}
