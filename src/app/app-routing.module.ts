import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { BlankContainerComponent } from './ui/container/blank-container/blank-container.component';
import { WebappContainerComponent } from './ui/container/webapp-container/webapp-container.component';

const routes: Routes = [
  // {
  //   path: "",
  //   redirectTo:"contact-us",
  //   pathMatch:"full"
  // },
  {
    path: '',
    component: WebappContainerComponent,
    children: [
      {
        path: 'test',
        loadChildren: () =>
          import('./ui/components/test/test.module').then((m) => m.TestModule),
      },
      {
        path: 'default',
        loadChildren: () =>
          import('./ui/components/angular-default/angular-default.module').then(
            (m) => m.AngularDefaultModule
          ),
      },
      {
        path: 'contact-us',
        loadChildren: () =>
          import('./ui/components/contact-us/contact-us.module').then(
            (m) => m.ContactUsModule
          ),
      },
      {
        path: 'about-us',
        loadChildren: () =>
          import('./ui/components/about-us/about-us.module').then(
            (m) => m.AboutUsModule
          ),
      },
      {
        path: 'gallery',
        loadChildren: () =>
          import('./ui/components/gallery/gallery.module').then(
            (m) => m.GalleryModule
          ),
      },
      {
        path: 'gallery/:category',
        loadChildren: () =>
          import('./ui/components/inner-gallery/inner-gallery.module').then(
            (m) => m.InnerGalleryModule
          ),
      },
      {
        path: '',
        loadChildren: () =>
          import('./ui/components/home/home.module').then((m) => m.HomeModule),
      },
    ],
  },
];

const ROOT_ROUTING: ModuleWithProviders = RouterModule.forRoot(
  routes,

  {
    preloadingStrategy: PreloadAllModules,
    useHash: false,
    enableTracing: false,
    scrollPositionRestoration: 'top',
  }
);

@NgModule({
  imports: [ROOT_ROUTING],
  exports: [RouterModule],
})
export class AppRoutingModule {}
